import React from 'react';
import CardForm from './card-form';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history'

describe("CardForm", () => {
    it("render correctly", () => {
        const mockStore = {
            getState: () => ({card: {cardName: null}}),
            subscribe: () => {},
            dispatch: () => {}
        }

        const history = createMemoryHistory();
        const {getByLabelText} = render(

                <Router history={history}>
                    <Provider store={mockStore}>
                        <CardForm/>
                    </Provider>
                </Router>
            
        )

        expect(getByLabelText('Номер карты *')).toHaveAttribute('name', 'cardNumber')
        expect(getByLabelText('Имя владельца *')).toHaveAttribute('name', 'cardName')
        expect(getByLabelText('CVC *')).toHaveAttribute('name', 'cvc')
        expect(getByLabelText('Expire date')).toHaveAttribute('name', 'Expire date')
    })
})