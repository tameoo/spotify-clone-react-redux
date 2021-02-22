import React, { useEffect, } from 'react';
import Player from '../player';
import Login from '../login';
import { getTokenFromUrl } from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { connect } from 'react-redux';
import { setUser , setToken, setPlaylists} from '../redux-actions';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.sass';

const spotify = new SpotifyWebApi();

const App = ({token,setToken, setUser, setPlaylists}) => {
    
    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token;

        if(_token){
            setToken(_token);
            spotify.setAccessToken(_token);
            spotify.getMe().then(user => setUser(user));
            spotify.getUserPlaylists().then(playlists => setPlaylists(playlists));
        }

    }, [token]);

    return (
        <Router>
            <div className="app">
                { token ? <Player spotify={spotify}/> : <Login/>  }
            </div>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user)),
        setToken: (token) => dispatch(setToken(token)),
        setPlaylists: (playlists) => dispatch(setPlaylists(playlists))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);