import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('Footer', () => {
  render(
      <Footer />
  );
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});