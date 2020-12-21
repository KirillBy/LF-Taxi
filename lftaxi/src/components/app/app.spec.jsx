import React from 'react'
import {render} from '@testing-library/react'
import App from './'

jest.mock('../login', () => ({ Login: () => <div>Login component</div> }))
jest.mock('../map', () => ({ Map: () => <div>Map component</div> }))
jest.mock('../profile', () => ({ Profile: () => <div>Profile component</div> }))
jest.mock('../app-header', () => ({ AppHeader: () => <div>Header component</div> }))

describe("App", () => {
    it("renders correctly", () => {
        const {container} = render(<App/>)
        expect(container.innerHTML).toMatch("Map component")
        expect(container.innerHTML).toMatch("Header component")
    })

})