import { render, screen } from '@testing-library/react'
import CommentScreen from '../CommentScreen'

const mockComment = 'fake comment'

test('comment is rendering correctly', () => {
    render(<CommentScreen description={mockComment} />)

    const titleElement = screen.getByText(/comments/i)
    expect(titleElement).toBeInTheDocument()

    const textElement = screen.getByText(/fake comment/i)
    expect(textElement).toBeInTheDocument()
});