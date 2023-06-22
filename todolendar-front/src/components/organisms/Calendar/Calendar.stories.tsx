import { Meta, StoryObj } from '@storybook/react';
import Calendar, { CalendarProps } from './Calendar';
import { DateTime } from 'luxon';

const meta: Meta<CalendarProps> = {
  title: 'components/organisms/Calendar',
  component: Calendar,
};
export default meta;

type Story = StoryObj<CalendarProps>;

export const Default: Story = {
  args: {
    onDateSelect: () => {},
    currentDate: DateTime.now(),
    handleCurrentDate: () => {},
  },
};
