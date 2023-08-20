import { FC, useMemo } from 'react';

import { TodoItemType } from '@src/types/todoList';

import './CalendarCellItem.scss';

export interface CalendarCellItemProps {
  todo: TodoItemType;
}

const mapper = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

const CalendarCellItem: FC<CalendarCellItemProps> = ({ todo }) => {
  const className = useMemo(
    () =>
      `calendar-cell-item ${
        todo.completed
          ? 'completed'
          : mapper[Math.floor(Math.random() * mapper.length)]
      }`,
    [todo],
  );
  return (
    <li key={todo.id} className={className}>
      {todo.text}
    </li>
  );
};

export default CalendarCellItem;
