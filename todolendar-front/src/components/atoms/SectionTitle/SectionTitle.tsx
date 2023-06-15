import { FC } from 'react';

import './SectionTitle.scss';

export interface SectionTitleProps {
  title: string;
}
const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="section-title">{title}</h2>;
};

export default SectionTitle;
