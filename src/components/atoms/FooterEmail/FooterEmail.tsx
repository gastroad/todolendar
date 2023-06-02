import { FC } from 'react';

export interface Props {
  email: string;
}

const FooterEmail: FC<Props> = ({ email }) => {
  return (
    <div className="footer-email">
      <span>Email:</span>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};

export default FooterEmail;
