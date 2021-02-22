import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import { setPlaylist } from '../redux-actions';
import './banner.sass';

const Banner = ({spotify, id, playlist, setPlaylist}) => {

        useEffect(() => {
            spotify.getPlaylist(id).then(playlist => setPlaylist(playlist))
        },[id]);

        return (
            <div className="banner">
                <img className="banner-img" src={playlist?.images[0]?.url} alt="banner"/>
                <div className="banner-descr">
                    <div className="banner-subheader">playlists</div>
                    <h2 className="banner-header">{playlist?.name.length > 25 ? playlist?.name.substring(0,25).concat('...') : playlist?.name}</h2>
                    <p>{}&nbsp;{playlist?.tracks.total} tracks, approximately {Math.ceil((playlist?.tracks.total * 3) / 60)} hour</p>
                </div>
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        playlist: state.playlist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPlaylist: (playlist) => {dispatch(setPlaylist(playlist))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Banner);