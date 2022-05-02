import { render, screen } from '@testing-library/react'
import Header from '../Header';
import { MemoryRouter } from 'react-router-dom'
import store from "../../store"
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const newStore = mockStore({
  userLogin: { userInfo: true }
})

test('Navigation links', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>)
  const linkElements = screen.getAllByRole("link");
  expect(linkElements.length).toBe(7);
  const login = screen.getByText(/sign in/i)
  expect(login).toBeInTheDocument()
});

test('Navigation with user login', () => {
  render(
    <Provider store={newStore}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>)
  const login = screen.queryByText(/sign in/i)
  expect(login).not.toBeInTheDocument()
});