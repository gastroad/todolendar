import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationMenu, { NavigationMenuList } from './NavigationMenu';

describe('NavigationMenu', () => {
  it('renders navigation menu component', () => {
    render(
      <MemoryRouter>
        <NavigationMenu />
      </MemoryRouter>,
    );

    const navElement = screen.getByTestId('nav');
    expect(navElement).toBeInTheDocument();

    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(NavigationMenuList.length);
    linkElements.forEach((linkElement, index) => {
      const { link, label } = NavigationMenuList[index];
      expect(linkElement).toHaveAttribute('href', `/${link}`);
      expect(linkElement).toHaveTextContent(label);
    });
  });
});
