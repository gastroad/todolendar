import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';

import CalendarBody, { CalendarBodyProps } from './CalendarBody';

const meta: Meta<CalendarBodyProps> = {
  title: 'components/molecules/CalendarBody',
  component: CalendarBody,
};
export default meta;

type Story = StoryObj<CalendarBodyProps>;
export const Default: Story = {
  args: {
    currentDate: DateTime.local(2023, 1, 15),
    handleDateSelect: (date) => {},
  },
};
