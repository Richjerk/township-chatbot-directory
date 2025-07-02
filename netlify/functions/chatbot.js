const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body || '{}');

  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        prompt: message,
        stream: false
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: data.response.trim() })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to connect to Ollama." })
    };
  }
};
