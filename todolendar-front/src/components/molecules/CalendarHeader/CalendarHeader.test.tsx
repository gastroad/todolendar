import { render, fireEvent } from '@testing-library/react';

import CalendarHeader from './CalendarHeader';

test('renders CalendarHeader', () => {
  const handlePrevMonth = jest.fn();
  const handleNextMonth = jest.fn();
  const handleThisMonth = jest.fn();

  const { getByTestId, getByText } = render(
    <CalendarHeader
      handlePrevMonth={handlePrevMonth}
      handleNextMonth={handleNextMonth}
      handleThisMonth={handleThisMonth}
      formattedDate="2023-06"
    />,
  );
  expect(getByText('2023-06')).toBeInTheDocument();

  fireEvent.click(getByTestId('prev-button'));
  expect(handlePrevMonth).toHaveBeenCalled();
  fireEvent.click(getByTestId('next-button'));
  expect(handleNextMonth).toHaveBeenCalled();
  fireEvent.click(getByText('today'));
  expect(handleThisMonth).toHaveBeenCalled();
});
