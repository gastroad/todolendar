import { FC } from 'react';
import './FooterAdmin.scss';

export interface FooterAdminProps {
  adminName: string;
}

const FooterAdmin: FC<FooterAdminProps> = ({ adminName }) => {
  return (
    <div className="footer-admin">
      <span>Site Administrator:</span>
      <span>{adminName}</span>
    </div>
  );
};

export default FooterAdmin;
