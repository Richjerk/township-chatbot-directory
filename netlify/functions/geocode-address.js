const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { address } = JSON.parse(event.body || '{}');

  if (!address) {
    return { statusCode: 400, body: JSON.stringify({ error: "Address is required." }) };
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK" || !data.results.length) {
      return { statusCode: 404, body: JSON.stringify({ error: "Location not found." }) };
    }

    const { lat, lng } = data.results[0].geometry.location;

    return {
      statusCode: 200,
      body: JSON.stringify({ lat, lng })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch geocode." })
    };
  }
};
