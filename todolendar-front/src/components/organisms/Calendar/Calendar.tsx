import { useState, FC, useEffect, useRef } from 'react';
import { DateTime } from 'luxon';

import CalendarHeader from '@molecules/CalendarHeader';
import CalendarBody from '@molecules/CalendarBody';
import { Todo } from '@src/types/todoList';

import './Calendar.scss';

export interface CalendarProps {
  onDateSelect: (date: DateTime) => void;
  todos?: Todo[];
  height?: string;
  currentDate: DateTime;
  handleCurrentDate: (date: DateTime) => void;
}

const Calendar: FC<CalendarProps> = ({
  onDateSelect,
  todos = [],
  currentDate,
  handleCurrentDate,
}) => {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      const calendarWidth = calendarRef.current!.offsetWidth;
      const calculatedHeight =
        calendarWidth < 768 ? (calendarWidth / 3) * 4 : (calendarWidth / 4) * 3;
      setHeight(calculatedHeight);
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);
  const handlePrevMonth = () => {
    handleCurrentDate(currentDate.minus({ month: 1 }));
  };
  const handleNextMonth = () => {
    handleCurrentDate(currentDate.plus({ month: 1 }));
  };
  const handleThisMonth = () => {
    handleCurrentDate(DateTime.now());
  };
  const handleDateSelect = (date: DateTime) => {
    onDateSelect(date);
  };

  return (
    <div className="calendar" ref={calendarRef} style={{ height: height }}>
      <CalendarHeader
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
        handleThisMonth={handleThisMonth}
        formattedDate={currentDate.toFormat('yyyy-MM')}
      />
      <CalendarBody
        height={`${height}px`}
        currentDate={currentDate}
        handleDateSelect={handleDateSelect}
        todos={todos}
      />
    </div>
  );
};

export default Calendar;
