import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux"
import CartScreen from '../CartScreen'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { MemoryRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  userLogin: {
    userInfo: true
  },
  cart: {
    cartItems: []
  },
})

const mockItem = {
  cover: 'test.jpg',
  name: 'test name',
  qty: 2,
  countInStock: 10,
  price: 30
}

const newStore = mockStore({
  userLogin: {
    userInfo: true
  },
  cart: {
    cartItems: [mockItem]
  },
})


test('renderding the items in the cart and the cart is empty', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CartScreen />
      </MemoryRouter>
    </Provider>
  )
  const msgElement = screen.getByRole('heading')
  expect(msgElement.textContent).toBe('Your Cart is Empty')
  const buttonElement = screen.getByRole('button', { name: "Go to Homepage" })
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toBeInTheDocument();
  const img = screen.getAllByRole('img')
  expect(img.length).toBe(1);
});

test('renderding the items in the cart ', () => {
  render(
    <Provider store={newStore}>
      <MemoryRouter>
        <CartScreen />
      </MemoryRouter>
    </Provider>
  )
  const msgElement = screen.getAllByRole('heading')
  expect(msgElement.length).toBe(3)

  const imgElement = screen.getByRole('img', {
    name: /test name/i
  })
  expect(imgElement).toBeInTheDocument()
  expect(imgElement.src).toBe('http://localhost/test.jpg')

  const nameElement = screen.getByText(/test name/i)
  expect(nameElement).toBeInTheDocument()

  const eachPrice = screen.getByText('$30')
  expect(eachPrice).toBeInTheDocument()

  const priceElement = screen.getByText('$60.00')
  expect(priceElement).toBeInTheDocument()

  const totalElement = screen.getByText(/\$67\.20/i)
  expect(totalElement).toBeInTheDocument()

  const buttonElement = screen.getByRole('button', { name: "Proceed to checkout" })
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toBeInTheDocument();

});

