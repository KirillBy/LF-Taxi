import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import App from '../app'
import AppHeader from './app-header'


jest.mock('../login', () => ({ Login: () => <div>Login component</div> }))
jest.mock('../map', () => ({ Map: () => <div>Map component</div> }))
jest.mock('../profile', () => ({ Profile: () => <div>Profile component</div> }))


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
        const {getByText} = render(<AppHeader/>);
        const {container} = render(<App/>);

        fireEvent.click(getByText("Профиль"))
        expect(container.innerHTML).toMatch("Profile component")
    })
})