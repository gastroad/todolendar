import { FC } from 'react';
import LoginTemplate from '@templates/LoginTemplate';

export interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <>
      <LoginTemplate />
    </>
  );
};

export default LoginPage;
