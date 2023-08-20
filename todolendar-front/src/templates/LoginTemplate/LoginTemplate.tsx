import { FC, ReactNode } from 'react';

import './LoginTemplate.scss';

export interface LoginTemplateProps {
  children: ReactNode;
}

const LoginTemplate: FC<LoginTemplateProps> = ({ children }) => {
  return <div className="login-form-wrapper">{children}</div>;
};

export default LoginTemplate;
