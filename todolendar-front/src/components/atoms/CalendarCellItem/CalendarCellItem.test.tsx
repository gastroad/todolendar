import { render, fireEvent } from '@testing-library/react';
import CalendarCellItem, { CalendarCellItemProps } from './CalendarCellItem';

describe('CalendarCellItem', () => {
  const todo = {
    id: '1',
    text: 'cell-item-1',
    completed: false,
    date: '',
  };
  const defaultProps: CalendarCellItemProps = {
    todo: todo,
  };

  it('render CalendarCellItem', () => {
    const { getByText } = render(<CalendarCellItem {...defaultProps} />);
    const item = getByText(todo.text);
    expect(item).toBeInTheDocument();
  });

  it('render CalendarCellItem completed', () => {
    const completedTodo = {
      ...todo,
      completed: true,
    };
    const props = {
      todo: completedTodo,
    };
    const { getByText } = render(<CalendarCellItem {...props} />);
    const item = getByText(todo.text);
    expect(item).toHaveClass('completed');
  });
});
