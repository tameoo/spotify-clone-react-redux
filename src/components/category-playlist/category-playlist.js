import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCategoryPlaylist } from '../redux-actions';
import { useParams } from 'react-router-dom';
import Card from '../card';
import './category-playlist.sass';

const CategoryPlaylist = ({spotify, category, categoryPlaylist, setCategoryPlaylist}) => {
    const params = useParams();

    useEffect(() => {
        spotify.getCategoryPlaylists(params.id).then(categoryPlaylist => setCategoryPlaylist(categoryPlaylist));
    },[]);

    return (
        <div className="category-playlist">
            <div className="category-playlist-header">
                <h1>
                    {
                        category?.categories?.items.find(item => item.id === params.id).name
                    }
                </h1>
            </div>
            <div className="category-playlist-container">
                <Card name={"Popular playlists"} data={categoryPlaylist}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        category: state.category,
        categoryPlaylist: state.categoryPlaylist
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setCategoryPlaylist: (categoryPlaylist) => dispatch(setCategoryPlaylist(categoryPlaylist))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPlaylist);