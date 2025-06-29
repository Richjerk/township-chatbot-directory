// CommonJS version of ollama-server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;

  const ollama = spawn('ollama', ['run', 'llama3']);

  let aiResponse = '';

  ollama.stdin.write(userMessage + '\n');
  ollama.stdin.end();

  ollama.stdout.on('data', (data) => {
    aiResponse += data.toString();
  });

  ollama.on('close', () => {
    res.json({ response: aiResponse.trim() });
  });
});

app.listen(3001, () => {
  console.log('🤖 Ollama API listening on http://localhost:3001');
});
