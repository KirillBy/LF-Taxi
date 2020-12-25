import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from '../app'
import AppHeader from './app-header'

jest.mock('../login', () =>  () => (<div>Login component</div> ))
jest.mock('../map', () =>  () => (<div>Map component</div> ))
jest.mock('../profile', () => () => (<div>Profile component</div> ))

describe("AppHeader", () => {
    it("renders correctly", () => {
        const {container} = render(<AppHeader/>)
        expect(container.innerHTML).toMatch("Профиль")
        expect(container.innerHTML).toMatch("Карта")
        expect(container.innerHTML).toMatch("Выйти")
    })
})

describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
        const {container, getByText} = render(<App/>);

        fireEvent.click(getByText("Выйти"))
        expect(container.innerHTML).toMatch("Login component")
    })
})