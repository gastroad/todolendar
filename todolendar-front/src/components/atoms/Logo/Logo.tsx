import { FC } from 'react';

import LogoURL from '../../../assets/images/logo.png';
import './Logo.scss';

export interface LogoProps {}
const Logo: FC<LogoProps> = () => {
  return <img id="logo" src={LogoURL} alt="logo" />;
};

export default Logo;
