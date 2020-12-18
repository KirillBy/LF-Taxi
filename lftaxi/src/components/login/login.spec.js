import React from 'react';
import Login from './login';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'

describe("Login", () => {
    it("render correctly", () => {
        const {getByLabelText} = render(<Login/>)

        expect(getByLabelText('Email:')).toHaveAttribute('name', 'email')
        expect(getByLabelText('Password:')).toHaveAttribute('name', 'password')
    })
})