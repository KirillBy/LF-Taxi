import React from 'react';
import RegistrationForm from './registration-form';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'

describe("RegistrationForm", () => {
    it("render correctly", () => {
        const {getByLabelText} = render(<RegistrationForm/>)

        expect(getByLabelText('Адрес электронной почты *')).toHaveAttribute('name', 'email')
        expect(getByLabelText('Имя *')).toHaveAttribute('name', 'firstName')
        expect(getByLabelText('Пароль *')).toHaveAttribute('name', 'password')
        expect(getByLabelText('Фамилия *')).toHaveAttribute('name', 'lastName')

    })
})