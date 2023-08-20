import { FC } from 'react';
import { Outlet } from 'react-router';

import Header from '@organisms/Header';
import Footer from '@organisms/Footer';

import './AuthLayoutTemplate.scss';

const AuthLayoutTemplate: FC = () => {
  return (
    <>
      <Header />
      <section className="section">
        <Outlet />
      </section>
      <Footer email="coldpotatosweet@gmail.com" adminName="진현성" />
    </>
  );
};

export default AuthLayoutTemplate;
