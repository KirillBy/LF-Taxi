import React from 'react';
import './app-header.css';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";


const AppHeader = () => {
    return (
        <div className="app-header">
            <AppBar className="appBar" color="primary" position="static">
                <Toolbar>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppHeader;