import { render, screen } from '@testing-library/react'
import Rating from '../Rating'

test('rating component is working well', () => {
    render(<Rating value={3.7} text="100 reviews" />)

    const starElement = screen.getByTestId('forth-star')
    expect(starElement.className).toBe('fas fa-star-half-alt')

    const textElement = screen.getByText(/100 reviews/i)
    expect(textElement).toBeInTheDocument()
});