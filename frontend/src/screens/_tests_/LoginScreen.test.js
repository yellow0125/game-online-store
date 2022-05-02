import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import LoginScreen from '../LoginScreen'
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const newStore = mockStore({
    userLogin: {
        lodading: false,
        error: false,
        userInfo: false
    }
})

test('rendering correctly', () => {
    render(
        <MemoryRouter>
            <Provider store={newStore} >
                <LoginScreen />
            </Provider>
        </MemoryRouter>
    )

    const titleElement = screen.getByRole('heading', { name: /welcome back/i })
    expect(titleElement).toBeInTheDocument()
    const formElements = screen.getAllByRole('textbox')
    expect(formElements.length).toBe(1)
    const btnElement = screen.getByRole('button', { name: /go ahead/i })
    expect(btnElement).toBeInTheDocument()
    const msgElement = screen.getByText(/don't have an account\?/i)
    expect(msgElement).toBeInTheDocument()
});

test('rendering correctly when user type', async () => {
    render(
        <MemoryRouter>
            <Provider store={newStore} >
                <LoginScreen />
            </Provider>
        </MemoryRouter>
    )

    const emailInput = screen.getByRole('textbox', { name: /email address/i })
    expect(emailInput).toBeInTheDocument()
    const pwdInput = screen.getByLabelText(/password/i)
    expect(pwdInput).toBeInTheDocument()

    const user = userEvent.setup()
    await user.type(emailInput, 'test@test.com')
    expect(emailInput.value).toBe('test@test.com')
    await user.type(pwdInput, '123')
    expect(pwdInput.value).toBe('123')
});
