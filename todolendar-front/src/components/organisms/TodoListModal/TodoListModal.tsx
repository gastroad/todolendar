import { FC } from 'react';
import { DateTime } from 'luxon';

import TodoList from '@organisms/TodoList';
import { Todo } from '@src/types/todoList';
import closeURL from '../../../assets/images/close.png';
import './TodoListModal.scss';

export interface TodoListModalProps {
  currentDate: DateTime;
  todos?: Todo[];
  openModal: () => void;
  closeModal: () => void;
}

const TodoListModal: FC<TodoListModalProps> = ({
  currentDate,
  todos,
  openModal,
  closeModal,
}) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <img
          alt="modal-close"
          src={closeURL}
          className="modal-close"
          onClick={closeModal}
        />
        <TodoList currentDate={currentDate} initialTodos={todos} />
      </div>
    </div>
  );
};
export default TodoListModal;
