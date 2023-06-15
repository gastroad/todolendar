import { FC } from 'react';
import ArrowButton from '@atoms/ArrowButton';
import Button from '@atoms/Button';

import './CalendarHeader.scss';

interface CalendarHeaderProps {
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleThisMonth: () => void;
  formattedDate: string;
}

const CalendarHeader: FC<CalendarHeaderProps> = ({
  handlePrevMonth,
  handleNextMonth,
  handleThisMonth,
  formattedDate,
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
