// /src/utils/voiceRecognition.js

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-ZA";

export function startListening(setMessage) {
  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    setMessage(transcript);
  };

  recognition.onerror = function(err) {
    console.error("Speech recognition error", err);
  };
}
