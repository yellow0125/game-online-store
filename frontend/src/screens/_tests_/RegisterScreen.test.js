import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import RegisterScreen from '../RegisterScreen'
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const newStore = mockStore({
    userRegister: {
        lodading: false,
        error: false,
        userInfo: false
    }
})

test('rendering correctly', () => {
    render(
        <MemoryRouter>
            <Provider store={newStore} >
                <RegisterScreen />
            </Provider>
        </MemoryRouter>
    )

    const titleElement = screen.getByRole('heading', { name: /create your account/i })
    expect(titleElement).toBeInTheDocument()
    const formElements = screen.getAllByRole('textbox')
    expect(formElements.length).toBe(2)
    const btnElement = screen.getByRole('button', { name: /get started/i })
    expect(btnElement).toBeInTheDocument()
    const msgElement = screen.getByText(/already have an account\?/i)
    expect(msgElement).toBeInTheDocument()
});

test('rendering correctly when user type', async () => {
    render(
        <MemoryRouter>
            <Provider store={newStore} >
                <RegisterScreen />
            </Provider>
        </MemoryRouter>
    )

    const usernameInput = screen.getByRole('textbox', { name: /username/i })
    expect(usernameInput).toBeInTheDocument()
    const emailInput = screen.getByRole('textbox', { name: /email address/i })
    expect(emailInput).toBeInTheDocument()

    const user = userEvent.setup()
    await user.type(usernameInput, 'test')
    expect(usernameInput.value).toBe('test')
    await user.type(emailInput, 'test@test.com')
    expect(emailInput.value).toBe('test@test.com')
});
