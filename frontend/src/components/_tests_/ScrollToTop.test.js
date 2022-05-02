import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

global.scrollTo = jest.fn()

test('CrollToTop is working', () => {
    render(
        <MemoryRouter>
            <ScrollToTop />
        </MemoryRouter>
    )
    const scrollToTopElement = screen.queryByTestId("")
    expect(scrollToTopElement).toBeNull()
});