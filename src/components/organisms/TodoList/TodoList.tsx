import { useState, FC, useMemo } from 'react';
import { DateTime } from 'luxon';

import TodoForm from '@molecules/TodoForm';
import TodoFilter from '@molecules/TodoFilter';
import TodoItem from '@molecules/TodoItem';

import type { Todo, TodoFilterOption } from '@src/types/todoList';

import './TodoList.scss';

export interface TodoListProps {
  currentDate: DateTime;
  initialTodos?: Todo[];
}

const TodoList: FC<TodoListProps> = ({ currentDate, initialTodos = [] }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState<TodoFilterOption>('ALL');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filterTodos = (filter: TodoFilterOption) => {
    setFilter(filter);
  };

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
      <TodoFilter filter={filter} filterTodos={filterTodos} />
      <ul className="todolist-list">
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
        setInputText={setInputText}
        addTodo={addTodo}
      />
    </div>
  );
};

export default TodoList;
