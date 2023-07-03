import { render, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';
import TodoListModal from './TodoListModal';
import { Todo } from '@src/types/todoList';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

describe('TodoListModal', () => {
  const currentDate = DateTime.local();
  const todos: Todo[] = [
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

  it('renders TodoListModal with initial todos', () => {
    const queryClient = new QueryClient();
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <TodoListModal
          currentDate={currentDate}
          todos={todos}
          openModal={jest.fn()}
          closeModal={jest.fn()}
        />
        ,
      </QueryClientProvider>,
    );

    expect(getByText('Todo 1')).toBeInTheDocument();
    expect(getByText('Todo 2')).toBeInTheDocument();
  });

  it('calls closeModal when close button is clicked', () => {
    const closeModal = jest.fn();
    const queryClient = new QueryClient();
    const { getByAltText } = render(
      <QueryClientProvider client={queryClient}>
        <TodoListModal
          currentDate={currentDate}
          todos={todos}
          openModal={jest.fn()}
          closeModal={closeModal}
        />
      </QueryClientProvider>,
    );

    fireEvent.click(getByAltText('modal-close'));

    expect(closeModal).toHaveBeenCalled();
  });
});
