import React, {useEffect, useState} from 'react';
import './card-form.css';
import { Typography, Grid, TextField, makeStyles, Container, Button} from "@material-ui/core";
import {connect} from 'react-redux';
import {registerCard} from './../../actions/card';
import { useHistory } from "react-router-dom";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    submit: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        width: '25%',
    },
    mapButton: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        width: '35%',
    },
    paper: {
        padding: '40px',

    },
    profile: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    pay: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    cardGridGroup: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    success: {
        marginTop: theme.spacing(5)
    }
    

}));

const CardForm = ({registerCard, userCard}) => {

let history = useHistory();

const [cardNumber, setcardNumber] = useState('')
const [cardName, setcardHolder] = useState('')
const [expiryDate, setexpireDate] = useState(new Date('2021-01'))
const [cvc, setCVC] = useState('')

useEffect(() => {
    effect
    return () => {
        cleanup
    }
}, [input])

const onCardNumberChange = (e) => {
    setcardNumber(e.target.value);
  };

const onCardHolderChange = (e) => {
    setcardHolder(e.target.value);
}

const onCVCChange = (e) => {
    setCVC(e.target.value);
}

const handleDateChange = (date) => {
    setexpireDate(date);
  };

const onSubmit = (e) => {
     e.preventDefault();
     const newCard = {
         cardNumber,
         cardName,
         expiryDate,
         cvc
     }
     registerCard(newCard)

}

const onMap = () => {
    history.push('/map');
}

const classes = useStyles();
return (
    <React.Fragment>
        <Container component="main" maxWidth="xl" style={{backgroundColor:"white"}}>
            <div className={classes.paper}>
                <div className={classes.profile}>
                    <Typography component="h1" variant="h4">
                        Профиль
                    </Typography>
                 </div>
                <div className={classes.pay}>
                    <Typography component="p">
                        Способ оплаты 
                    </Typography>
                </div>

                {userCard === '' ? 
                <form name="login" className={classes.form} noValidate>
                    <div className={classes.cardGridGroup}>
                    <Grid container spacing={2} xl={10}  >
                        <Grid item >
                            <TextField
                                required
                                fullWidth
                                id="cardnumber"
                                label="Номер карты"
                                name="cardnumber"
                                onChange={onCardNumberChange}
                            />
                        </Grid>
                        <Grid item xl={10}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker 
                            id="date-picker-dialog"
                            label="Expire date"
                            name="Expire date"
                            views={["year", "month"]}
                            format="MM/yyyy"
                            value={expiryDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                         </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xl={12}>
                            <TextField
                                required
                                fullWidth
                                id="cardholder"
                                label="Имя владельца"
                                name="cardholder"
                                onChange={onCardHolderChange}
                            />
                        </Grid>
                        <Grid item xl={12}>
                            <TextField
                                required
                                fullWidth
                                name="cvc"
                                label="CVC"
                                type="cvc"
                                id="cvc"
                                onChange={onCVCChange}
                            />
                        </Grid>
                    </Grid>
                    </div>
                    <div className={classes.buttons}>       
                       <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            style={{backgroundColor:"orange"}}
                            onClick={onSubmit}
                        >
                            Сохранить
                        </Button>
                    </div>
                </form>
                : 
                <div className={classes.success}>
                    <p>Платёжные данные обновлены. Теперь вы можете заказывать такси.</p>
                    <div className={classes.buttons}>       
                       <Button
                            fullWidth
                            variant="contained"
                            className={classes.mapButton}
                            style={{backgroundColor:"orange"}}
                            onClick={onMap}
                        >
                            Перейти на карту
                        </Button>
                    </div>
                </div>

                }
            </div>
        </Container>
    </React.Fragment>
)
};

export default connect(
    (state) => ({userCard: state.card.cardName }),
    {registerCard}
)(CardForm);