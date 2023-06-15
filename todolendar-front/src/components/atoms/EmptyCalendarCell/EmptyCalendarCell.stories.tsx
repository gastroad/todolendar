import { StoryObj, Meta } from '@storybook/react';
import EmptyCalendarCell from './EmptyCalendarCell';

const meta: Meta<typeof EmptyCalendarCell> = {
  title: 'components/atoms/EmptyCalendarCell',
  component: EmptyCalendarCell,
};
export default meta;

type Story = StoryObj<typeof EmptyCalendarCell>;

export const Default: Story = {};
