import { StoryObj, Meta } from '@storybook/react';
import EmptyCalendarCell, { EmptyCalendarCellProps } from './EmptyCalendarCell';

const meta: Meta<EmptyCalendarCellProps> = {
  title: 'components/atoms/EmptyCalendarCell',
  component: EmptyCalendarCell,
};
export default meta;

type Story = StoryObj<EmptyCalendarCellProps>;

export const Default: Story = {};
