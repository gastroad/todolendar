import { ChangeEvent, FC, useMemo } from 'react';
import { DateTime } from 'luxon';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import TodoForm from '@molecules/TodoForm';
import TodoFilter from '@molecules/TodoFilter';
import TodoItem from '@molecules/TodoItem';
import type { Todo, TodoFilterOption } from '@src/types/todoList';

import './TodoList.scss';

export interface TodoListProps {
  currentDate: DateTime;
  todos: Todo[] | [];
  filter: TodoFilterOption;
  inputText: string;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  handleFilterOptions: (filter: TodoFilterOption) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
}
const TodoList: FC<TodoListProps> = ({
  currentDate,
  todos,
  filter,
  inputText,
  toggleTodo,
  deleteTodo,
  handleFilterOptions,
  handleInputChange,
  handleButtonClick,
}) => {
  const [parent] = useAutoAnimate();
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed);
      case 'INPROGRESS':
        return todos.filter((todo) => !todo.completed);
      case 'ALL':
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <div className="todolist">
      <h2>{currentDate.toFormat('yyyy MM/dd')}</h2>
      <TodoFilter filter={filter} handleFilterOptions={handleFilterOptions} />
      <ul className="todolist-list" ref={parent}>
        {Boolean(filteredTodos.length === 0) && (
          <li style={{ textAlign: 'center' }}>
            <span>오늘의 일정을 추가해주세요</span>
          </li>
        )}
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <TodoForm
        inputText={inputText}
        handleInputChange={handleInputChange}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default TodoList;
