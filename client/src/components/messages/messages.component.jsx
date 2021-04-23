import React from 'react';

import './messages.style.css';

import Message from '../message/message.component';

const Messages = ({ messages, name }) => {
    return (
        <div className="messages">
            {messages.map((message, id) => 
                <Message key={id} message={message} name={name} />    
            )}
        </div>
    );
}


export default Messages;