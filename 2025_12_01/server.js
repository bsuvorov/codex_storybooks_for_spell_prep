const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const GOOGLE_TTS_API_KEY = process.env.GOOGLE_TTS_API_KEY;
const GOOGLE_TTS_LANGUAGE_CODE = process.env.GOOGLE_TTS_LANGUAGE_CODE || 'en-US';
const GOOGLE_TTS_VOICE = process.env.GOOGLE_TTS_VOICE || 'en-US-Neural2-C';
const GOOGLE_TTS_AUDIO_ENCODING = process.env.GOOGLE_TTS_AUDIO_ENCODING || 'MP3';
const GOOGLE_TTS_SPEAKING_RATE = Number(process.env.GOOGLE_TTS_SPEAKING_RATE || 1.0);
const GOOGLE_TTS_PITCH = Number(process.env.GOOGLE_TTS_PITCH || 0.0);

const synthCache = new Map();

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname)));

app.post('/api/tts', async (req, res) => {
  if (!GOOGLE_TTS_API_KEY) {
    return res.status(400).json({ error: 'Google Cloud Text-to-Speech API key is not configured.' });
  }

  const text = (req.body?.text || '').toString().trim();
  if (!text) {
    return res.status(400).json({ error: 'Text is required for synthesis.' });
  }

  const cacheKey = `${GOOGLE_TTS_LANGUAGE_CODE}|${GOOGLE_TTS_VOICE}|${GOOGLE_TTS_AUDIO_ENCODING}|${GOOGLE_TTS_SPEAKING_RATE}|${GOOGLE_TTS_PITCH}|${text}`;
  const cached = synthCache.get(cacheKey);
  if (cached) {
    res.set('Content-Type', cached.contentType);
    return res.send(cached.buffer);
  }

  const requestBody = {
    input: { text },
    voice: {
      languageCode: GOOGLE_TTS_LANGUAGE_CODE,
      name: GOOGLE_TTS_VOICE,
    },
    audioConfig: {
      audioEncoding: GOOGLE_TTS_AUDIO_ENCODING,
      speakingRate: GOOGLE_TTS_SPEAKING_RATE,
      pitch: GOOGLE_TTS_PITCH,
    },
  };

  const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${GOOGLE_TTS_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  });

  const data = await response.json();
  if (!response.ok) {
    const message = data?.error?.message || 'Unable to synthesize speech.';
    return res.status(response.status).json({ error: message });
  }

  if (!data.audioContent) {
    return res.status(502).json({ error: 'No audio content returned from Google Cloud.' });
  }

  const buffer = Buffer.from(data.audioContent, 'base64');
  const contentType = GOOGLE_TTS_AUDIO_ENCODING === 'OGG_OPUS' ? 'audio/ogg' : 'audio/mpeg';

  synthCache.set(cacheKey, { buffer, contentType });
  res.set('Content-Type', contentType);
  return res.send(buffer);
});

app.listen(PORT, () => {
  console.log(`Storybook server listening on http://localhost:${PORT}`);
});
