import React from 'react';
import './app-header.css';
import logo from '../../assets/icon.png'
import {connect} from 'react-redux' 
import {logOut} from '../../actions/login'
import {onMap, onProfile, onLogin} from './../../actions/pages'

const AppHeader = ({onMap, onProfile, logOut, onLogin}) => {

    const onExit = () => {
        logOut();
        onLogin();
    }

    return (
        <div className="app-header" >
                <nav className="navbar navbar-light bg-light">
                    <div>
                        <img className="header-logo" src={logo}/>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={onMap}>Карта</button>
                        <button type="button" className="btn btn-light" onClick={onProfile}>Профиль</button>
                        <button type="button" className="btn btn-light" onClick={onExit}>Выйти</button>
                    </div>
                </nav>
        </div>
    );
};

export default connect(
    null,
    {logOut, onMap, onProfile, onLogin}
)(AppHeader);