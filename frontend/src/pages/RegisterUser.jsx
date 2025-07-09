import { useEffect } from 'react';

export default function RegisterUser() {
  useEffect(() => {
    const input = document.getElementById('user-location');
    if ('geolocation' in navigator && input) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          input.value = `Lat: ${pos.coords.latitude}, Lng: ${pos.coords.longitude}`;
        },
        (err) => {
          input.placeholder = 'Location not available';
        }
      );
    }
  }, []);

  return (
    <form id="user-form">{/* your form here */}</form>
  );
}
