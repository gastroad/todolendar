import { FC, useState } from 'react';
import { DateTime } from 'luxon';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { httpPostTodos, httpPutTodo, httpDeleteTodo } from '@src/api/planner';
import { TodoItemType } from '@src/types/todoList';
import type { TodoFilterOptionType } from '@src/types/todoList';
import TodoList from '@organisms/TodoList';
import useInput from '@src/hooks/useInput/useInput';
import closeURL from '../../../assets/images/close.png';

import './TodoListModal.scss';

export interface TodoListModalProps {
  currentDate: DateTime;
  todos: TodoItemType[] | [];
  openModal: () => void;
  closeModal: () => void;
}

const TodoListModal: FC<TodoListModalProps> = ({
  currentDate,
  todos,
  closeModal,
}) => {
  const [filter, setFilter] = useState<TodoFilterOptionType>('ALL');
  const todoInput = useInput();
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
    const todo = todos!.find((todo) => todo.id === id) as TodoItemType;
    putTodoMutation.mutate({
      ...todo,
      completed: !todo.completed,
    });
  };

  const deleteTodo = (id: string) => {
    deleteTodoMutation.mutate({ id });
  };

  const handleButtonClick = () => {
    addTodo(todoInput.value);
    todoInput.reset();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <img
          alt="modal-close"
          className="modal-close"
          src={closeURL}
          onClick={closeModal}
        />
        <TodoList
          currentDate={currentDate}
          todos={todos}
          filter={filter}
          inputText={todoInput.value}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          handleFilterOptions={setFilter}
          handleButtonClick={handleButtonClick}
          handleInputChange={todoInput.onChange}
        />
      </div>
    </div>
  );
};
export default TodoListModal;
