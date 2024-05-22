import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import '@/custom.css'; // Ensure to import your custom CSS

const Chat = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      navigate('/'); // Redirect to the home page or login page after logout
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <button className="button block" onClick={() => navigate('/account')}>
          Account
        </button>
        <button className="button block" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="chat-content">
        <iframe 
          src="https://mood-flowise.moodmnky.com/chatbot/fe622267-c9d4-4c6e-af41-9cc49ebb0941" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }} 
          title="MOOD MNKY">
        </iframe>
      </div>
    </div>
  );
};

export default Chat;
