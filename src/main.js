// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { registerSW } from 'virtual:pwa-register';

// Register PWA Service Worker
registerSW({
  onNeedRefresh() {
    console.log('🟠 New content available, please refresh.');
  },
  onOfflineReady() {
    console.log('✅ App ready to work offline.');
  },
});

// Render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);

// ===== 📍 GPS Geo-Tracking =====
window.getGeoLocation = function () {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const output = document.getElementById("location-output");
        if (output) {
          output.innerText = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
        }
      },
      (err) => {
        alert("Location error: " + err.message);
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
};

// ===== 🤖 Basic Chatbot Simulation =====
window.askChatbot = function () {
  const userMessage = document.getElementById("user-input")?.value;
  const botReply = document.getElementById("bot-response");

  if (!userMessage?.trim()) {
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

