import React, { useEffect } from 'react';
import Banner from '../banner';
import SongList from '../song-list';
import { connect } from 'react-redux';
import { setTrack } from '../redux-actions';
import { useParams } from 'react-router-dom';

const Tracks = ({spotify, setTrack}) => {
    const params = useParams();

    useEffect(()=> {
        spotify.getPlaylistTracks(params.id).then(data => {
            setTrack(
                data.items.map(({track: {name, artists ,duration_ms,album}}) => {
                    return {
                        trackName: name,
                        artist: artists[0].name,
                        duration_ms,
                        albumName: album.name,
                        albumImg: album.images[0].url
                    };
                })
            );
        })
    },[params.id]);

    return(
        <React.Fragment>
            <Banner spotify={spotify} id={params.id}/>
            <SongList/>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTrack: (tracks) => dispatch(setTrack(tracks))
    }
}

export default connect(null, mapDispatchToProps)(Tracks);