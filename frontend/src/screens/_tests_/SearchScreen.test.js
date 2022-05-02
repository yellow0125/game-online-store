import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SearchScreen from '../SearchSreen'
import { Provider } from "react-redux"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        searchCriteria: 'fakeCriteria'
    }),
    useRouteMatch: () => ({ url: '/search/fakeCriteria' }),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const newStore = mockStore({
    productList: {
        lodading: false,
        error: false,
        products: []
    }
})

test('rendering correctly when no item found by the search criteria', () => {
    render(
        <MemoryRouter>
            <Provider store={newStore} >
                <SearchScreen />
            </Provider>
        </MemoryRouter>
    )

    const titleElement = screen.getByRole('heading', { name: /sorry! there is no match for "fakeCriteria"\./i })
    expect(titleElement).toBeInTheDocument()
    const btnElement = screen.getByRole('button', { name: /go to homepage/i })
    expect(btnElement).toBeInTheDocument()
    const imgElement = screen.getByRole('img', { name: /erroricon/i })
    expect(imgElement).toBeInTheDocument()
});
