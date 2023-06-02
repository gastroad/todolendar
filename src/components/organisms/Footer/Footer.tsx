import { FC } from 'react';

import FooterEmail from '@atoms/FooterEmail';
import FooterAdmin from '@atoms/FooterAdmin';

import './Footer.scss';

interface Props {
  email: string;
  adminName: string;
}

const Footer: FC<Props> = ({ email, adminName }) => {
  return (
    <footer id="footer" data-testid="footer">
      <FooterEmail email={email} />
      <FooterAdmin adminName={adminName} />
    </footer>
  );
};

export default Footer;
