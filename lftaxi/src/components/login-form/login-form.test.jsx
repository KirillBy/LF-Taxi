import React from 'react';
import LoginForm from './login-form';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history'

describe("LoginForm", () => {
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
                        <LoginForm/>
                    </Provider>
                </Router>
            
        )

        expect(getByLabelText('Имя пользователя *')).toHaveAttribute('name', 'username')
        expect(getByLabelText('Пароль *')).toHaveAttribute('name', 'password')
    })
})

