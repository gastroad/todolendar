import { render, screen, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';
import TodoList from './TodoList';

describe('TodoList', () => {
  const currentDate = DateTime.now();
  const initialTodos = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ];

  test('renders todo list ', () => {
    const { getByText } = render(<TodoList currentDate={currentDate} />);
    expect(getByText('오늘의 일정을 추가해주세요')).toBeInTheDocument();
  });
  test('renders todo list with initial state', () => {
    const { getByText } = render(
      <TodoList currentDate={currentDate} initialTodos={initialTodos} />,
    );

    expect(getByText('Task 1')).toBeInTheDocument();
    expect(getByText('Task 2')).toBeInTheDocument();
    expect(getByText(currentDate.toFormat('yyyy MM/dd'))).toBeInTheDocument();
  });
  test('adds a new todo', () => {
    const { getByPlaceholderText, getByRole } = render(
      <TodoList currentDate={currentDate} />,
    );

    const input = getByPlaceholderText('일정을 작성해 주세요.');
    const addButton = getByRole('button', { name: '일정 추가' });

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });

  test('toggles todo completion status', () => {
    const { getByText } = render(
      <TodoList currentDate={currentDate} initialTodos={initialTodos} />,
    );

    // todo toogle 해야하나?
    // 얘는 테스트코드 우에짜누..
    // const todolistItem = getByText('Task 1')
    // fireEvent.click(todolistItem);
  });

  test('deletes a todo', () => {
    const { queryByText, getByText, getAllByRole } = render(
      <TodoList currentDate={currentDate} initialTodos={initialTodos} />,
    );

    const deleteButton = getAllByRole('button', { name: 'Delete' })[0];
    fireEvent.click(deleteButton);

    expect(queryByText('Task 1')).toBeNull();
    expect(getByText('Task 2')).toBeInTheDocument();
  });

  test('filters todos based on filter option', () => {
    const { getByText, queryByText, getByRole } = render(
      <TodoList currentDate={currentDate} initialTodos={initialTodos} />,
    );

    const allButton = getByRole('button', { name: /all/i });
    const completedButton = getByRole('button', { name: /completed/i });
    const inProgressButton = getByRole('button', { name: /in progress/i });

    fireEvent.click(completedButton);
    expect(queryByText('Task 1')).toBeNull();
    expect(getByText('Task 2')).toBeInTheDocument();

    fireEvent.click(inProgressButton);
    expect(getByText('Task 1')).toBeInTheDocument();
    expect(queryByText('Task 2')).toBeNull();

    fireEvent.click(allButton);
    expect(getByText('Task 1')).toBeInTheDocument();
    expect(getByText('Task 2')).toBeInTheDocument();
  });
});
