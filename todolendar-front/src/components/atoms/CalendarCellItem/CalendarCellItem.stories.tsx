import { Meta, StoryObj } from '@storybook/react';
import CalendarCellItem, { CalendarCellItemProps } from './CalendarCellItem';
import { Todo } from '@src/types/todoList';
import { DateTime } from 'luxon';

const todo: Todo = {
  id: '1',
  text: 'Task 1',
  completed: false,
  date: DateTime.now().toFormat('yyyy MM/dd'),
};

const meta: Meta<CalendarCellItemProps> = {
  title: 'components/atoms/CalendarCellItem',
  component: CalendarCellItem,
};
export default meta;

type Story = StoryObj<CalendarCellItemProps>;

export const Default: Story = {
  args: {
    todo: todo,
  },
};
