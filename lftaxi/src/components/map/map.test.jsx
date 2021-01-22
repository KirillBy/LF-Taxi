import React from "react";
import Map  from "../map";
import { render } from "@testing-library/react";
import mapbox from "mapbox-gl";
import '@testing-library/jest-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history'

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })), 
}));
jest.mock('../order-form', () =>  () => (<div>OrderForm component</div> ));

describe("Map", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({addresses: {route: null}}),
      subscribe: () => {},
      dispatch: () => {}
  }
  const history = createMemoryHistory();
    const { getByTestId } = render(
    <Router history={history}>
      <Provider store={mockStore}>
          <Map/>
      </Provider>
    </Router>
    );

    expect(mapbox.Map).toHaveBeenCalledWith({
      center: [27.5556504, 53.9029126],
      container: getByTestId('map'),
      style: "mapbox://styles/mapbox/streets-v9",
      zoom: 12,
    });
  });
});