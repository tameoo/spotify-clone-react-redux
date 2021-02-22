import React, { useState } from 'react';
import { connect } from 'react-redux';
import './header.sass';

const Header = ({user}) =>{
    const [toggler, setToggler] = useState(false);
        const img = user?.images[0]?.url ? <img src={user.images[0].url} alt="avatar" className="avatar-img"/> : <div className="avatar-wrapper"><i className="avatar-icon far fa-user-alt"></i></div>;

    return (
        <div className="header">
            <div className="header-left">
                <i className="far fa-search"></i>
                <input placeholder="Search for Artists, Song and Podcast" type="text"/>
            </div>
            <div className="header-right"
                onClick={ () => setToggler(!toggler) }>
                <div className="avatar">
                   { img }
                </div>
                <div className="avatar-name" >{user?.display_name}</div>
                <i className={ toggler ? "down fas fa-caret-up" : "down fas fa-caret-down" }></i>
            </div>
            <div className={ toggler ? "header-logout header-logout-active" : "header-logout"}>
                <div className="header-logout-text">Logout</div>
                <i className="fas fa-sign-out-alt"></i>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Header);