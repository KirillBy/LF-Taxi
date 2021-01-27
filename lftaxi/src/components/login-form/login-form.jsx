import React, {useState, useEffect} from 'react';
import './login-form.css';
import { Typography, Grid, TextField, makeStyles, Container, Button, Link} from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {authenticate} from './../../actions/login';
import { useHistory } from "react-router-dom";
import {emailRegex} from "./../../helpers/regex"

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

const LoginForm = ({ onRegistrationForm, authenticate, isLoggedIn}) => {

LoginForm.propTypes = {
    onRegistrationForm: PropTypes.func,
};

let history = useHistory();

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')

useEffect(() => {
    if(isLoggedIn)
    {
        history.push("/map");
    }
}, [isLoggedIn])


const onEmailChange = (e) => {
    setEmail(e.target.value);
    emailValidation();

  };

const emailValidation = () => {
    if (emailRegex.test(email)) {
        setEmailError('');
      } else {
        setEmailError('Invalid email format' );
      }
}

const passwordValidation = () => {
    if (password.length <= 4) {
        setPasswordError('Password must be more than 5 symbols')
    } else {
        setPasswordError('');
    }  
}  

const onPasswordChange = (e) => {
    setPassword(e.target.value);
    passwordValidation();
}


const onSubmit = (e) => {
     e.preventDefault();
     authenticate(email, password);
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
                                onChange={onEmailChange}
                                error ={emailError.length === 0 ? false : true }
                                helperText={emailError}
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
                                onChange={onPasswordChange}
                                autoComplete="current-password"
                                error ={passwordError.length === 0 ? false : true }
                                helperText={passwordError}
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
                            disabled={passwordError.length !== 0 || emailError.length !== 0 || email.length === 0 || password.length === 0 }
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
    (state) => ({isLoggedIn: state.auth.isLoggedIn }),
    {authenticate}
)(LoginForm);