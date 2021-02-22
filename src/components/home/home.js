import React, { useEffect } from 'react';
import { setFeture, setNewReleases, setToplist } from '../redux-actions';
import Spinner from '../spinner';
import Card from '../card';
import { connect } from 'react-redux';
import './home.sass';

const Home = ({ features, newReleases, toplist, setToplist, setFeture, setNewReleases, spotify }) => {

    useEffect(() => {
        spotify.getFeaturedPlaylists().then(features => setFeture(features));
        spotify.getCategoryPlaylists('toplists').then(toplist => setToplist(toplist));
        spotify.getCategoryPlaylists('romance').then(newReleases => setNewReleases(newReleases));
    },[]);
    
    if(!features && !toplist && !newReleases){
        return <Spinner/>
    }    

    return (
        <div className="home">
            <div className="home-container">
                <Card data={features} name={features?.message}/>               
                <Card data={toplist} name={"TopList"}/>               
                <Card data={newReleases} name={"Romance"}/>               
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        features: state.features,
        newReleases: state.newReleases,
        toplist: state.toplist,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFeture: (features) => dispatch(setFeture(features)),
        setNewReleases: (newReleases) => dispatch(setNewReleases(newReleases)),
        setToplist: (toplist) => dispatch(setToplist(toplist))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
