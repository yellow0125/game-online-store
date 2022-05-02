import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MyorderScreen from '../MyorderScreen'
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
    userLogin: {
        userInfo: true
    },
    userDetails: {
        user: {
            name: 'johndoe',
            email: 'johndoe@gmail.com'
        }
    },
    orderListMy: {
        loading: false,
        orders: []
    },
    myReviewList: {
        loading: false,
        reviews: []
    },
    userUpdateProfile: {
        success: true
    }
})

test('rendering correctly when the user has no order', () => {
    render(<MemoryRouter>
        <Provider store={store} >
            <MyorderScreen />
        </Provider>
    </MemoryRouter>)

    const msgElement = screen.getByRole('heading')
    expect(msgElement.textContent).toBe('You have never placed an order')
    const btnElement = screen.getByRole('button', { name: /go to homepage/i })
    expect(btnElement).toBeInTheDocument()
});
