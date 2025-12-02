const pages = [
  {
    title: "The Big Trip Begins",
    text: `How do we fit everything in the RV? It is always a puzzle! We go on a big trip once a summer, and today is the day. I am so excited because my best friends, Siena, Lev, and Samuel, are coming too. "Put these bags over there," said Dad. "And put the painting supplies here on the table." We are all happy because we are going to the campground with the big pool!`,
    image: {
      src: "https://image.pollinations.ai/prompt/cheerful%20illustration%20of%20a%20family%20and%20four%20kids%20packing%20an%20RV%20in%20a%20driveway%2C%20bright%20day%2C%20kid%20holding%20painting%20canvases%2C%20whimsical%20story%20book%20style%2C%20warm%20colors%2C%20digital%20painting%2C%20kids%20book%20art&width=900&height=700&format=jpeg",
      alt: "A colorful driveway scene with a big RV and four kids helping parents pack, one holding painting canvases."
    }
  },
  {
    title: "Meeting Pete",
    text: `When we arrived, we saw a beautiful horse. "What is his name?" asked Samuel. "His name is Pete," said the rancher. "Isn't he cute?" "Look at those chickens!" shouted Lev. Just then, a chicken jumped on a log. "Here is a barn rule," said the rancher. "Please keep your voices low. Put your voice on mute so you don't scare the animals."`,
    image: {
      src: "https://image.pollinations.ai/prompt/illustration%20of%20four%20kids%20at%20a%20sunny%20ranch%20fence%20meeting%20a%20brown%20horse%20with%20a%20white%20patch%2C%20cowboy%20rancher%20smiling%20and%20shushing%2C%20chickens%20pecking%20nearby%2C%20friendly%20children%27s%20book%20art%2C%20digital%20painting%2C%20vibrant%20colors&width=900&height=700&format=jpeg",
      alt: "Kids greet a brown horse named Pete at a sunny ranch fence while a rancher smiles and chickens peck nearby."
    }
  },
  {
    title: "The Swimming Pool",
    text: `After visiting Pete, we ran to the pool. "Watch how I do a handstand!" I yelled. I did a gymnastics flip into the water. It was a big milestone for me! Siena and Lev cheered. Once we got out of the pool, we saw a toy that broke. "I can fix it!" said Samuel. "I refuse to let it stay broken." We like Samuel because he is very helpful.`,
    image: {
      src: "https://image.pollinations.ai/prompt/bright%20pool%20scene%20with%20kids%20playing%2C%20one%20child%20doing%20a%20handstand%20in%20shallow%20water%2C%20friends%20cheering%2C%20another%20examining%20a%20broken%20toy%20boat%20on%20the%20deck%2C%20sunny%20summer%20day%2C%20whimsical%20children%27s%20book%20illustration%2C%20digital%20painting&width=900&height=700&format=jpeg",
      alt: "Children at a bright blue pool, one doing a handstand in the water while others cheer and one studies a broken toy boat."
    }
  },
  {
    title: "The Painting Party",
    text: `On the eve of the last day, we decided to paint. We turned on a lantern that looked like a glowing globe. Suddenly, we heard a loud sound. Thump, thump, thump! "Is it a stampede of horses?" asked Siena. No! It was just Dad running to tell us dinner was ready. "I made chicken!" Dad said. "How wonderful!" we all shouted.`,
    image: {
      src: "https://image.pollinations.ai/prompt/nighttime%20campground%20painting%20party%20with%20four%20kids%20around%20a%20wooden%20picnic%20table%20lit%20by%20a%20glowing%20globe%20lantern%2C%20each%20painting%20on%20canvases%2C%20dad%20running%20toward%20them%20in%20a%20funny%20way%2C%20starry%20sky%2C%20cozy%20children%27s%20story%20illustration%2C%20digital%20painting&width=900&height=700&format=jpeg",
      alt: "At night four friends paint at a lantern-lit picnic table while Dad runs toward them, making the kids look up in surprise."
    }
  },
  {
    title: "Time to Go Home",
    text: `The next day, it was time to head home. We packed up the RV and said goodbye to Pete. The sun looked like a glowing globe over the trees as we drove away. Mom took a picture of two of our paintings to remember the trip.`,
    image: {
      src: "https://image.pollinations.ai/prompt/RV%20driving%20away%20from%20a%20campground%20at%20sunset%2C%20kids%20waving%20from%20the%20back%20window%2C%20brown%20horse%20by%20a%20fence%20in%20the%20distance%2C%20mom%20holding%20two%20finished%20paintings%2C%20warm%20glow%2C%20storybook%20style%2C%20digital%20painting%2C%20vivid%20colors&width=900&height=700&format=jpeg",
      alt: "The RV rolls down the road at sunset with kids waving from the back while Pete watches from the fence and Mom holds two paintings."
    }
  },
  {
    title: "Spelling Star!",
    text: `Can you read all the words from our story? High Frequency Words: how | once | because. Regular Words: eve | mute | rule | these | here | globe | broke | those | cute | Pete. Challenge Words: milestone | stampede | refuse. Try the quiz to become today's spelling star!`,
    image: {
      src: "https://image.pollinations.ai/prompt/colorful%20spelling%20star%20award%20page%20with%20ribbons%2C%20sparkles%2C%20and%20lists%20of%20words%2C%20small%20drawing%20of%20four%20friends%20hugging%20at%20the%20bottom%2C%20playful%20children%27s%20poster%20style%2C%20digital%20painting%2C%20high%20detail&width=900&height=700&format=jpeg",
      alt: "A celebratory spelling star page with ribbons, stars, word lists, and a tiny drawing of four friends hugging."
    }
  }
];

