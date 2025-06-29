import React, { useState } from "react";
import { startListening } from "../utils/voiceRecognition";

function ChatInput() {
  const [userMessage, setUserMessage] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={userMessage} 
        onChange={e => setUserMessage(e.target.value)} 
      />
      <button onClick={() => startListening(setUserMessage)}>
        🎤 Speak
      </button>
    </div>
  );
}

export default ChatInput;
