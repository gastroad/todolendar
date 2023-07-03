import { render, fireEvent } from '@testing-library/react';

import CalendarHeader, { CalendarHeaderProps } from './CalendarHeader';

describe('CalendarHeader', () => {
  const handlePrevMonth = jest.fn();
  const handleNextMonth = jest.fn();
  const handleThisMonth = jest.fn();
  const formattedDate = '2023-06';
  const defaultProps: CalendarHeaderProps = {
    handlePrevMonth: handlePrevMonth,
    handleNextMonth: handleNextMonth,
    handleThisMonth: handleThisMonth,
    formattedDate: formattedDate,
  };

  it('renders CalendarHeader', () => {
    const { getByText } = render(<CalendarHeader {...defaultProps} />);

    expect(getByText('2023-06')).toBeInTheDocument();

    fireEvent.click(getByText('today'));
    expect(handleThisMonth).toHaveBeenCalled();
  });

  it('calls handlePrevMonth', () => {
    const { getByTestId } = render(<CalendarHeader {...defaultProps} />);
    fireEvent.click(getByTestId('prev-button'));
    expect(handlePrevMonth).toHaveBeenCalled();
  });
  it('calls handleNextMonth', () => {
    const { getByTestId } = render(<CalendarHeader {...defaultProps} />);
    fireEvent.click(getByTestId('next-button'));
    expect(handleNextMonth).toHaveBeenCalled();
  });
  it('calls handleThisMonth', () => {
    const { getByText } = render(<CalendarHeader {...defaultProps} />);
    fireEvent.click(getByText('today'));
    expect(handleThisMonth).toHaveBeenCalled();
  });
});
