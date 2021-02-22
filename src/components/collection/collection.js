import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './collection.sass';

const Collection = ({ playlists, spotify}) => {
    return (
        <div className="collection">
            <div className="card">
                <div className="card-context">
                    <h4>Playlists</h4>
                </div>
                <div className="card-items card-items-overflow">
                    {
                         playlists?.items.map(({id, images, name, description}) => {
                            return ( 
                                <div key={id} className="card-item">
                                    <div className="card-container">
                                        <i className="fas fa-play-circle"></i>
                                        <div className="card-img">
                                            <img src={images[0].url} alt="albumimg"/>
                                        </div>
                                        <div className="card-title">
                                            <div className="card-header">
                                                { name.length > 25 ? name.substring(0,25).concat('...') : name }
                                            </div>
                                            <div className="card-descr">
                                                { description.length > 27 ? description.substring(0,27).concat('...') : description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        playlists: state.playlists
    }
}

export default connect(mapStateToProps)(Collection);