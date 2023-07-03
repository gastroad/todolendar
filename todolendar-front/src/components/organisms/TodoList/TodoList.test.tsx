import { render } from '@testing-library/react';
import TodoList, { TodoListProps } from './TodoList';
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
  const filter = 'ALL';
  const inputText = '';
  const toggleTodo = jest.fn();
  const deleteTodo = jest.fn();
  const handleFilterOptions = jest.fn();
  const handleInputChange = jest.fn();
  const handleButtonClick = jest.fn();
  const defaultProps: TodoListProps = {
    currentDate: currentDate,
    todos: todos,
    filter: filter,
    inputText: inputText,
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
    handleFilterOptions: handleFilterOptions,
    handleInputChange: handleInputChange,
    handleButtonClick: handleButtonClick,
  };

  it('renders TodoList', () => {
    const { getByText } = render(<TodoList {...defaultProps} />);

    expect(getByText('Todo 1')).toBeInTheDocument();
    expect(getByText('Todo 2')).toBeInTheDocument();
  });

  it('renders TodoList completed', () => {
    const props: TodoListProps = { ...defaultProps, filter: 'COMPLETED' };
    const { getByText } = render(<TodoList {...props} />);

    expect(getByText('Todo 2')).toBeInTheDocument();
  });
  it('renders TodoList INPROGRESS', () => {
    const props: TodoListProps = { ...defaultProps, filter: 'INPROGRESS' };
    const { getByText } = render(<TodoList {...props} />);

    expect(getByText('Todo 1')).toBeInTheDocument();
  });
});
