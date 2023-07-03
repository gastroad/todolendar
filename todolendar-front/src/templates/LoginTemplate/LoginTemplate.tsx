import { FC } from 'react';

import LoginForm from '@organisms/LoginForm';
import type { UseInputResult } from '@src/hooks/useInput/useInput';

import './LoginTemplate.scss';

export interface LoginTemplateProps {
  login: () => void;
  id: UseInputResult;
  pw: UseInputResult;
}

const LoginTemplate: FC<LoginTemplateProps> = ({ login, id, pw }) => {
  return (
    <div className="login-form-wrapper">
      <LoginForm login={login} id={id} pw={pw} />
    </div>
  );
};

export default LoginTemplate;
