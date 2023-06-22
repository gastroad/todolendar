import { render, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';

import Calendar from './Calendar';

test('renders Calendar component', () => {
  const mockedDate = DateTime.now().toFormat('yyyy-MM');
  const onDateSelect = jest.fn();
  const handleCurrentDate = jest.fn();
  const { getByText } = render(
    <Calendar
      onDateSelect={onDateSelect}
      currentDate={DateTime.now()}
      handleCurrentDate={handleCurrentDate}
    />,
  );
  expect(getByText(mockedDate)).toBeInTheDocument();
});
