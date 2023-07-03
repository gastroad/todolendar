import { render, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';
import TodoItem, { TodoItemProps } from './TodoItem';

describe('TodoItem', () => {
  const todo = {
    id: '1',
    text: 'Task 1',
    completed: false,
    date: DateTime.now().toFormat('yyyy MM/dd'),
  };
  const toggleTodo = jest.fn();
  const deleteTodo = jest.fn();
  const defaultProps: TodoItemProps = {
    todo: todo,
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo,
  };

  it('render TodoItem', () => {
    const { getByText } = render(<TodoItem {...defaultProps} />);
    const todoTextElement = getByText('Task 1');
    expect(todoTextElement).toBeInTheDocument();
  });

  it('calls toggleTodo', () => {
    const { getByText } = render(<TodoItem {...defaultProps} />);
    const todoTextElement = getByText('Task 1');
    fireEvent.click(todoTextElement);
    expect(toggleTodo).toHaveBeenCalledWith('1');
  });

  it('calls deleteTodo', () => {
    const { getByText } = render(<TodoItem {...defaultProps} />);
    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);
    expect(deleteTodo).toHaveBeenCalledWith('1');
  });
});
