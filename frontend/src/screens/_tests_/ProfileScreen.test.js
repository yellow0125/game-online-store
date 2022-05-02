import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import ProfileScreen from '../ProfileScreen'
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

beforeEach(() => {
    render(<MemoryRouter>
        <Provider store={store} >
            <ProfileScreen />
        </Provider>
    </MemoryRouter>)
})

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

test('rendering correct user info and tabs', () => {
    const greetingElement = screen.getByRole('heading', {
        name: /hello, johndoe/i
    })
    expect(greetingElement).toBeInTheDocument()
    const emailElement = screen.getByText(/email: johndoe@gmail\.com/i)
    expect(emailElement).toBeInTheDocument()
    const tabElements = screen.getAllByRole('tab')
    expect(tabElements.length).toBe(3)
    const titleElement = screen.getByRole('button', { name: /orders history/i })
    expect(titleElement).toBeInTheDocument()
});

test('click reviews tab', async () => {
    const reviewTab = screen.getByRole('tab', { name: /reviews/i })
    const user = userEvent.setup();
    await user.click(reviewTab);
    const titleElement = screen.getByRole('button', { name: /my reviews/i })
    expect(titleElement).toBeInTheDocument()
});

test('click settings tab', async () => {
    const reviewTab = screen.getByRole('tab', { name: /reviews/i })
    const user = userEvent.setup();
    await user.click(reviewTab);
    const titleElement = screen.getByRole('button', { name: /my settings/i })
    expect(titleElement).toBeInTheDocument()
});