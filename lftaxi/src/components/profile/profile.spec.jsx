import React from 'react';
import Profile from './profile';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'

jest.mock('../card-form', () =>  () => (<div>CardForm Component</div> ));

describe("Profile", () => {
    it("renders correctly", () => {
        const { container } = render(<Profile />);
        expect(container.innerHTML).toMatch("CardForm Component")
    });
});