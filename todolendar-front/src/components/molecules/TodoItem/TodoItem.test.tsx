import { render, screen, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';
import TodoItem, { TodoItemProps } from './TodoItem';

describe('TodoItem', () => {
  const todo: TodoItemProps['todo'] = {
    id: '1',
    text: 'Task 1',
    completed: false,
    date: DateTime.now().toFormat('yyyy MM/dd'),
  };

  const toggleTodoMock = jest.fn();
  const deleteTodoMock = jest.fn();

  beforeEach(() => {
    render(
      <TodoItem
        todo={todo}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />,
    );
  });

  it('renders todo text', () => {
    const todoTextElement = screen.getByText('Task 1');
    expect(todoTextElement).toBeInTheDocument();
  });

  it('calls toggleTodo when clicked', () => {
    const todoTextElement = screen.getByText('Task 1');
    fireEvent.click(todoTextElement);
    expect(toggleTodoMock).toHaveBeenCalledWith('1');
  });

  it('calls deleteTodo when delete button is clicked', () => {
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(deleteTodoMock).toHaveBeenCalledWith('1');
  });
});
