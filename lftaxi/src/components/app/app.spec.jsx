import React from 'react'
import {render} from '@testing-library/react'
import App from './'

jest.mock('../login', () =>  () => (<div>Login component</div>))
jest.mock('../map', () =>  (() => <div>Map component</div> ))
jest.mock('../profile', () => ( () => <div>Profile component</div> ))
jest.mock('../app-header', () => (() => <div>Header component</div> ))

describe("App", () => {
    it("renders correctly", () => {
        const {container} = render(<App/>)
        expect(container.innerHTML).toMatch("Login component");
    })
})