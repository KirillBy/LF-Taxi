import React from 'react';
import './app-header.css';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '0 24px',
      zIndex: 10,
      backgroundColor: '#ffffff',
    },
  });

const AppHeader = () => {
    const classes = useStyles();
    return (
        <div className="app-header" >
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                <Typography variant='h5' color='default' className={classes.grow}>Loft Taxi</Typography>
                    <Button >Карта</Button>
                    <Button >Профиль</Button>
                    <Button >Выйти</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppHeader;