import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Product from '../Product'

const mockProduct = {
    cover: 'test.jpg',
    name: 'test name',
    rating: 4.3,
    numReviews: 33,
    price: 98.99
}

test('product card is redering correct content', () => {
    render(
        <MemoryRouter>
            <Product product={mockProduct} />
        </MemoryRouter>
    )

    const imgElement = screen.getByRole('img', {
        name: /test name/i
    })
    expect(imgElement).toBeInTheDocument()
    expect(imgElement.src).toBe('http://localhost/test.jpg')

    const nameElement = screen.getByText(/test name/i)
    expect(nameElement).toBeInTheDocument()

    const priceElement = screen.getByRole('heading', {
        name: /\$98\.99/i
    })
    expect(priceElement).toBeInTheDocument()
});