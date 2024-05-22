import React from 'react';
import '@/custom.css'; // Ensure to import your custom CSS

const Chat = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        {/* <h1>Chat with Flowise Bot</h1> */}
      </div>
      <div className="chat-content">
        <iframe 
          src="https://mood-flowise.moodmnky.com/chatbot/fe622267-c9d4-4c6e-af41-9cc49ebb0941" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }} 
          title="Flowise Chatbot">
        </iframe>
      </div>
    </div>
  );
};

export default Chat;
