import React, { useState} from 'react';
import AppHeader from '../app-header'
import Profile from '../profile'
import Map from '../map'
import Login from '../login'
import withAuth from '../../helpers/auth-context/auth-context'


const App = () => {
    const [profile, setProfile] = useState(false);
    const [map, setMap] = useState(false);
    const [login, setLogin] = useState(true);
    const onProfile = () => {
        setProfile(true);
        setMap(false);
        setLogin(false);
    }
    const onMap = () => {
        setProfile(false);
        setMap(true);
        setLogin(false);
    }
    const onLogin = () => {
        setProfile(false);
        setMap(false);
        setLogin(true);
    }
    return (
        <React.Fragment>
            {!login && 
            <AppHeader
            onProfile = {onProfile}
            onMap = {onMap}
            onLogin = {onLogin}/>}
            {profile && <Profile/>}
            {map && <Map/>}
            {login && <Login onMap={onMap}/>}
        </React.Fragment>
    );

}

export default withAuth(App);