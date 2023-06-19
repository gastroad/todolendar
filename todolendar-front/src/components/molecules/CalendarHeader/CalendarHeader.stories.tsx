import { Meta, StoryObj } from '@storybook/react';
import CalendarHeader, { CalendarHeaderProps } from './CalendarHeader';

const meta: Meta<CalendarHeaderProps> = {
  title: 'components/molecules/CalendarHeader',
  component: CalendarHeader,
};
export default meta;

type Story = StoryObj<CalendarHeaderProps>;

export const Default: Story = {
  args: {
    handlePrevMonth: () => {},
    handleNextMonth: () => {},
    formattedDate: '2023-01',
  },
};
