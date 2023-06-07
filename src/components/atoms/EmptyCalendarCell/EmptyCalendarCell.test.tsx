import { render } from '@testing-library/react';
import EmptyCalendarCell from './EmptyCalendarCell';

test('renders empty calendar cell', () => {
  const { container } = render(<EmptyCalendarCell />);
  const emptyCell = container.querySelector('.empty-calenar-cell');
  expect(emptyCell).toBeInTheDocument();
});
