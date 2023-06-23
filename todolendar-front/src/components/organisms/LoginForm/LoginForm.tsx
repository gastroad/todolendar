import { FC } from 'react';
import TextInput from '@atoms/TextInput';
import Button from '@atoms/Button';
import Logo from '@atoms/Logo';
import useInput from '@src/hooks/useInput/useInput';
import { useMutation } from '@tanstack/react-query';
import { httpPostLogin } from '@src/api/auth';
import { useNavigate } from 'react-router-dom';

import './LoginForm.scss';

export interface LoginFormProps {}
const LoginForm: FC<LoginFormProps> = () => {
  const id = useInput();
  const pw = useInput();
  const navigate = useNavigate();

  const postLoginMutation = useMutation(httpPostLogin, {
    onSuccess: (data) => {
      navigate('/dashbaord');
    },
    onError: (error) => {
      alert('id 또는 pw 를 확인해 주십시오');
    },
  });

  const login = () => {
    postLoginMutation.mutate({ username: id.value, password: pw.value });
  };

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
