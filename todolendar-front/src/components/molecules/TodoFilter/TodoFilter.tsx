import { FC } from 'react';
import Button from '@atoms/Button';

import type { TodoFilterOption } from '@src/types/todoList';

export interface TodoFilterProps {
  filterTodos: (filterOption: TodoFilterOption) => void;
  filter: TodoFilterOption;
}

const TodoFilter: FC<TodoFilterProps> = ({ filterTodos, filter }) => {
  return (
    <div className="todo-filter">
      <Button
        onClick={() => filterTodos('ALL')}
        label="All"
        type="tertiary"
        active={filter == 'ALL'}
      />
      <Button
        onClick={() => filterTodos('COMPLETED')}
        label="Completed"
        type="tertiary"
        active={filter == 'COMPLETED'}
      />
      <Button
        onClick={() => filterTodos('INPROGRESS')}
        label="In Progress"
        type="tertiary"
        active={filter == 'INPROGRESS'}
      />
    </div>
  );
};

export default TodoFilter;
