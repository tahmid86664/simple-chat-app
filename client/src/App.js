import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Join from './components/join/join.component';
import Chat from './components/chat/chat.component';

const App = () => {
    return(
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </Router>
    )
}

export default App;