import React from 'react';
import { connect } from 'react-redux'; 
import { useHistory } from 'react-router-dom';
import './sidebar-option.sass';

const  SidebarOption = ({playlists}) => {
    const history = useHistory();

    return (
        <React.Fragment>
            <ul className="playlist-container">
                {
                    playlists?.items?.map(({id,name}) => {
                        return (
                            <li key={name} 
                                className="playlist-item"
                                onClick={ () => history.push(`/myplaylist/${id}`)}>
                                { name.length > 25 ? name.substring(0,25).concat('...') : name }
                            </li>);
                    })
                }
            </ul>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return{
        playlists: state.playlists
    }
}

export default connect(mapStateToProps)(SidebarOption);