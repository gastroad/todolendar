import { FC } from 'react';
import { DateTime } from 'luxon';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import TodoList from '@organisms/TodoList';
import { Todo } from '@src/types/todoList';
import closeURL from '../../../assets/images/close.png';
import './TodoListModal.scss';
import { httpPostTodos, httpPutTodo, httpDeleteTodo } from '@src/api/planner';

export interface TodoListModalProps {
  currentDate: DateTime;
  todos?: Todo[];
  openModal: () => void;
  closeModal: () => void;
}

const TodoListModal: FC<TodoListModalProps> = ({
  currentDate,
  todos,
  closeModal,
}) => {
  const queryClient = useQueryClient();
  const postTodosMutation = useMutation(httpPostTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todoList'] });
    },
  });
  const putTodoMutation = useMutation(httpPutTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todoList'] });
    },
  });
  const deleteTodoMutation = useMutation(httpDeleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todoList'] });
    },
  });

  const addTodo = (text: string) => {
    postTodosMutation.mutate({
      text: text,
      completed: false,
      date: currentDate.toFormat('yyyy MM/dd'),
    });
  };
  const toggleTodo = (id: string) => {
    const todo = todos!.find((todo) => todo.id === id) as Todo;
    putTodoMutation.mutate({
      ...todo,
      completed: !todo.completed,
    });
  };
  const deleteTodo = (id: string) => {
    deleteTodoMutation.mutate({ id });
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <img
          alt="modal-close"
          src={closeURL}
          className="modal-close"
          onClick={closeModal}
        />
        <TodoList
          currentDate={currentDate}
          initialTodos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};
export default TodoListModal;
