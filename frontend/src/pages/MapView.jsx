import { useEffect } from 'react';

export default function MapView() {
  useEffect(() => {
    if (!window.google) return;

    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -26.3, lng: 27.9 },
      zoom: 12,
    });

    fetch('/.netlify/functions/list-businesses')
      .then(res => res.json())
      .then(data => {
        data.forEach(b => {
          if (b.lat && b.lng) {
            new window.google.maps.Marker({
              position: { lat: b.lat, lng: b.lng },
              map,
              title: b.businessName,
            });
          }
        });
      });
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">📍 Map of Businesses</h2>
      <div id="map" className="h-96 w-full rounded shadow" />
    </div>
  );
}
