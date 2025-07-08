import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { displayBusinessesCategorically } from './js/display-categories.js';

window.addEventListener("DOMContentLoaded", () => {
  displayBusinessesCategorically(); // default to #business-container
});

// ✅ Render App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);

// ===== 📍 GPS Geo-Tracking (for button-triggered or global use) =====
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

// ===== 🤖 Chatbot Fetcher =====
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

// ===== 🗺️ Auto-fill Geolocation for Input Fields =====
function autoFillLocations() {
  const fill = (inputId) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const input = document.getElementById(inputId);
          if (input) {
            input.value = `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
          }
        },
        (err) => {
          alert("Location error: " + err.message);
        }
      );
    }
  };

  fill("user-location");
  fill("business-location");
}
window.addEventListener("DOMContentLoaded", autoFillLocations);

// ===== 📂 Fetch Categories Dynamically =====
function loadCategories() {
  fetch('/.netlify/functions/list-businesses')
    .then(res => res.json())
    .then(data => {
      const categories = [...new Set(data.map(b => b.category))];
      const dropdown = document.getElementById("category-dropdown");
      if (dropdown) {
        categories.forEach(cat => {
          const opt = document.createElement("option");
          opt.value = cat;
          opt.textContent = cat;
          dropdown.appendChild(opt);
        });
      }
    })
    .catch(err => console.error("Failed to load categories", err));
}
window.addEventListener("DOMContentLoaded", loadCategories);

// ===== 👤 Handle Customer Form Submission =====
window.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("user-form");
  if (userForm) {
    userForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = document.getElementById("user-msg");
      if (msg) {
        msg.classList.remove("hidden");
        setTimeout(() => msg.classList.add("hidden"), 3000);
      }
    });
  }

  // ===== 🏢 Handle Business Form Submission =====
  const bizForm = document.getElementById("business-form");
  if (bizForm) {
    bizForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = {
        businessName: bizForm.businessName.value,
        category: bizForm.category.value,
        address: bizForm.address.value,
      };

      const res = await fetch("/.netlify/functions/register-business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        const msg = document.getElementById("biz-msg");
        if (msg) msg.classList.remove("hidden");
        bizForm.reset();
        setTimeout(() => msg.classList.add("hidden"), 3000);
      } else {
        alert("❌ Error: " + (result.error || "Unknown error"));
      }
    });
  }
});
