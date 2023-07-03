import { render, fireEvent } from '@testing-library/react';
import CalendarCell, { CalendarCellProps } from './CalendarCell';
import { DateTime } from 'luxon';

describe('CalendarCell', () => {
  const handleDateSelect = jest.fn();
  const date = DateTime.local(2023, 1, 15);
  const dayOfMonth = 15;
  const isCurrentDate = false;
  const defaultProps: CalendarCellProps = {
    handleDateSelect: handleDateSelect,
    date: date,
    dayOfMonth: dayOfMonth,
    isCurrentDate: isCurrentDate,
  };

  it('render CalendarCell', () => {
    const { getByText } = render(<CalendarCell {...defaultProps} />);

    const cell = getByText('15');

    expect(cell).toBeInTheDocument();
  });

  it('calls handleDateSelect', () => {
    const { getByText } = render(<CalendarCell {...defaultProps} />);

    const cell = getByText('15');
    fireEvent.click(cell);

    expect(handleDateSelect).toHaveBeenCalledWith(date);
  });
});
