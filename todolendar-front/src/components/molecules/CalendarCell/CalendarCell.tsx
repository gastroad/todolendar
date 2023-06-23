import { FC } from 'react';
import { DateTime } from 'luxon';
import cx from 'classnames';

import './CalendarCell.scss';
import { Todo } from '@src/types/todoList';
import CalendarCellItem from '@atoms/CalendarCellItem';



export interface CalendarCellProps {
  dayOfMonth: number;
  isCurrentDate: boolean;
  handleDateSelect: (date: DateTime) => void;
  date: DateTime;
  currentDateTodos?: Todo[];
}

const CalendarCell: FC<CalendarCellProps> = ({
  dayOfMonth,
  isCurrentDate,
  handleDateSelect,
  date,
  currentDateTodos = [],
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
      <ul>
        {currentDateTodos.map((todo, index) => {
          return (
            <CalendarCellItem todo={todo} key={`${index}-${todo.id}`} />
          );
        })}
      </ul>
    </div>
  );
};

export default CalendarCell;
