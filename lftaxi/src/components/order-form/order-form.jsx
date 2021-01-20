import React, {useState, useEffect} from 'react';
import './order-form.css';
import { FormControl, Grid, TextField, makeStyles, Container, Button, InputLabel, Select, MenuItem} from "@material-ui/core";
import {connect} from 'react-redux';
import {addAddresses} from './../../actions/address';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },

    submit: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        width: '100%',
    },
    paper: {
        padding: '40px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '100%',
    },
    selectEmpty: {
    marginTop: theme.spacing(2),
    },  

}));

const OrderForm = ({addAddresses, isLoggedIn}) => {

let history = useHistory();

const [startPoint, setStartPoint] = useState('')
const [destPoint, setDestPoint] = useState('')
const [startOpen, setStartOpen] = React.useState(false)
const [distOpen, setDistOpen] = React.useState(false)

useEffect(() => {
    
    //addAddresses();
    if(isLoggedIn)
    {
        history.push("/map");
    }
}, [isLoggedIn])


const onStartPointChange = (e) => {
    setStartPoint(e.target.value);
  };

const onDestPointChange = (e) => {
    setDestPoint(e.target.value);
}

const handleStartClose = () => {
    setStartOpen(false);
  };

  const handleStartOpen = () => {
    setStartOpen(true);
  };

const handleDistClose = () => {
    setDistOpen(false);
  };

  const handleDistOpen = () => {
    setDistOpen(true);
  };


const onSubmit = (e) => {
     e.preventDefault();
    // authenticate(email, password, history);
}

const classes = useStyles();
return (
    <React.Fragment>
        <Container component="main" maxWidth="xl" style={{backgroundColor:"white"}}>
            <div className={classes.paper}>
                <form name="login" className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Откуда</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="startPoint"
                                value={startPoint}
                                open={startOpen}
                                onClose={handleStartClose}
                                onOpen={handleStartOpen}
                                onChange={onStartPointChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Куда</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="destPoint"
                                value={destPoint}
                                open={distOpen}
                                onClose={handleDistClose}
                                onOpen={handleDistOpen}
                                onChange={onDestPointChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
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
    (state) => ({isLoggedIn: state.auth.isLoggedIn }),
    {addAddresses}
)(OrderForm);