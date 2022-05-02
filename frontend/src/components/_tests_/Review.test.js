import { render, screen } from '@testing-library/react'
import Review from '../Review'

import store from "../../store"
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const newStore = mockStore({
    reviewList: {
        reviews: []
    },
    myReviewList: {
        reviews: []
    },
    userLogin: { userInfo: true }
})

test('renderding the latest three reviews when the user is not logged in', () => {
    render(
        <Provider store={store}>
            <Review />
        </Provider>
    )
    const titleElement1 = screen.getByText(/customer reviews/i)
    expect(titleElement1).toBeInTheDocument()
    const titleElement2 = screen.queryByText(/my reviews/i)
    expect(titleElement2).not.toBeInTheDocument()

});

test('renderding the latest three reviews made by the login user when the user is logged in', () => {
    render(
        <Provider store={newStore}>
            <Review />
        </Provider>
    )

    const msgElement = screen.getByRole('heading')
    expect(msgElement.textContent).toBe('You have never written a review.')
});