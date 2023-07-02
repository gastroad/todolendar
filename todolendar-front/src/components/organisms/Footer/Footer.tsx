import { FC } from 'react';

import FooterEmail from '@molecules/FooterEmail';
import FooterAdmin from '@molecules/FooterAdmin';

import './Footer.scss';

export interface FooterProps {
  email: string;
  adminName: string;
}

const Footer: FC<FooterProps> = ({ email, adminName }) => {
  return (
    <footer id="footer" data-testid="footer">
      <FooterEmail email={email} />
      <FooterAdmin adminName={adminName} />
    </footer>
  );
};

export default Footer;
