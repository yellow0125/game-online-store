import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import DetailScreen from '../DetailScreen'

global.scrollTo = jest.fn()

beforeEach(() => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <DetailScreen />
      </Provider>
    </MemoryRouter>
  )
})

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({

  productDetails: {
    product: {
      cover: 'test.jpg',
      name: 'test name',
      rating: 4.3,
      numReviews: 33,
      price: 98.99
    },
    loading: false,
    error: false,

  },

  productAddReview: {
    success: true,
    error: false
  },

  userLogin: {
    userInfo: true
  }

})

test('rendering correct product info, tabs and img when login', () => {
  const tabElements = screen.getAllByRole('tab')
  expect(tabElements.length).toBe(3)
  const img = screen.getAllByRole('img')
  expect(img.length).toBe(4)
  const backButton = screen.getByRole('link', { name: /Back to Home/i })
  expect(backButton).toBeEnabled();
  expect(backButton).toBeInTheDocument()
  const addButton = screen.getByRole('button', { name: /Add to Cart/i })
  expect(addButton).toBeEnabled();
  expect(addButton).toBeInTheDocument()
  const submitButton = screen.getByRole('button', { name: /Submit/i })
  expect(submitButton).toBeEnabled();
  expect(submitButton).toBeInTheDocument()
});