import React from 'react';
import './app-header.css';
import logo from '../../assets/icon.png'
import {connect} from 'react-redux' 
import {logOut} from '../../actions/login'
import { useHistory } from "react-router-dom";

const AppHeader = ( {logOut}) => {

    const onExit = () => {
        logOut();
    }
    const history = useHistory();

    return (
        <div className="app-header" >
                <nav className="navbar navbar-light bg-light">
                    <div>
                        <img className="header-logo" src={logo}/>
                    </div>

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={() => history.push('/map')}>Карта</button>
                        <button type="button" className="btn btn-light" onClick={() => history.push('/profile')}>Профиль</button>
                        <button type="button" className="btn btn-light" onClick={onExit}>Выйти</button>
                    </div>
                </nav>
        </div>
    );
};

export default connect(
    null,
    {logOut}
)(AppHeader);