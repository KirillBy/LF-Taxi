import React from 'react'
import {render} from '@testing-library/react'
import App from './'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history'

jest.mock('../login', () =>  () => (<div>Login component</div>))
jest.mock('../map', () =>  (() => <div>Map component</div> ))
jest.mock('../profile', () => ( () => <div>Profile component</div> ))
jest.mock('../app-header', () => (() => <div>Header component</div> ))

describe("App", () => {
    it("renders correctly", () => {

        const mockStore = {
            getState: () => ({auth: {isLoggedIn: true}}),
            subscribe: () => {},
            dispatch: () => {}
        }

        const history = createMemoryHistory();


        const {container} = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <App/>
                </Provider>
            </Router>
        )
        expect(container.innerHTML).toMatch("Login component");
    })
})