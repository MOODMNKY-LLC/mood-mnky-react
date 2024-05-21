// src/Chat.jsx
import React, { useEffect, useRef } from 'react';
import { FullPageChat } from "flowise-embed-react";
import { supabase } from './supabaseClient'; // Ensure this import points to your Supabase client
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Chat = () => {
    const chatContentRef = useRef(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Scroll to the bottom whenever new messages are added
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    });

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error logging out:', error);
        } else {
            navigate('/'); // Navigate to the home page or login page after logout
        }
    };

    const handleReturnToAccount = () => {
        navigate('/account'); // Navigate to the account page
    };

    return (
        <div style={{ 
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            height: '700px', // Fixed height
            width: '400px', // Fixed width
            backgroundColor: '#101010', 
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.5)',
            overflow: 'hidden', // Ensure no overflow on the container
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <button 
                    onClick={handleReturnToAccount} 
                    style={{
                        backgroundColor: '#333', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '5px', 
                        padding: '10px', 
                        cursor: 'pointer'
                    }}
                >
                    Account
                </button>
                <button 
                    onClick={handleLogout} 
                    style={{
                        backgroundColor: '#333', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '5px', 
                        padding: '10px', 
                        cursor: 'pointer'
                    }}
                >
                    Logout
                </button>
            </div>
            <FullPageChat
                chatflowid="fe622267-c9d4-4c6e-af41-9cc49ebb0941"
                apiHost="https://mood-flowise.moodmnky.com"
                theme={{
                    chatWindow: {
                        welcomeMessage: "Hello! This is custom welcome message",
                        backgroundColor: "#101010", // Dark background
                        height: '100%', // Full height of the container
                        width: '100%', // Full width of the container
                        fontSize: 16,
                        poweredByTextColor: "#ffffff", // White text
                        botMessage: {
                            backgroundColor: "#2a2a2a", // Slightly lighter dark background
                            textColor: "#ffffff", // White text
                            showAvatar: true,
                            avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                        },
                        userMessage: {
                            backgroundColor: "#ffffff", // White background
                            textColor: "#303235", // Dark gray text
                            showAvatar: true,
                            avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                        },
                        textInput: {
                            placeholder: "Type your question",
                            backgroundColor: "#222222", // Dark input background
                            textColor: "#ffffff", // White text
                            placeholderTextColor: "#666666", // Gray
                            sendButtonColor: "#ffffff", // White
                        }
                    }
                }}
                contentRef={chatContentRef} // Add ref for the chat content
            />
        </div>
    );
};

export default Chat;
