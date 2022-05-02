import { render, waitFor } from '@testing-library/react'
import Meta from '../Meta'

test('meta is redering correct content with props', async () => {

    render(<
        Meta
        title='test title'
        description='test description'
        keywords='test keywords'
    />)

    await waitFor(() => expect(document.title).toBe('test title'))

    await waitFor(() => expect(document.querySelector("meta[name='description']").content).toBe("test description"))

    await waitFor(() => expect(document.querySelector("meta[name='keywords']").content).toBe("test keywords"))

});

test('meta is redering correct content without props', async () => {
    render(<Meta />)

    await waitFor(() => expect(document.title).toBe('Welcome to FridayNight'))

    await waitFor(() => expect(document.querySelector("meta[name='description']").content).toBe("It's Friday Night"))

    await waitFor(() => expect(document.querySelector("meta[name='keywords']").content).toBe("Just for Fun"))
});