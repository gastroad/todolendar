import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';
import { DateTime } from 'luxon';

describe('TodoList', () => {
  const currentDate = DateTime.local();
  const todos = [
    {
      id: '1',
      text: 'Todo 1',
      completed: false,
      date: DateTime.now().toFormat('yyyy MM/dd'),
    },
    {
      id: '2',
      text: 'Todo 2',
      completed: true,
      date: DateTime.now().toFormat('yyyy MM/dd'),
    },
  ];
  const addTodoMock = jest.fn();
  const toggleTodoMock = jest.fn();
  const deleteTodoMock = jest.fn();

  test('renders TodoList with initial todos', () => {
    const { getByText } = render(
      <TodoList
        currentDate={currentDate}
        initialTodos={todos}
        addTodo={addTodoMock}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />,
    );

    expect(getByText('Todo 1')).toBeInTheDocument();
    expect(getByText('Todo 2')).toBeInTheDocument();
  });

  test('calls addTodo when TodoForm adds a new todo', () => {
    const { getByText, getByPlaceholderText } = render(
      <TodoList
        currentDate={currentDate}
        addTodo={addTodoMock}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />,
    );

    const input = getByPlaceholderText('일정을 작성해 주세요.');
    const button = getByText('일정 추가');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(addTodoMock).toHaveBeenCalledWith('New Todo');
  });

  test('calls toggleTodo when TodoItem is toggled', () => {
    const { getByText } = render(
      <TodoList
        currentDate={currentDate}
        initialTodos={todos}
        addTodo={addTodoMock}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />,
    );

    const todoItem = getByText('Todo 1');
    fireEvent.click(todoItem);

    expect(toggleTodoMock).toHaveBeenCalledWith('1');
  });

  test('calls deleteTodo when TodoItem is deleted', () => {
    const { getAllByText } = render(
      <TodoList
        currentDate={currentDate}
        initialTodos={todos}
        addTodo={addTodoMock}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />,
    );
    const deleteButton = getAllByText('Delete');
    fireEvent.click(deleteButton[1]);

    expect(deleteTodoMock).toHaveBeenCalledWith('2');
  });
});
