import { FC } from 'react';
import './EmptyCalendarCell.scss';

export interface EmptyCalendarCellProps {}
const EmptyCalendarCell: FC<EmptyCalendarCellProps> = () => {
  return <div className="empty-calenar-cell" />;
};

export default EmptyCalendarCell;
