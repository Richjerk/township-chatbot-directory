import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { from: 'You', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const res = await fetch('/.netlify/functions/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();

    setMessages((prev) => [...prev, { from: 'Bot', text: data.reply }]);
    setInput('');
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4">💬 Township Chatbot</h2>
      <div className="h-48 overflow-y-auto mb-4 border rounded p-2 bg-gray-100 text-sm">
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.from}:</strong> {msg.text}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="flex-grow p-2 border rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 rounded hover:bg-green-700">Send</button>
      </form>
    </div>
  );
}
