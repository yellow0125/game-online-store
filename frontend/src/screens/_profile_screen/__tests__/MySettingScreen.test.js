import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import MySettingScreen from '../MySettingScreen'
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

test('rendering correct user info', () => {
    render(<MemoryRouter>
        <Provider store={store} >
            <MySettingScreen />
        </Provider>
    </MemoryRouter>)

    const formElements = screen.getAllByRole('textbox')
    expect(formElements.length).toBe(2)

    const infoInputs = screen.getAllByRole('textbox')
    expect(infoInputs[0].value).toBe('johndoe')
    expect(infoInputs[1].value).toBe('johndoe@gmail.com')

    const cancleBtn = screen.getByRole('button', { name: /cancel/i })
    expect(cancleBtn).toBeInTheDocument()
    const saveBtn = screen.getByRole('button', { name: /save/i })
    expect(saveBtn).toBeInTheDocument()
});
