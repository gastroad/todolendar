import { Meta, StoryObj } from '@storybook/react';
import CalendarCell from './CalendarCell';
import { DateTime } from 'luxon';

const meta: Meta<typeof CalendarCell> = {
  title: 'components/atoms/CalendarCell',
  component: CalendarCell,
};
export default meta;
type Story = StoryObj<typeof CalendarCell>;

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
