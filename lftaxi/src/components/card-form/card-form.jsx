import React, {useEffect, useState} from 'react';
import './card-form.css';
import { Typography, Grid, TextField, makeStyles, Container, Button} from "@material-ui/core";
import {connect} from 'react-redux';
import {registerCard, getCardData} from './../../actions/card';
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

const CardForm = ({
    registerCard, 
    getCardData, 
    cardName,
    expiryDate,
    cardNumber,
    cvc,
    loading,
    error,
    isUpdated
}) => {

let history = useHistory();

const [formFields, setFormField] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: new Date(),
    cvc: "",
})

const onChange = (e) => {
    setFormField({
        ...formFields,
        [e.target.name]: e.target.value
    })
}

const onDateChange = (date) => {
    setFormField({
        ...formFields,
        expiryDate: date
    })
}


// // const [cardNumber, setcardNumber] = useState('')
// // const [cardName, setcardHolder] = useState('')
// // const [expiryDate, setexpireDate] = useState(new Date('2021-01'))
// // const [cvc, setCVC] = useState('')

useEffect (() => {
    getCardData();
    if(error === null){
        setFormField({cardNumber, expiryDate, cardName, cvc})
    }
    
}, [getCardData,cardNumber, expiryDate, cardName, cvc])

// const onCardNumberChange = (e) => {
//     setcardNumber(e.target.value);
//   };

// const onCardHolderChange = (e) => {
//     setcardHolder(e.target.value);
// }

// const onCVCChange = (e) => {
//     setCVC(e.target.value);
// }

// const handleDateChange = (date) => {
//     setexpireDate(date);
//   };

const onSubmit = (e) => {
     e.preventDefault();
     registerCard(formFields)

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
                {loading ? (
                    <Typography variant="body1">Loading....</Typography>
                ): null}
                {error ? (
                    <Typography color="error">{error}</Typography>
                ): null}
                {!isUpdated ? (
                <form name="login" className={classes.form} noValidate>
                    <div className={classes.cardGridGroup}>
                    <Grid container spacing={2} xl={10}  >
                        <Grid item >
                            <TextField
                                required
                                fullWidth
                                id="cardNumber"
                                label="Номер карты"
                                value={formFields.cardNumber}               
                                name="cardNumber"
                                onChange={onChange}
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
                            value={formFields.expiryDate}
                            onChange={onDateChange}
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
                                value={formFields.cardName}
                                id="cardName"
                                label="Имя владельца"
                                name="cardName"
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xl={12}>
                            <TextField
                                required
                                fullWidth
                                value={formFields.cvc}
                                name="cvc"
                                label="CVC"
                                type="cvc"
                                id="cvc"
                                onChange={onChange}
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
                </form>)
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
    (state) => ({
        cardName: state.card.cardName,
        expiryDate: state.card.expiryDate,
        cardNumber: state.card.cardNumber,
        cvc: state.card.cvc,
        loading: state.card.loading,
        error: state.card.error,
        isUpdated: state.card.isUpdated
         }),
    {registerCard, getCardData}
)(CardForm);