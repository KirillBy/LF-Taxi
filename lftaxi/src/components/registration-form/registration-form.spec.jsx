import React from 'react';
import RegistrationForm from './registration-form';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history'

describe("RegistrationForm", () => {
    it("render correctly", () => {
        const mockStore = {
            getState: () => ({auth: {isLoggedIn: true}}),
            subscribe: () => {},
            dispatch: () => {}
        }

        const history = createMemoryHistory();

                const {getByLabelText} = render(

                <Router history={history}>
                    <Provider store={mockStore}>
                        <RegistrationForm/>
                    </Provider>
                </Router>
            
        )

        expect(getByLabelText('Адрес электронной почты *')).toHaveAttribute('name', 'email')
        expect(getByLabelText('Имя *')).toHaveAttribute('name', 'firstName')
        expect(getByLabelText('Пароль *')).toHaveAttribute('name', 'password')
        expect(getByLabelText('Фамилия *')).toHaveAttribute('name', 'lastName')

    })
})