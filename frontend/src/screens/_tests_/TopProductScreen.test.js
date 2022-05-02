import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import TopProductScreen from '../TopProductScreen'
import store from "../../store"
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const newStore = mockStore({
    productTopRated: {
        lodading: false,
        products: [
            {
                _id: 1,
                cover: 'test1.jpg',
                name: 'test name1',
                tag: 'test tag1',
                category: 'test category1',
                releasedate: 'test release date1',
                developer: 'test developer1',
                publisher: 'test publisher1',
                description: 'test description1'
            },
            {
                _id: 2,
                cover: 'test2.jpg',
                name: 'test name2',
                tag: 'test tag2',
                category: 'test category2',
                releasedate: 'test release date2',
                developer: 'test developer2',
                publisher: 'test publisher2',
                description: 'test description2'
            },
            {
                _id: 3,
                cover: 'test3.jpg',
                name: 'test name3',
                tag: 'test tag3',
                category: 'test category3',
                releasedate: 'test release date3',
                developer: 'test developer3',
                publisher: 'test publisher3',
                description: 'test description3'
            },
        ]
    }
})

test('back to home button rendering correctly', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <TopProductScreen />
            </Provider>
        </MemoryRouter>
    )
    const btnElement = screen.getByRole('link', { name: /back to home/i })
    expect(btnElement).toBeInTheDocument()
});

test('rendering top three products', () => {
    render(
        <MemoryRouter>
            <Provider store={newStore}>
                <TopProductScreen />
            </Provider>
        </MemoryRouter>
    )
    const imgElements = screen.getAllByRole('img')
    expect(imgElements.length).toBe(3)
    const titleElements = screen.getAllByRole('heading')
    expect(titleElements.length).toBe(3)
});

test('rendering correct info of top three products', () => {
    render(
        <MemoryRouter>
            <Provider store={newStore}>
                <TopProductScreen />
            </Provider>
        </MemoryRouter>
    )
    const titleElements = screen.getAllByRole('heading')
    expect(titleElements[0].textContent).toBe('test name1')
    expect(titleElements[1].textContent).toBe('test name2')
    expect(titleElements[2].textContent).toBe('test name3')
});