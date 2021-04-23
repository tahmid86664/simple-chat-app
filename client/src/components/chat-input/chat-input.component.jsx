import React from 'react';

import './chat-input.style.css';

const ChatInput = ({ message, setMessage, sendMessage }) => {


    return (
        <div className="chatInput">
            <form>
                <input 
                    type="text"
                    placeholder="Type a message..."
                    value={message} 
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
                />
                <button className="chatInput__button" type="submit" onClick={(event) => sendMessage(event)}>
                    Send
                </button>
            </form>
        </div>
    );
}


export default ChatInput;