import { FC } from 'react';

import TextInput from '@atoms/TextInput';
import Button from '@atoms/Button';
import Logo from '@atoms/Logo';
import { UseInputResult } from '@src/hooks/useInput/useInput';

import './LoginForm.scss';

export interface LoginFormProps {
  login: () => void;
  id: UseInputResult;
  pw: UseInputResult;
}

const LoginForm: FC<LoginFormProps> = ({ login, id, pw }) => {
  return (
    <form
      className="login-from"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="id-wrapper">
        <TextInput
          type="text"
          value={id.value}
          placeholder="아이디"
          onChange={id.onChange}
        />
      </div>
      <div className="password-wrapper">
        <TextInput
          type="password"
          value={pw.value}
          placeholder="비밀번호"
          onChange={pw.onChange}
        />
      </div>
      <div className="button-wrapper">
        <Button onClick={login} label="로그인" type="primary" />
      </div>
    </form>
  );
};
export default LoginForm;
