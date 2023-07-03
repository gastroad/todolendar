import { render } from '@testing-library/react';
import { DateTime } from 'luxon';
import CalendarBody, { CalendarBodyProps } from './CalendarBody';

describe('CalendarBody', () => {
  const currentDate = DateTime.local(2023, 7, 1);
  const todos = [
    {
      id: '1',
      text: 'cell-item-1',
      completed: false,
      date: '',
    },
    {
      id: '2',
      text: 'cell-item-2',
      completed: false,
      date: '',
    },
  ];
  const height = '400px';
  const handleDateSelectMock = jest.fn();

  const defaultProps: CalendarBodyProps = {
    currentDate: currentDate,
    todos: todos,
    height: height,
    handleDateSelect: handleDateSelectMock,
  };

  it('render CalendarBody', () => {
    const { getByTestId, getAllByRole } = render(
      <CalendarBody {...defaultProps} />,
    );
    const calendarBody = getByTestId('calendar-body');
    expect(calendarBody).toBeInTheDocument();
  });
});
