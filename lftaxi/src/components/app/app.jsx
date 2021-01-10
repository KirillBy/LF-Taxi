import React from 'react';
import AppHeader from '../app-header'
import Profile from '../profile'
import Map from '../map'
import Login from '../login'
import {connect} from 'react-redux' 
import { Switch, Route} from "react-router-dom";
import { PrivateRoute } from "./../../private-route";


const App = ({isLoggedIn}) => {
    return (
        <React.Fragment>
            {isLoggedIn && 
            <AppHeader/>}
            <main data-testid="container">
                <section>
                    <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute path="/map" component={Map} />
                    <PrivateRoute path="/profile" component={Profile} />
                    </Switch>
                </section>
            </main>
        </React.Fragment>
    );
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn })
)(App);