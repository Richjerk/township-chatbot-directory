// 📂 display-categories.js

export async function displayBusinessesCategorically(containerId = 'business-container') {
  try {
    const res = await fetch('/.netlify/functions/list-businesses');
    const data = await res.json();

    const container = document.getElementById(containerId);
    if (!container) return;

    const categories = [...new Set(data.map(b => b.category))];

    container.innerHTML = categories.map(cat => {
      const businesses = data.filter(b => b.category === cat);
      return `
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-indigo-600">${cat}</h3>
          <ul class="list-disc list-inside ml-4 text-gray-700">
            ${businesses.map(b => `
              <li>
                <strong>${b.businessName}</strong> — ${b.address || 'No address provided'}
              </li>`).join('')}
          </ul>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error("⚠️ Failed to load business list:", error);
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = '<p class="text-red-500">Error loading businesses.</p>';
    }
  }
}
