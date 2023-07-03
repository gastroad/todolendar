import { render, fireEvent } from '@testing-library/react';
import TodoFilter, { TodoFilterProps } from './TodoFilter';

describe('TodoFilter', () => {
  const handleFilterOptions = jest.fn();
  const filter = 'ALL';
  const defaultProps: TodoFilterProps = {
    filter: filter,
    handleFilterOptions: handleFilterOptions,
  };

  it('render TodoFilter', () => {
    const { getByText } = render(<TodoFilter {...defaultProps} />);
    const allButton = getByText('All');
    const completedButton = getByText('Completed');
    const inProgressButton = getByText('In Progress');

    expect(allButton).toBeInTheDocument();
    expect(completedButton).toBeInTheDocument();
    expect(inProgressButton).toBeInTheDocument();
  });

  it('calls handleFilterOptions', () => {
    const { getByText } = render(<TodoFilter {...defaultProps} />);
    const allButton = getByText('All');
    const completedButton = getByText('Completed');
    const inProgressButton = getByText('In Progress');

    fireEvent.click(allButton);
    expect(handleFilterOptions).toHaveBeenCalledWith('ALL');

    fireEvent.click(completedButton);
    expect(handleFilterOptions).toHaveBeenCalledWith('COMPLETED');

    fireEvent.click(inProgressButton);
    expect(handleFilterOptions).toHaveBeenCalledWith('INPROGRESS');
  });
});
