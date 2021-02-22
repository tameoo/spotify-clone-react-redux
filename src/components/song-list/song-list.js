import React from 'react';
import SongItem from '../song-item';
import { connect }  from 'react-redux';
import './song-list.sass';

const SongList = ({tracks}) => {
    return (
        <div className="songlist">
            <div className="songlist-play">
                <i className="fas fa-play-circle"></i>
            </div>
            <div className="songlist-items">
                <div className="songlist-items-header">
                    <ul>
                        <li>#</li>
                        <li>Title</li>
                        <li>Album</li>
                        <li className="clock"><i className="fal fa-clock"></i></li>
                    </ul>
                </div>
                <SongItem tracks={tracks}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tracks: state.tracks
    }
}

export default connect(mapStateToProps)(SongList);



