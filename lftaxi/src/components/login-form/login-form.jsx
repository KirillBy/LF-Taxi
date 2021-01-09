import React, {useState} from 'react';
import './login-form.css';
import { Typography, Grid, TextField, makeStyles, Container, Button, Link} from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {onMap} from './../../actions/pages';
import {logIn} from './../../actions/login'; 

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    submit: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        width: '25%',
    },
    paper: {
        padding: '40px'
    }

}));

const LoginForm = ({ onRegistrationForm, isLoggedIn}) => {

LoginForm.propTypes = {
    onRegistrationForm: PropTypes.func,
};

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const tryToLogIn = new Promise(function(resolve, reject) {
    if(logIn()) {
        resolve(true);
    } else 
    resolve(false);
 });

const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

const onPasswordChange = (e) => {
    setPassword(e.target.value);
}

const checkIfLogInSuccess = () => {
    if (isLoggedIn){
        onMap();
    }
}

const onSubmit = (evt) => {
    evt.preventDefault();
    tryToLogIn.then((res) => {
        if(res === true){
            checkIfLogInSuccess();
        } else {
            document.login.reset(); 
        }
    });

}

const classes = useStyles();
return (
    <React.Fragment>
        <Container component="main" maxWidth="xl" style={{backgroundColor:"white"}}>
            <div className={classes.paper}>
                <Typography component="h1" variant="h4">
                    Войти
                </Typography>
                <div className="registration-row">
                    <Typography component="p" className="new-user">
                        Новый пользователь? 
                    </Typography>
                    <br/>
                    <Link href="#" onClick={onRegistrationForm}>
                        Зарегистрируйтесь
                    </Link>
                </div>
                <form name="login" className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="username"
                                label="Имя пользователя"
                                name="username"
                                inputProps={email}
                                onChange={onEmailChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                inputProps={password}
                                onChange={onPasswordChange}
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <div className={classes.buttons}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            style={{backgroundColor:"orange"}}
                            onClick={onSubmit}
                        >
                            Войти
                        </Button>
                    </div>
                </form>
            </div>
        </Container>
    </React.Fragment>
)
};

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    {logIn, onMap}
)(LoginForm);