navigator.geolocation.getCurrentPosition(function(position) {
  document.getElementById('lat').value = position.coords.latitude;
  document.getElementById('lng').value = position.coords.longitude;
});
