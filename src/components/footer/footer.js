import React from 'react';
import './footer.sass';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                    <img className="music-img" src="https://i.pinimg.com/originals/da/18/3e/da183e46c3de1eaefa4f6705ca9a50dd.jpg" alt="logo"/>
                    <div className="music-header">
                        <a href="#/">Title</a>
                        <a href="#/" className="autor">Autor</a>
                    </div>
                    <i className="far fa-heart"></i>
            </div>
            <div className="footer-center">
                    <i className="far fa-random"></i>
                    <i className="fas fa-backward"></i>
                    <i className="fas fa-play-circle"></i>
                    <i className="fas fa-forward"></i>
                    <i className="fal fa-undo"></i>
            </div>
            <div className="footer-right">
                <i className="fas fa-list"></i>
                <i className="fas fa-volume"></i>
                <div className="slider"><div className="circle"></div></div>
            </div>
        </div>
    );
}

export default Footer;