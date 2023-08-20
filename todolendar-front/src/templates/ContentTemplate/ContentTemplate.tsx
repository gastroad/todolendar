import { FC, ReactNode } from 'react';

import SectionTitle from '@atoms/SectionTitle';

import './ContentTemplate.scss';

export interface DashboardTemplateProps {
  title: string;
  children: ReactNode;
}
const ContentTemplate: FC<DashboardTemplateProps> = ({ title, children }) => {
  return (
    <>
      <SectionTitle title={title} />
      <div className="content-wrapper">{children}</div>
    </>
  );
};

export default ContentTemplate;
