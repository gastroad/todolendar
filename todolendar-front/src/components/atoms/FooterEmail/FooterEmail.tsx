import { FC } from 'react';

export interface FooterEmailProps {
  email: string;
}

const FooterEmail: FC<FooterEmailProps> = ({ email }) => {
  return (
    <div className="footer-email">
      <span>Email:</span>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};

export default FooterEmail;
