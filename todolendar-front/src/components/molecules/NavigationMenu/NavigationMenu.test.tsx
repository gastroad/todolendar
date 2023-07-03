import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationMenu, { NavigationMenuList } from './NavigationMenu';

describe('NavigationMenu', () => {
  it('renders NavigationMenu', () => {
    const { getByTestId, getAllByRole } = render(
      <MemoryRouter>
        <NavigationMenu />
      </MemoryRouter>,
    );

    const navElement = getByTestId('nav');
    expect(navElement).toBeInTheDocument();

    const linkElements = getAllByRole('link');
    expect(linkElements.length).toBe(NavigationMenuList.length);

    linkElements.forEach((linkElement, index) => {
      const { link, label } = NavigationMenuList[index];
      expect(linkElement).toHaveAttribute('href', `/${link}`);
      expect(linkElement).toHaveTextContent(label);
    });
  });
});
