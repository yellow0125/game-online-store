import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Subtitle from '../Subtitle'

test('subtitle is redering correct content', () => {
    render(
        <MemoryRouter>
            <Subtitle text="subtitle rendering" />
        </MemoryRouter>
    )
    const subtitleElement = screen.getByText(/subtitle rendering/i)
    expect(subtitleElement).toBeInTheDocument()
});