// netlify/functions/registerBusiness.js
const { MongoClient } = require("mongodb");

exports.handler = async function (event, context) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  const { businessName, category, address } = data;

  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("db");
    const collection = db.collection("businesses");

    await collection.insertOne({ businessName, category, address });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Business registered." })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  } finally {
    await client.close();
  }
};
