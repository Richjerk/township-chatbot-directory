const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = "township";
const collectionName = "businesses";

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { businessName, category, address } = JSON.parse(event.body || '{}');

  if (!businessName || !category || !address) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields." }),
    };
  }

  // Geocode the address
  const geoRes = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
  const geoData = await geoRes.json();

  if (geoData.status !== "OK") {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Failed to geocode address." }),
    };
  }

  const location = geoData.results[0].geometry.location;
  const newBusiness = {
    businessName,
    category,
    address,
    lat: location.lat,
    lng: location.lng,
    createdAt: new Date()
  };

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(newBusiness);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Business registered successfully",
        id: result.insertedId,
        ...newBusiness,
      }),
    };
  } catch (err) {
    console.error("DB Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Database error." }),
    };
  } finally {
    await client.close();
  }
};
