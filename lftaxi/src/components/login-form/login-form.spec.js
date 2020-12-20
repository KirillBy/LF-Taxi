import React from 'react';
import LoginForm from './login-form';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'

describe("LoginForm", () => {
    it("render correctly", () => {
        const {getByLabelText} = render(<LoginForm/>)

        expect(getByLabelText('Имя пользователя *')).toHaveAttribute('name', 'username')
        expect(getByLabelText('Пароль *')).toHaveAttribute('name', 'password')
    })
})