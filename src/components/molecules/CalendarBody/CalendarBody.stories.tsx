import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';

import CalendarBody from './CalendarBody';

const meta: Meta<typeof CalendarBody> = {
  title: 'components/molecules/CalendarBody',
  component: CalendarBody,
};
export default meta;

type Story = StoryObj<typeof CalendarBody>;
export const Default: Story = {
  args: {
    currentDate: DateTime.local(2023, 1, 15),
    handleDateSelect: (date) => {
      console.log(date);
    },
  },
};
