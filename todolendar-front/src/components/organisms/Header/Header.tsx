import { FC } from 'react';
import Logo from '@atoms/Logo';

import NavigationMenu from '@molecules/NavigationMenu';
import './Header.scss';

const Header: FC = () => {
  return (
    <header id="header" data-testid="header">
      <h1>
        <Logo />
      </h1>
      <NavigationMenu />
    </header>
  );
};
export default Header;
