import { FC } from 'react';
import { Link } from 'react-router-dom';
import './NavigationMenu.scss';
import { useLocation } from 'react-router-dom';

export const NavigationMenuList: { link: string; label: string }[] = [
  { link: 'dashbaord', label: 'DashBaord' },
  { link: 'planner', label: 'Planner' },
];


const NavigationMenu: FC = () => {
  const location = useLocation();

  return (
    <nav id="nav" data-testid="nav">
      <ul>
        {NavigationMenuList.map(({ link, label }) => {
          return (
            <li key={link}>
              <Link
                className={`${
                  Boolean(location.pathname.includes(link)) && 'active'
                }`}
                to={link}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavigationMenu;