const pageNumberEl = document.getElementById("page-number");
const pageTitleEl = document.getElementById("page-title");
const pageTextEl = document.getElementById("page-text");
const pageImageEl = document.getElementById("page-image");
const storyEl = document.querySelector(".story");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const playBtn = document.getElementById("play-btn");
const restartBtn = document.getElementById("restart-btn");
const voiceStatusEl = document.getElementById("voice-status");
const speedSlider = document.getElementById("speed-slider");
const speedLabel = document.getElementById("speed-label");
const spellTestBtn = document.getElementById("spell-test-btn");
const spellTestEl = document.getElementById("spell-test");
const spellListEl = document.getElementById("spell-list");
const spellScoreEl = document.getElementById("spell-score");
const checkSpellBtn = document.getElementById("check-spell-btn");

let currentPage = 0;
let currentUtterance = null;
let currentAudio = null;
const audioCache = new Map();
let wordSpans = [];
let wordBoundaries = [];
let highlightInterval = null;
let lastHighlightedIndex = -1;
let narrationStoppedManually = false;
let spellTestActive = false;
const spellingWords = new Set([
  "how",
  "once",
  "because",
  "eve",
  "mute",
  "rule",
  "these",
  "here",
  "globe",
  "broke",
  "those",
  "cute",
  "pete",
  "milestone",
  "stampede",
  "refuse",
]);
const spellingTestItems = [
  { word: "how", missing: "o", prefix: "h", suffix: "w" },
  { word: "once", missing: "n", prefix: "o", suffix: "ce" },
  { word: "because", missing: "us", prefix: "beca", suffix: "e" },
  { word: "eve", missing: "v", prefix: "e", suffix: "e" },
  { word: "mute", missing: "u", prefix: "m", suffix: "te" },
  { word: "rule", missing: "u", prefix: "r", suffix: "le" },
  { word: "these", missing: "e", prefix: "thes", suffix: "" },
  { word: "here", missing: "r", prefix: "he", suffix: "e" },
  { word: "globe", missing: "b", prefix: "glo", suffix: "e" },
  { word: "broke", missing: "r", prefix: "b", suffix: "oke" },
  { word: "those", missing: "s", prefix: "tho", suffix: "e" },
  { word: "cute", missing: "u", prefix: "c", suffix: "te" },
  { word: "pete", missing: "t", prefix: "pe", suffix: "e" },
  { word: "milestone", missing: "st", prefix: "mile", suffix: "one" },
  { word: "stampede", missing: "mp", prefix: "sta", suffix: "ede" },
  { word: "refuse", missing: "fu", prefix: "re", suffix: "se" },
];

