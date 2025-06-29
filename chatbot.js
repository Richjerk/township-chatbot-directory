const sendWhatsApp = require('./utils/sendWhatsApp');
const userRegion = req.body.region;
const regionPrompt = mcpContext.regions[userRegion] || "";
const systemPrompt = `${baseIntentPrompt} ${regionPrompt}`;
const mcpContext = require('../.mcp.json');
const systemPrompt = mcpContext.intents[intent] || "You're a helpful township assistant.";
const express = require('express');
const router = express.Router();
const axios = require('axios'); // or use fetch
const contextMap = {
  "order": "Help user place or track an order.",
  "register": "Help business register on the platform.",
  "search": "Help user find nearby businesses."
};

router.post('/chat', async (req, res) => {
  const { message, intent } = req.body; // intent detected client-side or by pre-processing

  const systemPrompt = contextMap[intent] || "You are a helpful assistant for township businesses.";

  const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    model: "gpt-4",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: message }
    ]
  }, {
    headers: { Authorization: `Bearer ${process.env.API_KEY}` }
  });

  res.json({ reply: response.data.choices[0].message.content });
});

router.post('/chat', async (req, res) => {
  const userMessage = req.body.message;
  
  // Sample MCP: You can read from a context JSON here
  const mcpContext = require('../.mcp.json');

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4',
      messages: [
        { role: 'system', content: `You are a township business assistant helping users with ${mcpContext.project}` },
        { role: 'user', content: userMessage }
      ]
    }, {
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`
      }
    });

    res.json({ reply: response.data.choices[0].message.content });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Chatbot error' });
  }
});

module.exports = router;

