import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import LoginTemplate from '@templates/LoginTemplate';
import LoginForm from '@src/components/organisms/LoginForm';
import useInput from '@src/hooks/useInput/useInput';
import { httpPostLogin } from '@src/api/auth';

export interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const id = useInput();
  const pw = useInput();
  const navigate = useNavigate();

  const postLoginMutation = useMutation(httpPostLogin, {
    onSuccess: () => {
      navigate('/dashbaord');
    },
    onError: () => {
      alert('id 또는 pw 를 확인해 주십시오');
    },
  });

  const login = () => {
    postLoginMutation.mutate({ username: id.value, password: pw.value });
  };

  return (
    <>
      <LoginTemplate>
        <LoginForm login={login} id={id} pw={pw} />
      </LoginTemplate>
    </>
  );
};

export default LoginPage;