function normalizeWordForSpellCheck(word) {
  return word.toLowerCase().replace(/[^a-z]/g, "");
}

function setPageText(text) {
  const words = text.split(/(\s+)/);
  const container = document.createDocumentFragment();
  const boundaries = [];
  let charCursor = 0;
  wordSpans = [];
  words.forEach((segment) => {
    if (/^\s+$/.test(segment)) {
      container.appendChild(document.createTextNode(segment));
      charCursor += segment.length;
      return;
    }
    const span = document.createElement("span");
    span.className = "page__word";
    span.textContent = segment;
    span.dataset.index = wordSpans.length;
    const normalized = normalizeWordForSpellCheck(segment);
    if (normalized && spellingWords.has(normalized)) {
      span.classList.add("page__word--spelling");
    }
    wordSpans.push(span);
    boundaries.push({
      start: charCursor,
      end: charCursor + segment.length,
      index: wordSpans.length - 1,
    });
    container.appendChild(span);
    charCursor += segment.length;
  });
  pageTextEl.innerHTML = "";
  pageTextEl.appendChild(container);
  wordBoundaries = boundaries;
  lastHighlightedIndex = -1;
}

function clearWordHighlight() {
  if (lastHighlightedIndex >= 0 && wordSpans[lastHighlightedIndex]) {
    wordSpans[lastHighlightedIndex].classList.remove("page__word--active");
  }
  lastHighlightedIndex = -1;
}

function highlightWord(index) {
  if (index === lastHighlightedIndex || !wordSpans[index]) return;
  clearWordHighlight();
  wordSpans[index].classList.add("page__word--active");
  lastHighlightedIndex = index;
}

function stopHighlighting() {
  clearInterval(highlightInterval);
  highlightInterval = null;
  clearWordHighlight();
}

function startTimedHighlight(durationMs) {
  if (!wordSpans.length || !durationMs || durationMs === Infinity) return;
  stopHighlighting();
  const step = Math.max(durationMs / wordSpans.length, 50);
  let index = 0;
  highlightWord(index);
  highlightInterval = setInterval(() => {
    index += 1;
    if (index >= wordSpans.length) {
      stopHighlighting();
      return;
    }
    highlightWord(index);
  }, step);
}

function wordIndexFromChar(charIndex) {
  if (!wordBoundaries.length) return -1;
  return wordBoundaries.find((boundary) => charIndex >= boundary.start && charIndex < boundary.end)?.index ?? -1;
}

function getNarrationRate() {
  const rate = Number(speedSlider?.value || 0.9);
  if (Number.isNaN(rate)) return 0.9;
  return Math.min(Math.max(rate, 0.7), 1.2);
}

function describeNarrationRate(rate) {
  if (rate < 0.85) return "Gentle";
  if (rate > 1.05) return "Snappy";
  return "Just right";
}

function updateSpeedLabel() {
  const rate = getNarrationRate();
  const descriptor = describeNarrationRate(rate);
  if (speedLabel) {
    speedLabel.textContent = `${descriptor} (${rate.toFixed(2)}x)`;
  }
}

function renderPage() {
  const page = pages[currentPage];
  pageNumberEl.textContent = currentPage + 1;
  pageTitleEl.textContent = page.title;
  setPageText(page.text);
  pageImageEl.innerHTML = "";
  const img = document.createElement("img");
  img.src = page.image.src;
  img.alt = page.image.alt;
  img.loading = "lazy";
  img.className = "page__img";
  pageImageEl.appendChild(img);
  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === pages.length - 1;
}

function updateVoiceStatus(message, tone = "muted") {
  if (!voiceStatusEl) return;
  voiceStatusEl.textContent = message;
  voiceStatusEl.dataset.tone = tone;
}

