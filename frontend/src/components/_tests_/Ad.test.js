import { render, screen } from '@testing-library/react';
import Ad from '../Ad';

test('Ad images', () => {
  render(<Ad/>);
  const img = screen.getAllByRole("img");
  expect(img.length).toBe(3);
});