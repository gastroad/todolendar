import { FC } from 'react';
import './FooterAdmin.scss';

export interface Props {
  adminName: string;
}

const FooterAdmin: FC<Props> = ({ adminName }) => {
  return (
    <div className="footer-admin">
      <span>Site Administrator:</span>
      <span>{adminName}</span>
    </div>
  );
};

export default FooterAdmin;
