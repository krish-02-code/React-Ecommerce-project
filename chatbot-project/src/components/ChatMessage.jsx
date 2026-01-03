import dayjs from 'dayjs';
import RobotProfileImg from '../assets/robot.png';
import UserProfileImg from '../assets/me.jpg';
import './ChatMessage.css';

export function ChatMessage({ message, sender, time }) {
            return (
                <div className={sender === 'robot' ? 'chat-message-robot' : 'chat-message-user'}>
                    {sender === 'robot' && <img src={RobotProfileImg} alt=""  className="chat-message-profile" />}
                     <div className="chat-message-text">{message}
                       {time && <div className='chat-mesaage-time'>{dayjs(time).format('h:mma')}</div>}
                     </div>
                    {sender === 'user' && <img src={UserProfileImg} alt="" className="chat-message-profile" />}
                </div>
     )
}