function stopAllAudio(markManual = true) {
  if (spellTestActive) narrationStoppedManually = true;
  if (markManual) narrationStoppedManually = true;
  stopHighlighting();
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = "";
    currentAudio = null;
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function handleNarrationEnd() {
  stopHighlighting();
  if (narrationStoppedManually) return;
  if (currentPage < pages.length - 1) {
    nextPage();
  }
}

async function synthesizeWithGcp(text) {
  const response = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, speakingRate: getNarrationRate() }),
  });

  if (!response.ok) {
    const { error } = await response.json().catch(() => ({ error: "Unknown error" }));
    throw new Error(error || "Unable to request narration.");
  }

  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

function speakWithBrowser(text) {
  if (!("speechSynthesis" in window)) {
    updateVoiceStatus("Speech not supported in this browser.", "warning");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = getNarrationRate();
  utterance.pitch = 1;
  currentUtterance = utterance;
  utterance.onstart = () => highlightWord(0);
  utterance.onboundary = (event) => {
    if (typeof event.charIndex !== "number") return;
    const index = wordIndexFromChar(event.charIndex);
    if (index >= 0) highlightWord(index);
  };
  utterance.onend = handleNarrationEnd;
  narrationStoppedManually = false;
  window.speechSynthesis.speak(utterance);
  updateVoiceStatus("Playing with your device voice.", "muted");
}

function playAudio(url) {
  stopAllAudio(false);
  currentAudio = new Audio(url);
  currentAudio.addEventListener("loadedmetadata", () => {
    if (isFinite(currentAudio.duration) && currentAudio.duration > 0) {
      startTimedHighlight(currentAudio.duration * 1000);
    }
  });
  currentAudio.addEventListener("playing", () => {
    if (!highlightInterval && (!currentAudio.duration || !isFinite(currentAudio.duration))) {
      const estimatedDuration = Math.max(wordSpans.length * 450, 3000);
      startTimedHighlight(estimatedDuration);
    }
  });
  currentAudio.addEventListener("ended", handleNarrationEnd);
  narrationStoppedManually = false;
  currentAudio.play().catch(() => {
    updateVoiceStatus("Could not start audio playback.", "warning");
  });
  updateVoiceStatus("Playing with Google Cloud narration.", "success");
}

async function speak(text) {
  stopAllAudio(false);
  const cacheKey = `${currentPage}:${text}:${getNarrationRate()}`;

  if (audioCache.has(cacheKey)) {
    playAudio(audioCache.get(cacheKey));
    return;
  }

  try {
    const url = await synthesizeWithGcp(text);
    audioCache.set(cacheKey, url);
    playAudio(url);
    return;
  } catch (error) {
    updateVoiceStatus(error.message, "warning");
  }

  speakWithBrowser(text);
}

function goToPage(index) {
  if (spellTestActive) return;
  if (index < 0 || index >= pages.length) return;
  stopAllAudio();
  currentPage = index;
  renderPage();
}

function nextPage() {
  goToPage(Math.min(currentPage + 1, pages.length - 1));
}

function prevPage() {
  goToPage(Math.max(currentPage - 1, 0));
}

function restartBook() {
  if (spellTestActive) {
    exitSpellTest();
  }
  goToPage(0);
  speak(pages[currentPage].text);
}

prevBtn.addEventListener("click", prevPage);
nextBtn.addEventListener("click", nextPage);
playBtn.addEventListener("click", () => {
  if (spellTestActive) return;
  speak(pages[currentPage].text);
});
restartBtn.addEventListener("click", restartBook);
speedSlider?.addEventListener("input", () => {
  updateSpeedLabel();
  stopAllAudio();
});

updateVoiceStatus(
  "Google Cloud narration preferred when server is running; will fall back to your device voice if unavailable.",
  "muted"
);

function resetSpellTest() {
  if (!spellListEl) return;
  spellListEl.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  spellListEl.querySelectorAll(".spell-item").forEach((item) => {
    item.dataset.state = "";
    const feedback = item.querySelector(".spell-item__feedback");
    if (feedback) feedback.textContent = " ";
  });
  if (spellScoreEl) spellScoreEl.textContent = "";
}

function renderSpellTestList() {
  if (!spellListEl) return;
  const fragment = document.createDocumentFragment();
  spellingTestItems.forEach(({ word, missing, prefix, suffix }) => {
    const item = document.createElement("div");
    item.className = "spell-item";
    item.dataset.word = word;

    const prompt = document.createElement("div");
    prompt.className = "spell-item__prompt";
    const mask = `${prefix}${"_".repeat(missing.length)}${suffix}`;
    prompt.innerHTML = `Complete: <code>${mask}</code>`;
    item.appendChild(prompt);

    const inputRow = document.createElement("div");
    inputRow.className = "spell-item__input";

    const before = document.createElement("span");
    before.textContent = prefix;
    const input = document.createElement("input");
    input.maxLength = missing.length;
    input.dataset.answer = missing.toLowerCase();
    input.dataset.word = word;
    input.placeholder = "_".repeat(missing.length);
    input.setAttribute("aria-label", `Fill the missing letters for ${word}`);
    input.addEventListener("input", () => {
      input.value = input.value.toLowerCase().replace(/[^a-z]/g, "");
    });
    const after = document.createElement("span");
    after.textContent = suffix || " ";

    inputRow.appendChild(before);
    inputRow.appendChild(input);
    inputRow.appendChild(after);
    item.appendChild(inputRow);

    const feedback = document.createElement("div");
    feedback.className = "spell-item__feedback";
    feedback.textContent = " ";
    item.appendChild(feedback);

    fragment.appendChild(item);
  });

  spellListEl.innerHTML = "";
  spellListEl.appendChild(fragment);
}

function checkSpellTestAnswers() {
  if (!spellListEl) return;
  const items = spellListEl.querySelectorAll(".spell-item");
  let correct = 0;
  items.forEach((item) => {
    const input = item.querySelector("input");
    const feedback = item.querySelector(".spell-item__feedback");
    const expected = (input?.dataset.answer || "").trim().toLowerCase();
    const value = (input?.value || "").trim().toLowerCase();
    const isCorrect = value === expected;
    item.dataset.state = isCorrect ? "correct" : "incorrect";
    if (feedback) feedback.textContent = isCorrect ? "Nice work!" : `Need: ${expected}`;
    if (isCorrect) correct += 1;
  });
  if (spellScoreEl) {
    spellScoreEl.textContent = `${correct}/${items.length} correct`;
  }
}

function enterSpellTest() {
  if (!storyEl || !spellTestEl) return;
  spellTestActive = true;
  storyEl.classList.add("spell-test-active");
  spellTestEl.hidden = false;
  resetSpellTest();
  stopAllAudio();
  if (spellTestBtn) spellTestBtn.textContent = "← Back to story";
}

function exitSpellTest() {
  if (!storyEl || !spellTestEl) return;
  spellTestActive = false;
  storyEl.classList.remove("spell-test-active");
  spellTestEl.hidden = true;
  resetSpellTest();
  if (spellTestBtn) spellTestBtn.textContent = "✎ Spell test";
}

spellTestBtn?.addEventListener("click", () => {
  if (spellTestActive) {
    exitSpellTest();
    return;
  }
  enterSpellTest();
});

checkSpellBtn?.addEventListener("click", checkSpellTestAnswers);

function initializeStorybook() {
  try {
    renderPage();
    updateSpeedLabel();
    renderSpellTestList();
  } catch (error) {
    console.error(error);
    updateVoiceStatus("Could not load the story content. Please refresh to try again.", "warning");
    if (pageTextEl) {
      pageTextEl.textContent = "We couldn't load the story text right now.";
    }
    if (pageImageEl) {
      pageImageEl.innerHTML = "";
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeStorybook);
} else {
  initializeStorybook();
}
