import { useEffect, useState } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(()=>{
    localStorage.setItem('messages',JSON.stringify())
  },[chatMessages])


  return (
    <div className="app-container">
      {chatMessages.length == 0 && <p className="Starting-Header-message">Welcome to the ChatBot project! Send a message using the text box below </p>}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App
