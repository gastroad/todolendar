import { FC } from 'react';
import ArrowButton from '@atoms/ArrowButton';
import Button from '@atoms/Button';

import './CalendarHeader.scss';

export interface CalendarHeaderProps {
  formattedDate: string;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleThisMonth: () => void;
}

const CalendarHeader: FC<CalendarHeaderProps> = ({
  formattedDate,
  handlePrevMonth,
  handleNextMonth,
  handleThisMonth,
}) => {
  return (
    <div className="calendar-header" data-testid="calendar-header">
      <Button onClick={handleThisMonth} label="today" type="primary" />
      <ArrowButton
        onClick={handlePrevMonth}
        direction="left"
        name="prev-button"
      />
      <ArrowButton
        onClick={handleNextMonth}
        direction="right"
        name="next-button"
      />
      <h2>{formattedDate}</h2>
    </div>
  );
};

export default CalendarHeader;
