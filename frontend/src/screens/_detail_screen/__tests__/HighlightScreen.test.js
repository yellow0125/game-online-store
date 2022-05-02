import { render, screen } from '@testing-library/react'
import HighlightScreen from '../HighlightScreen'

const mockHighlight = 'fake highlight'

test('highlight is rendering correctly', () => {
    render(<HighlightScreen highlights={mockHighlight} />)

    const textElement = screen.getByText(/fake highlight/i)
    expect(textElement).toBeInTheDocument()
});