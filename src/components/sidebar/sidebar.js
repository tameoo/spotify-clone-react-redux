import React from 'react';
import SidebarOption from '../sidebar-option';
import { Link } from 'react-router-dom';
import './sidebar.sass';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                    <i className="fab fa-spotify logo-img"></i>
                    <h1 className="sidebar-logo">Spotify</h1>
                    <sup><i className="register far fa-registered"></i></sup>
            </div>
            <div className="nav">
                <div className="nav-item"><i className="fas fa-home icon"></i><Link className="link"  to="/">Home</Link></div>
                <div className="nav-item"><i className="fas fa-search icon"></i><Link className="link" to="/search">Search</Link></div>
                <div className="nav-item"><i className="far fa-books icon"></i><Link className="link" to="/collection">Your Library</Link></div>
            </div>
            <div className="playlist-header">playlists</div>
            <hr />

           <SidebarOption/>
        </div>
    );
}



export default Sidebar;