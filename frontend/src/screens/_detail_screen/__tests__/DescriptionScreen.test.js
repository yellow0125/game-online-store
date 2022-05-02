import { render, screen } from '@testing-library/react'
import DescriptionScreen from '../DescriptionScreen'

const mockDescription = 'popular game'

test('description is rendering correctly', () => {
    render(<DescriptionScreen description={mockDescription} />)

    const titleElement = screen.getByText(/description/i)
    expect(titleElement).toBeInTheDocument()

    const textElement = screen.getByText(/popular game/i)
    expect(textElement).toBeInTheDocument()
});