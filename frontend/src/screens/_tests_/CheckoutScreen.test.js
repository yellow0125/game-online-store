import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { MemoryRouter } from 'react-router-dom';
import CheckoutScreen from '../CheckoutScreen';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockItem = {
  cover: 'test.jpg',
  name: 'test name',
  qty: 2,
  countInStock: 10,
  price: 30
}

const store = mockStore({
  userLogin: {
    userInfo: true
  },
  cart: {
    cartItems: [mockItem]
  },
  orderCreate: {
    order: [],
  },

})


test('renderding the items in the order and', () => {
  render(
      <Provider store={store}>
        <MemoryRouter>
          <CheckoutScreen />
        </MemoryRouter>
      </Provider>
  )
  const msgElement = screen.getAllByRole('heading')
  expect(msgElement.length).toBe(2)
  const buttonElement = screen.getByRole('button', { name: "Confirm" })
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toBeInTheDocument();
  const img = screen.getAllByRole('img')
  expect(img.length).toBe(1);
});
