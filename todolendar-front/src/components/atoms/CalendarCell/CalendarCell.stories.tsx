import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';

import CalendarCell, { CalendarCellProps } from './CalendarCell';

const meta: Meta<CalendarCellProps> = {
  title: 'components/atoms/CalendarCell',
  component: CalendarCell,
};
export default meta;
type Story = StoryObj<CalendarCellProps>;

export const Default: Story = {
  args: {
    dayOfMonth: 15,
    isCurrentDate: false,
    handleDateSelect: (date) => {},
    date: DateTime.local(2023, 1, 15),
  },
};

export const Today: Story = {
  args: {
    dayOfMonth: 15,
    isCurrentDate: true,
    handleDateSelect: (date) => {},
    date: DateTime.local(2023, 1, 15),
  },
};
