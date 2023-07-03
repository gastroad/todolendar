import { FC } from 'react';
import { DateTime } from 'luxon';

import { Todo } from '@src/types/todoList';
import CalendarCell from '@src/components/molecules/CalendarCell';
import EmptyCalendarCell from '@atoms/EmptyCalendarCell';

import './CalendarBody.scss';

export interface CalendarBodyProps {
  todos: Todo[] | [];
  currentDate: DateTime;
  height: string;
  handleDateSelect: (date: DateTime) => void;
}

const CalendarBody: FC<CalendarBodyProps> = ({
  currentDate,
  todos,
  height,
  handleDateSelect,
}) => {
  const month = currentDate.month;
  const year = currentDate.year;
  const firstDayOfMonth = DateTime.local(year, month, 1).weekday;
  const daysInMonth = currentDate.daysInMonth!;
  return (
    <div
      className="calendar-body"
      data-testid="calendar-body"
      style={{ height: `calc(${height} - 36px - 0.5rem)` }}
    >
      {Array.from({ length: firstDayOfMonth }).map((_, index) => {
        return <EmptyCalendarCell key={`empty-${index}`} />;
      })}
      {Array.from({ length: daysInMonth }).map((_, index) => {
        const dayOfMonth = index + 1;
        const date = DateTime.local(year, month, dayOfMonth);
        const isCurrentDate = date.hasSame(currentDate, 'day');
        const currentDateTodos = todos.filter(
          (todo) => todo.date === date.toFormat('yyyy MM/dd'),
        );
        return (
          <CalendarCell
            dayOfMonth={dayOfMonth}
            isCurrentDate={isCurrentDate}
            handleDateSelect={handleDateSelect}
            date={date}
            key={`day-${dayOfMonth}`}
            currentDateTodos={currentDateTodos}
          />
        );
      })}
    </div>
  );
};

export default CalendarBody;
