import React from 'react';
import { loginUrl } from '../spotify';
import './login.sass';

const Login = () => {
    return (
        <div className="login">
            <div className="login-wrapper container">
                <div className="logo">
                    <i className="fab fa-spotify logo-img"></i>
                    <h1 className="login-header">Spotify</h1>
                    <sup><i className="register far fa-registered"></i></sup>
                </div>
                <div className="login-wrapper-btn">
                    <a href={loginUrl}>
                        <button className="login-btn">login with spotify</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;