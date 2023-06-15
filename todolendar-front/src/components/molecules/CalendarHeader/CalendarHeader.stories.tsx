import { Meta, StoryObj } from '@storybook/react';
import CalendarHeader from './CalendarHeader';

const meta: Meta<typeof CalendarHeader> = {
  title: 'components/molecules/CalendarHeader',
  component: CalendarHeader,
};
export default meta;

type Story = StoryObj<typeof CalendarHeader>;

export const Default: Story = {
  args: {
    handlePrevMonth: () => {},
    handleNextMonth: () => {},
    formattedDate: '2023-01',
  },
};
