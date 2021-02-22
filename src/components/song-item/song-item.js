import React from 'react';
import './song-item.sass';

const SongItem = ({tracks}) => {
    return (
        <div className="songitem">
            {
                tracks?.map(({trackName, artist, albumName, albumImg , duration_ms}, i) => {
                    return (
                    <ul key={ ++i }>
                            <li className="songitem-count">{ ++i }</li>
                            <li className="songitem-img-title">
                                <img src={ albumImg } alt="album"/>
                                <div className="songitem-title">
                                    <div className="songitem-header">{ trackName }</div>
                                    <a href="#/" className="songitem-subheader">{ artist }</a>
                                </div>
                            </li>
                            <li>{ albumName }</li>
                            <li className="songitem-time">
                                <i className="far fa-heart"></i> 
                                { timeOfMusic(duration_ms) }
                                <i className="fas fa-trash-alt"></i>
                            </li>
                    </ul>
                    );
                })
            }
        </div>
    );
}

const timeOfMusic = ( millis ) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export default SongItem;
