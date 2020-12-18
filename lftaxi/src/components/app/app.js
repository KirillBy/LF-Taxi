import React, {Component, Profiler} from 'react';
import AppHeader from '../app-header'
import Profile from '../profile'
import Map from '../map'
import Login from '../login'


export default class App extends Component {
    state = {
        profile: false,
        map: true,
        login: false
      };

    onProfile = () => {
        this.setState({
            profile: true,
            map: false,
            login: false
        })
    }

    onMap = () => {
        this.setState({
            profile: false,
            map: true,
            login: false
        })
    }

    onLogin = () => {
        this.setState({
            profile: false,
            map: false,
            login: true
        })
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.login && 
                <AppHeader
                onProfile = {this.onProfile}
                onMap = {this.onMap}
                onLogin = {this.onLogin}/>}
                {this.state.profile && <Profile/>}
                {this.state.map && <Map/>}
                {this.state.login && <Login/>}
            </React.Fragment>
        );
    }
}