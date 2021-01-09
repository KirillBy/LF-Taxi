import React from 'react';
import './app-header.css';
import logo from '../../assets/icon.png'
import {connect} from 'react-redux' 
import {logIn, logOut} from '../../actions/login'
import {onLogin, onMap, onProfile} from '../../actions/pages'

const AppHeader = () => {

    return (
        <div className="app-header" >
                <nav className="navbar navbar-light bg-light">
                    <div>
                        <img className="header-logo" src={logo}/>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={onMap}>Карта</button>
                        <button type="button" className="btn btn-light" onClick={onProfile}>Профиль</button>
                        <button type="button" className="btn btn-light" onClick={logOut}>Выйти</button>
                    </div>
                </nav>
        </div>
    );
};

export default connect(
    null,
    {logIn, logOut, onLogin, onMap, onProfile}
)(AppHeader);