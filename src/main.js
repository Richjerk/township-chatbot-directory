// /src/main.js
import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() {
    console.log('🟠 New content available, please refresh.');
  },
  onOfflineReady() {
    console.log('✅ App ready to work offline.');
  },
});

// ===== 📍 GPS Geo-Tracking =====
window.getGeoLocation = function () {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const output = document.getElementById("location-output");
        output.innerText = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
      },
      (err) => {
        alert("Location error: " + err.message);
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
};

// ===== 🤖 Basic Chatbot Simulation (Placeholder for real API) =====
window.askChatbot = function () {
  const userMessage = document.getElementById("user-input").value;
  const botReply = document.getElementById("bot-response");

  if (!userMessage.trim()) {
    botReply.textContent = "Please enter a message.";
    return;
  }

  fetch('http://localhost:3001/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: userMessage }),
  })
    .then((res) => res.json())
    .then((data) => {
      botReply.textContent = data.response;
    })
    .catch((err) => {
      botReply.textContent = '❌ Chatbot error: ' + err.message;
    });
};
