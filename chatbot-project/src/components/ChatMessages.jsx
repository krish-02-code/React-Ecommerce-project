import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'
// import { Chatbot } from 'supersimpledev';
import {Chatbot} from 'supersimpledev';

export function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye.Have a great day!',
      'Give me a unique id': function () {
        return `Sure here's your unique id : ${crypto.randomUUID()}`
      }
    })
  }, [])


  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);


  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {
        chatMessages.map((chatMessages) => {
          return (
            <ChatMessage
              message={chatMessages.message}
              sender={chatMessages.sender}
              key={chatMessages.id}
              time={chatMessages.time}
              />
          )
        })
      }
    </div>
  )
}