import { render, screen } from '@testing-library/react'
import ItemEditScreen from '../ItemEditScreen'

test('ItemEditScreen is redering correct content', () => {
    render(<ItemEditScreen />)
    const txtElement = screen.getByText(/sorry, the page will coming soon! itemeditscreen/i)
    expect(txtElement).toBeInTheDocument()
});