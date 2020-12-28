import React, { useState } from 'react';
import LoginForm from '../login-form';
import './login.css';
import logo from '../../assets/icon-login.png'
import RegistrationForm from '../registration-form';
import PropTypes from "prop-types";



const Login = ({onMap}) => {
    Login.propTypes = {
        onMap: PropTypes.func,
    };

    const [loginForm, setLoginForm] = useState(true);
    const [registrationForm, setRegistrationForm] = useState(false);

    const onRegistrationForm = () => {
        setLoginForm(false);
        setRegistrationForm(true);
    }
    
    const onLoginForm = () => {
        setLoginForm(true);
        setRegistrationForm(false);
    }

        return (
        <div className="login-container">
        <div className="login-flex"> 
            <div className="login-logo-container"  >
                <img className="login-logo" src={logo}/>
            </div>
            <div>
            {loginForm && <LoginForm onMap={onMap} onRegistrationForm={onRegistrationForm}/> }
            {registrationForm && <RegistrationForm onMap={onMap} onLoginForm={onLoginForm}/> }                
            </div>
        </div>
    </div>
    )

};

export default Login;