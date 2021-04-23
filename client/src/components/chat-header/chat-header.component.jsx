import React from 'react';
import { Link } from 'react-router-dom';

import './chat-header.style.css';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';

const ChatHeader = ({ room }) => {

    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <div className="onlineIcon"></div>
                <div className="chatHeader__roomName">{ room }</div>
            </div>
            <div className="chatHeader__right">
                <Link to="/" onClick={() => window.location.href='/'}>
                <IconButton>
                    <ExitToAppIcon />
                </IconButton>
                </Link>
            </div>
        </div>
    );
}


export default ChatHeader;