import { FC } from 'react';
import { DateTime } from 'luxon';

import CalendarHeader from '@molecules/CalendarHeader';
import CalendarBody from '@molecules/CalendarBody';
import { useResponsiveHeight } from '@src/hooks/useResponsiveHeight/useResponsiveHeight';
import { TodoItemType } from '@src/types/todoList';

import './Calendar.scss';

export interface CalendarProps {
  todos: TodoItemType[];
  height?: string;
  currentDate: DateTime;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleThisMonth: () => void;
  handleDateSelect: (date: DateTime) => void;
}

const Calendar: FC<CalendarProps> = ({
  todos = [],
  currentDate,
  handlePrevMonth,
  handleNextMonth,
  handleThisMonth,
  handleDateSelect,
}) => {
  const { elementRef, height } = useResponsiveHeight(1024, 3, 4);

  return (
    <div className="calendar" ref={elementRef} style={{ height: height }}>
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
