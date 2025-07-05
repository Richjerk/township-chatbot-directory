fetch('/.netlify/functions/nearby-businesses')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("nearby-list");
    container.innerHTML = data.map(b => `<p><strong>${b.businessName}</strong> - ${b.category}</p>`).join('');
  })
  .catch(err => {
    console.error('Error fetching nearby businesses:', err);
  });
