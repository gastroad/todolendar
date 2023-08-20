import { FC, ReactNode } from 'react';

import './LoginTemplate.scss';

export interface LoginTemplateProps {
  children: ReactNode;
}

const LoginTemplate: FC<LoginTemplateProps> = ({ children }) => {
  return <main className="login-form-wrapper">{children}</main>;
};

export default LoginTemplate;
