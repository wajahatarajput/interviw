import React, { useState } from 'react';
import './App.css';
import initialChatData from './chat.json';

function App() {
  const [chatData, setChatData] = useState(initialChatData);
  const [newMessage, setNewMessage] = useState("");

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return; // Prevent empty messages

    // Create a new message object


    // Update chatData with the new message


    setNewMessage(""); // Clear the input field after sending
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat Conversation</h1>

        {/* Display chat messages */}
        <div className="chat-container">
          {chatData.messages.map((message) => {
            const sender = chatData.participants.find(
              (user) => user.user_id === message.sender_id
            );
            const isSender = message.sender_id === "user_1"; // Check if the sender is "user_1"

            return (
              <div key={message.message_id} className={`message ${isSender ? "message-right" : "message-left"}`}>
                <p className='message-head'>
                  <strong>{

                    // sender username

                  }</strong>
                </p>
                <p className='message-content'>{

                  //  message content

                }</p>
              </div>
            );
          })}
        </div>

        {/* Input and Send Button */}
        <div className="input-container">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </header>
    </div>
  );
}

export default App;
