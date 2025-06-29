// src/components/ChatApp.jsx

import React, { useState } from "react";
import ChatInput from "./ChatInput";

function ChatApp() {
  const [chatLog, setChatLog] = useState([]);

  const handleSend = (message) => {
    setChatLog([...chatLog, { sender: "user", message }]);
    // Call chatbot API here...
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Township Business Chatbot</h1>
      <div className="chat-log">
        {chatLog.map((entry, idx) => (
          <div key={idx}>
            <strong>{entry.sender}:</strong> {entry.message}
          </div>
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default ChatApp;
