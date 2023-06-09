import { render, screen, fireEvent } from '@testing-library/react';
import TodoFilter, { TodoFilterProps } from './TodoFilter';

describe('TodoFilter', () => {
  const filterTodosMock = jest.fn();

  const props: TodoFilterProps = {
    filterTodos: filterTodosMock,
    filter: 'ALL',
  };

  beforeEach(() => {
    render(<TodoFilter {...props} />);
  });

  it('renders three filter buttons', () => {
    const allButton = screen.getByText('All');
    const completedButton = screen.getByText('Completed');
    const inProgressButton = screen.getByText('In Progress');

    expect(allButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
    expect(inProgressButton).toBeInTheDocument();
  });

  it('calls filterTodos with correct filter option when a button is clicked', () => {
    const allButton = screen.getByText('All');
    const completedButton = screen.getByText('Completed');
    const inProgressButton = screen.getByText('In Progress');

    fireEvent.click(allButton);
    expect(filterTodosMock).toHaveBeenCalledWith('ALL');

    fireEvent.click(completedButton);
    expect(filterTodosMock).toHaveBeenCalledWith('COMPLETED');

    fireEvent.click(inProgressButton);
    expect(filterTodosMock).toHaveBeenCalledWith('INPROGRESS');
  });
});
