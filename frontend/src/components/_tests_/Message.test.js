import { render, screen } from '@testing-library/react'
import Message from '../Message'

test('message is redering correct content', () => {
    render(<Message children='this is a test message' />)
    const msgElement = screen.getByRole('alert')
    expect(msgElement.textContent).toBe('this is a test message')
});