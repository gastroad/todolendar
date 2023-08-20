import { FC } from 'react';

import Button from '@atoms/Button';
import type { TodoFilterOptionType } from '@src/types/todoList';

export interface TodoFilterProps {
  filter: TodoFilterOptionType;
  handleFilterOptions: (filterOption: TodoFilterOptionType) => void;
}

const TodoFilter: FC<TodoFilterProps> = ({ filter, handleFilterOptions }) => {
  return (
    <div className="todo-filter">
      <Button
        onClick={() => handleFilterOptions('ALL')}
        label="All"
        type="tertiary"
        active={filter == 'ALL'}
      />
      <Button
        onClick={() => handleFilterOptions('COMPLETED')}
        label="Completed"
        type="tertiary"
        active={filter == 'COMPLETED'}
      />
      <Button
        onClick={() => handleFilterOptions('INPROGRESS')}
        label="In Progress"
        type="tertiary"
        active={filter == 'INPROGRESS'}
      />
    </div>
  );
};

export default TodoFilter;
