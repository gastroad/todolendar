import { FC } from 'react';
import { DateTime } from 'luxon';
import cx from 'classnames';

import './CalendarCell.scss';

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
  const isToday = date.startOf('day').equals(DateTime.now().startOf('day'));
  return (
    <div
      key={`day-${dayOfMonth}`}
      className={cx(
        'calendar-cell',
        { 'current-date': isCurrentDate },
        { today: isToday },
      )}
      onClick={() => handleDateSelect(date)}
    >
      <span>{dayOfMonth}</span>
    </div>
  );
};

export default CalendarCell;