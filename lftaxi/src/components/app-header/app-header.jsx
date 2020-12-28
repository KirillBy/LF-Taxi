import React from 'react';
import './app-header.css';
import logo from '../../assets/icon.png'
import withAuth from '../../helpers/auth-context/auth-context'
import PropTypes from "prop-types";

const AppHeader = ({onProfile, onMap, onLogin, logOut}) => {
    AppHeader.propTypes = {
        onProfile: PropTypes.func,
        onMap: PropTypes.func,
        onLogin: PropTypes.func,
        logOut: PropTypes.func
    };
    const onLogOut = () => {
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
                        <button type="button" className="btn btn-light" onClick={onLogOut}>Выйти</button>
                    </div>
                </nav>
        </div>
    );
};

export default withAuth(AppHeader);