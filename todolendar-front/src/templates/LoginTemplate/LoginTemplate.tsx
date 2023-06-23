import { FC } from 'react';

import './LoginTemplate.scss';
import LoginForm from '@organisms/LoginForm';

export interface LoginTemplateProps {}
const LoginTemplate: FC<LoginTemplateProps> = () => {
  return (
    <div className="login-form-wrapper">
      <LoginForm />
    </div>
  );
};

export default LoginTemplate;
