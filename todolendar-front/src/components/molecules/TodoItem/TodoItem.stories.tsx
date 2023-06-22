import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';
import TodoItem, { TodoItemProps } from './TodoItem';

const todo: TodoItemProps['todo'] = {
  id: '1',
  text: 'Task 1',
  completed: false,
  date: DateTime.now().toFormat('yyyy MM/dd'),
};

const meta: Meta<TodoItemProps> = {
  title: 'components/molecules/TodoItem',
  component: TodoItem,
};
export default meta;

type Story = StoryObj<TodoItemProps>;

export const Default: Story = {
  args: {
    todo: todo,
    toggleTodo: () => {},
    deleteTodo: () => {},
  },
};
