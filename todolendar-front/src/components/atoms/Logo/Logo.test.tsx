import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('render Logo', () => {
    const { getByRole } = render(<Logo />);
    const logoImage = getByRole('img');
    expect(logoImage).toBeInTheDocument();
  });
});
