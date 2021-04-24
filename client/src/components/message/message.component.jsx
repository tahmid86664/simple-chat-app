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
            <div className="message message__sender">
                <p className="message__senderName">{trimmedName}</p>
                <div className="message__textBox message__marginLeft">
                    <p className="message__text">{text}</p>
                </div>
            </div>
        ) : (
            <div className="message">
                <div className="message__textBox message__marginRight">
                    <p className="message__text">{text}</p>
                </div>
                <p className="message__senderName">{user}</p>
            </div>
        )
    );
}


export default Message;