import { FC } from 'react';
import { DateTime } from 'luxon';
import cx from 'classnames';

export interface CalendarCellProps {
  dayOfMonth: number;
  isCurrentDate: boolean;
  handleDateSelect: (date: DateTime) => void;
  date: DateTime;
}

const CalendarCell: FC<CalendarCellProps> = ({
  dayOfMonth,
  isCurrentDate,
  handleDateSelect,
  date,
}) => {
  return (
    <div
      key={`day-${dayOfMonth}`}
      className={cx('calendar-cell', { 'current-date': isCurrentDate })}
      onClick={() => handleDateSelect(date)}
    >
      <span>{dayOfMonth}</span>
    </div>
  );
};

export default CalendarCell;
