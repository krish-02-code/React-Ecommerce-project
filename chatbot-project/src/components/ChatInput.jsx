import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    //  console.log(inputText);
    if (inputText === '' || isLoading) {
      return;
    }

    setIsLoading(true);
    setInputText('');

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time : dayjs().valueOf()
      }
    ];

    // setChatMessages(newChatMessages);

    setChatMessages([
      ...newChatMessages,
      {
        message: "Loading...",
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time : dayjs().valueOf()
      }
    ]);
    // setInputText('');
    setIsLoading(false);
  }

  function send(event) {
    if (event.key === 'Escape') {
      setInputText('');
    }
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Send a message to ChatBot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={send}
        className="chat-input"
      >
      </input>

      <button
        className="send-button"
        onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

