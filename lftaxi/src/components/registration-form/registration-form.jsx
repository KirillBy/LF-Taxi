import React from 'react';
import './registration-form.css';
import { Typography, Grid, TextField, makeStyles, Container, Button, Link } from "@material-ui/core";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
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

const RegistrationForm = ({onLoginForm }) => {
    RegistrationForm.propTypes = {
        onLoginForm: PropTypes.func,
    };

    const classes = useStyles();
    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs" style={{ backgroundColor: "white" }}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4">
                        Регистрация
                </Typography>
                    <div className="registration-row">
                        <Typography component="p" className="new-user">
                            Уже зарегистрированы?
                    </Typography>
                        <br />
                        <Link href="#" onClick={onLoginForm}>
                            Войти
                    </Link>
                    </div>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Адрес электронной почты"
                                    fullWidth
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Имя "
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                required
                                id="lastName" 
                                name="lastName" 
                                label="Фамилия" 
                                fullWidth 
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
                                style={{ backgroundColor: "orange" }}
                                //onClick={onMap}
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
    null,
    {logIn}
)(RegistrationForm);