import React from 'react';
import Header from '../header';
import Tracks from '../tracks'
import Home from '../home';
import Collection from '../collection';
import Category from '../category';
import CategoryPlaylist from '../category-playlist';
import { Route, Switch } from 'react-router-dom';
import './body.sass';

const Body = ({spotify}) => {
    return (
        <div className="body">
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Home spotify={spotify}/>
                </Route>
                <Route path="/search">
                    <Category spotify={spotify}/>
                </Route>
                <Route path="/collection">
                    <Collection spotify={spotify}/>
                </Route>
                <Route path="/myplaylist/:id">
                    <Tracks spotify={spotify}/>
                </Route>
                <Route path="/category/:id">
                    <CategoryPlaylist spotify={spotify}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Body;