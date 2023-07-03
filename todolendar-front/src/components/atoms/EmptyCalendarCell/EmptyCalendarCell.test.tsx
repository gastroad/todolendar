import { render } from '@testing-library/react';
import EmptyCalendarCell from './EmptyCalendarCell';

describe('EmptyCalendarCell', () => {
  it('render EmptyCalendarCell', () => {
    const { container } = render(<EmptyCalendarCell />);
    const emptyCell = container.querySelector('.empty-calenar-cell');
    expect(emptyCell).toBeInTheDocument();
  });
});
