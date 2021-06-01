//test Logo
import { render, screen } from '@testing-library/react';
import Logo from './logo';

describe('Logo', () => {
  test('Logo must have src = "adidas_logo.png" and class="size"', () => {
    render(<Logo/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'adidas_logo.png');
    expect(logo).toHaveAttribute('class', 'size');
  });
});