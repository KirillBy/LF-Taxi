import React from 'react';
import Login from './login';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'

jest.mock('../login-form', () =>  () => (<div>LoginForm component</div> ));

describe("Login", () => {
    it("render correctly", () => {
        const {container} = render(<Login/>);
    expect(container.innerHTML).toMatch("LoginForm component")
    })
})