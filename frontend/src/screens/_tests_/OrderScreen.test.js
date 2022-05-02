import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import OrderScreen from '../OrderScreen'
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const newStore1 = mockStore({
    userLogin: {
        userInfo: true
    },
    orderDetails: {
        order:
        {
            user: {},
            orderItems: [
                {
                    product: 'id',
                    name: 'test name',
                    qty: 1,
                    cover: 'test.jpg',
                    price: 99.9,
                }
            ],
            isPaid: false,
            createdAt: '2022-04-13T01:41:04.383+00:00'
        }
        ,
        loading: false,
        error: false
    },
    orderPay: {
        success: false,
        loading: false
    }
})
const newStore2 = mockStore({
    userLogin: {
        userInfo: true
    },
    orderDetails: {
        order:
        {
            user: {},
            orderItems: [
                {
                    product: 'id',
                    name: 'test name',
                    qty: 1,
                    cover: 'test.jpg',
                    price: 99.9,
                }
            ],
            isPaid: true,
            paidAt: '2022-04-13T01:41:04.383+00:00',
            createdAt: '2022-04-13T01:41:04.383+00:00'
        }
        ,
        loading: false,
        error: false
    },
    orderPay: {
        success: true,
        loading: false
    },
})

test('renderding correct msg when the order is not paid', () => {
    render(<MemoryRouter>
        <Provider store={newStore1} >
            <OrderScreen />
        </Provider>
    </MemoryRouter>)

    const msgElement = screen.getByRole('alert')
    expect(msgElement.textContent).toContain('Your order is unpaid. Pay now and get your Redeem Code!')
});

test('renderding correct msg when the order is paid', () => {
    render(<MemoryRouter>
        <Provider store={newStore2} >
            <OrderScreen />
        </Provider>
    </MemoryRouter>)
    const msgElement = screen.getByRole('alert')
    expect(msgElement.textContent).toContain('Your order is paid on April 12th 2022. Redeem Code has been sent!')
});