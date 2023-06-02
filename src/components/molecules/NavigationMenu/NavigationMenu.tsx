import { FC } from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.scss';

export const NavigationMenuList: { link: string; label: string }[] = [
  { link: 'dashbaord', label: 'DashBaord' },
  { link: 'todolendar', label: 'TodoLendar' },
];

const NavigationMenu: FC = () => {
  return (
    <nav id="nav" data-testid="nav">
      <ul>
        {NavigationMenuList.map(({ link, label }) => {
          return (
            <li key={link}>
              <Link to={link}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavigationMenu;
