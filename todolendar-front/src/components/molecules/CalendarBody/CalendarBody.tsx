import { FC } from 'react';
import { DateTime } from 'luxon';

import CalendarCell from '@atoms/CalendarCell';
import EmptyCalendarCell from '@atoms/EmptyCalendarCell';

import './CalendarBody.scss';

export interface CalendarBodyProps {
  currentDate: DateTime;
  handleDateSelect: (date: DateTime) => void;
}

const CalendarBody: FC<CalendarBodyProps> = ({
  currentDate,
  handleDateSelect,
}) => {
  const month = currentDate.month;
  const year = currentDate.year;
  const firstDayOfMonth = DateTime.local(year, month, 1).weekday;
  const daysInMonth = currentDate.daysInMonth!;

  return (
    <div className="calendar-body" data-testid="calendar-body">
      {Array.from({ length: firstDayOfMonth }).map((_, index) => {
        return <EmptyCalendarCell key={`empty-${index}`} />;
      })}
      {Array.from({ length: daysInMonth }).map((_, index) => {
        const dayOfMonth = index + 1;
        const date = DateTime.local(year, month, dayOfMonth);
        const isCurrentDate = date.hasSame(currentDate, 'day');
        return (
          <CalendarCell
            dayOfMonth={dayOfMonth}
            isCurrentDate={isCurrentDate}
            handleDateSelect={handleDateSelect}
            date={date}
            key={`day-${dayOfMonth}`}
          />
        );
      })}
    </div>
  );
};

export default CalendarBody;
