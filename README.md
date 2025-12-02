# Storybook with Google Cloud TTS

This folder (`2025_12_01/`) hosts the storybook with optional Google Cloud Text-to-Speech narration.

## Local run
1. Install Node.js 18+.
2. From `2025_12_01/`, install dependencies:
   ```bash
   npm install
   ```
3. Provide your Google Cloud Text-to-Speech API key as an environment variable **before** starting the server:
   ```bash
   export GOOGLE_TTS_API_KEY="<your-api-key>"
   # Optional overrides
   export GOOGLE_TTS_LANGUAGE_CODE="en-US"
   export GOOGLE_TTS_VOICE="en-US-Neural2-C"
   export GOOGLE_TTS_AUDIO_ENCODING="MP3"
   export GOOGLE_TTS_SPEAKING_RATE="1.0"
   export GOOGLE_TTS_PITCH="0.0"
   npm start
   ```

   If you prefer a file-based setup, copy `2025_12_01/.env.example` to `2025_12_01/.env`, fill in your key and any overrides,
   then run `npm start`. The server will load variables from `.env` automatically.
4. Open http://localhost:3000.

If the key is missing, the app falls back to the browser’s built-in voice synthesis. The Express server must be running for the Google narrator to work.

## Deployment basics
The server is a simple Express app that serves static assets and exposes `/api/tts`. You can deploy the `2025_12_01/` folder to any Node-friendly host (Render, Railway, Fly.io, GCP Cloud Run, Heroku, etc.).

- Set `GOOGLE_TTS_API_KEY` (and any optional voice vars above) in your host’s environment variable settings.
- Use `npm install` for build/install and `npm start` (or `node server.js`) as the start command.
- Expose port 3000 (or rely on `$PORT` provided by the platform; the server already respects `process.env.PORT`).

## Google Cloud Text-to-Speech key
Create or reuse a Google Cloud project with the Text-to-Speech API enabled and generate an API key. In most hosts, you paste this value into an environment variable named `GOOGLE_TTS_API_KEY`. No code changes are needed; `server.js` reads it at startup.
