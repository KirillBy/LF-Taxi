import React from 'react';
import LoginForm from '../login-form';
import './login.css';
import logo from '../../assets/icon-login.png'
import RegistrationForm from '../registration-form';


export default class Login extends React.Component {
    state = {
        LoginForm: true,
        RegistrationForm: false
      };

    onRegistrationForm = () => {
    this.setState({
        RegistrationForm: true,
        LoginForm: false,
    })
    }

    onLoginForm = () => {
        this.setState({
            RegistrationForm: false,
            LoginForm: true,
        }) 
    }
    render(){
        return (
        <div className="login-container">
        <div className="login-flex"> 
            <div className="login-logo-container"  >
                <img className="login-logo" src={logo}/>
            </div>
            <div>
            {this.state.LoginForm && <LoginForm onMap={this.onMap} onRegistrationForm={this.onRegistrationForm}/> }
            {this.state.RegistrationForm && <RegistrationForm onMap={this.onMap} onLoginForm={this.onLoginForm}/> }                
            </div>
        </div>
    </div>
    )}

};
