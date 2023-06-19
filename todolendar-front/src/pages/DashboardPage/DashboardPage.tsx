import { FC } from 'react';
import DashboardTemplate from '@templates/DashboardTemplate';

export interface DashboardPageProps {}
const DashboardPage: FC<DashboardPageProps> = () => {
  return (
    <>
      <DashboardTemplate />
    </>
  );
};

export default DashboardPage;
