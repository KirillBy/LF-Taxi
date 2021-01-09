import React from 'react';
import AppHeader from '../app-header'
import Profile from '../profile'
import Map from '../map'
import Login from '../login'
import {connect} from 'react-redux' 


const App = ({login, map, profile}) => {
    return (
        <React.Fragment>
            {!login && 
            <AppHeader/>}
            {profile && <Profile/>}
            {map && <Map/>}
            {login && <Login/>}
        </React.Fragment>
    );
}

export default connect(
    (state) => ({login: state.pages.login, map: state.pages.map, profile: state.pages.profile })
)(App);