import React from 'react';
import './card.sass';

const Card = ({ data, name }) => {
    return (
        <div className="card">
            <div className="card-context">
                <h4>{name}</h4>
                <p>more</p>
            </div>
            <div className="card-items">
                { 
                    data?.playlists?.items.map(({id,images,name,description}) => {
                        return(
                            <div key={id} className="card-item">
                                <div className="card-container">
                                <i className="fas fa-play-circle"></i> 
                                <div className="card-img">
                                    <img src={images[0].url} alt="albumimg"/>
                                </div>
                                <div className="card-title">
                                    <div className="card-header">
                                        { name }
                                    </div>
                                    <div className="card-descr">
                                        { description.length > 27 ? description.substring(0,27).concat('...') : description}
                                    </div>
                                </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Card