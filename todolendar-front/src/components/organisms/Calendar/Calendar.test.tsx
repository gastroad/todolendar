import { render, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';

import Calendar, { CalendarProps } from './Calendar';

describe('Calendar', () => {
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
  const currentDate = DateTime.now();
  const handlePrevMonth = jest.fn();
  const handleNextMonth = jest.fn();
  const handleThisMonth = jest.fn();
  const handleDateSelect = jest.fn();
  const defaultProps: CalendarProps = {
    todos: todos,
    height: height,
    currentDate: currentDate,
    handlePrevMonth: handlePrevMonth,
    handleNextMonth: handleNextMonth,
    handleThisMonth: handleThisMonth,
    handleDateSelect: handleDateSelect,
  };
  it('render Calendar', () => {
    const mockedDate = DateTime.now().toFormat('yyyy-MM');
    const { getByText } = render(<Calendar {...defaultProps} />);
    expect(getByText(mockedDate)).toBeInTheDocument();
  });
});
