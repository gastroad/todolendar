import { FC } from 'react';

import LogoURL from '../../../assets/images/logo.png';
import "./Logo.scss"

const Logo: FC = () => {
  return <img id='logo' src={LogoURL} />;
};

export default Logo;
