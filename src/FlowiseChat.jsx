// src/FlowiseChat.jsx
import React, { useEffect } from 'react';

const FlowiseChat = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
        script.type = "module";
        script.async = true;

        script.onload = () => {
            if (window.Chatbot) {
                window.Chatbot.initFull({
                    chatflowid: "fe622267-c9d4-4c6e-af41-9cc49ebb0941",
                    apiHost: "https://mood-flowise.moodmnky.com",
                    theme: {
                        chatWindow: {
                            welcomeMessage: "Hello! This is custom welcome message",
                            backgroundColor: "#101010", // Dark background
                            height: 700,
                            width: 400,
                            fontSize: 16,
                            poweredByTextColor: "#ffffff", // White text
                            botMessage: {
                                backgroundColor: "#2a2a2a", // Slightly lighter dark background
                                textColor: "#ffffff", // White text
                                showAvatar: true,
                                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                            },
                            userMessage: {
                                backgroundColor: "#f0f0f0", // Light gray background
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
                    }
                });
            }
        };

        document.body.appendChild(script);
    }, []);

    return <flowise-fullchatbot></flowise-fullchatbot>;
};

export default FlowiseChat;
