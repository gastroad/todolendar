import { FC } from 'react';

import { Todo } from '@src/types/todoList';

import './TodoItem.scss';

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};
export default TodoItem;
