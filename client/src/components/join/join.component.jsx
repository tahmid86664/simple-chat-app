import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './join.style.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <div className="join">
            <div className="join__inner">
                <h1 className="join__heading">Join</h1>
                <div className="join__input__container">
                    <input 
                        placeholder="Name" 
                        className="join__input" 
                        type="text"
                        onChange={(event) => setName(event.target.value)} 
                    />
                </div>
                <div className="join__input__container">
                    <input 
                        placeholder="Room Name" 
                        className="join__input" 
                        type="text"
                        onChange={(event) => setRoom(event.target.value)} 
                    />
                </div>
                <Link 
                    onClick={(event) => (!name || !room) ? event.preventDefault() : null}
                    to={`/chat?name=${name}&room=${room}`}
                > 
                {/* we need to give here a condtion that if no name or no room then just prevent to go to chat url. so that our app will not break */}
                    <button className="join__button" type="submit" >Join Room</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;