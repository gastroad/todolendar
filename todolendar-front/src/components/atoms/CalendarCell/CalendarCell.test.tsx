import { render, fireEvent } from '@testing-library/react';
import CalendarCell from './CalendarCell';
import { DateTime } from 'luxon';

test('renders calendar cell with correct day', () => {
  const handleDateSelect = jest.fn();
  const date = DateTime.local(2023, 1, 15);

  const { getByText } = render(
    <CalendarCell
      dayOfMonth={15}
      isCurrentDate={false}
      handleDateSelect={handleDateSelect}
      date={date}
    />,
  );

  const cell = getByText('15');
  expect(cell).toBeInTheDocument();
});

test('calls handleDateSelect on cell click', () => {
  const handleDateSelect = jest.fn();
  const date = DateTime.local(2023, 1, 15);

  const { getByText } = render(
    <CalendarCell
      dayOfMonth={15}
      isCurrentDate={false}
      handleDateSelect={handleDateSelect}
      date={date}
    />,
  );

  const cell = getByText('15');
  fireEvent.click(cell);

  expect(handleDateSelect).toHaveBeenCalledWith(date);
});
