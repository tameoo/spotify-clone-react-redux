import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { setCategory } from '../redux-actions';
import './category.sass';

const Category = ({spotify, category, setCategory}) => {
    const history = useHistory();

    useEffect(() => {
        spotify.getCategories().then(category => setCategory(category));
    },[]);
    
    return (    
        <div className="category">
            <div className="category-card">
                <div className="category-context">
                    <h3>Category</h3>
                </div>
                <div className="category-items">
                    {
                        category?.categories?.items.map(({id, name, icons}) => {
                            return ( 
                                <div key={id} className="category-item"
                                    onClick={ () =>history.push(`/category/${id}`) }>
                                    <div className="category-header">
                                        {name}
                                    </div>
                                    <img className="category-img" src={icons[0].url} alt="albumimg"/>
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
        category: state.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setCategory: (category) => dispatch(setCategory(category))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);