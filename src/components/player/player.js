import React from 'react';
import Sidebar from '../sidebar';
import Body from '../body';
import Footer from '../footer';
import './player.sass';

const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player-body">
                <Sidebar />
                <Body spotify={spotify}/>
            </div>
            <Footer />
        </div>
    );
}

export default Player;

