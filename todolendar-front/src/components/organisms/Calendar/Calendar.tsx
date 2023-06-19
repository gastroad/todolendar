import { useState, FC } from 'react';
import { DateTime } from 'luxon';

import CalendarHeader from '@molecules/CalendarHeader';
import CalendarBody from '@molecules/CalendarBody';

import './Calendar.scss';

export interface CalendarProps {
  onDateSelect: (date: DateTime) => void;
}

const Calendar: FC<CalendarProps> = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(DateTime.now());

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => prevDate.minus({ months: 1 }));
  };
  const handleNextMonth = () => {
    setCurrentDate((prevDate) => prevDate.plus({ months: 1 }));
  };
  const handleThisMonth = () => {
    setCurrentDate(DateTime.now());
  };
  const handleDateSelect = (date: DateTime) => {
    onDateSelect(date);
  };

  return (
    <div className="calendar">
      <CalendarHeader
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleThisMonth={handleThisMonth}
        formattedDate={currentDate.toFormat('yyyy-MM')}
      />
      <CalendarBody
        currentDate={currentDate}
        handleDateSelect={handleDateSelect}
      />
    </div>
  );
};

export default Calendar;
