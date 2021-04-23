import React from 'react';

import './message.style.css';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser ? (
            <div className="message">
                <p className="message__senderName">{trimmedName}</p>
                <div className="message__textBox">
                    <p className="message__text">{text}</p>
                </div>
            </div>
        ) : (
            <div className="message">
                <div className="message__textBox">
                    <p className="message__text">{text}</p>
                </div>
                <p className="message__senderName">{user}</p>
            </div>
        )
    );
}


export default Message;