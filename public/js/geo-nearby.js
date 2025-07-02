.then(data => {
  const container = document.getElementById("nearby-list");
  container.innerHTML = data.map(b => `<p><strong>${b.businessName}</strong> - ${b.category}</p>`).join('');
});
