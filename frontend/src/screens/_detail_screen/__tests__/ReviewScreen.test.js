import { render, screen } from '@testing-library/react'
import ReviewScreen from '../ReviewScreen'
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockReviews = []

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
    productAddReview: {
        success: true,
        error: false
    },
    userLogin: {
        userInfo: true
    }
})

beforeEach(() => {
    render(
        <Provider store={store}>
            <ReviewScreen reviews={mockReviews} />
        </Provider>
    )
})

test('renderding product reviews', () => {
    const msgElement = screen.getByRole('heading', { name: /there is no review for this product/i })
    expect(msgElement).toBeInTheDocument()

});

test('renderding new review form', () => {
    const selectElement = screen.getByRole('combobox', { name: /rating:/i })
    expect(selectElement).toBeInTheDocument()
    const textboxElement = screen.getByRole('textbox', { name: /review:/i })
    expect(textboxElement).toBeInTheDocument()
    const btnElement = screen.getByRole('button', { name: /submit/i })
    expect(btnElement).toBeInTheDocument()
});