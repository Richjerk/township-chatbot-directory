const { MongoClient } = require("mongodb");
const fetch = require("node-fetch");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = "township";

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body || '{}');

  // Distinguish between user and business
  if (data.type === "user") {
    const { username, phone, email, location } = data;

    if (!username || !phone || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing user fields." }),
      };
    }

    const newUser = {
      username,
      phone,
      email,
      location: location || null,
      createdAt: new Date(),
    };

    try {
      await client.connect();
      const db = client.db(dbName);
      const users = db.collection("users");
      const result = await users.insertOne(newUser);

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "User registered successfully",
          id: result.insertedId,
          ...newUser,
        }),
      };
    } catch (err) {
      console.error("User DB Error:", err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "User registration failed." }),
      };
    } finally {
      await client.close();
    }
  }

  // Otherwise treat it as business
  const { businessName, category, address } = data;

  if (!businessName || !category || !address) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing business fields." }),
    };
  }

  // Geocode address
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
    createdAt: new Date(),
  };

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("businesses");
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
    console.error("Business DB Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Business registration failed." }),
    };
  } finally {
    await client.close();
  }
};

