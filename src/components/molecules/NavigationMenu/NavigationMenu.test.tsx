import { render, screen } from '@testing-library/react';
import NavigationMenu from './NavigationMenu';

test('renders NavigationMenu image', () => {
    render(<NavigationMenu />);
    const navigationMenu = screen.getByRole('img');
    expect(navigationMenu).toBeInTheDocument();
});
