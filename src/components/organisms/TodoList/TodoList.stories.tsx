import { Meta, StoryObj } from '@storybook/react';
import TodoList, { TodoListProps } from './TodoList';
import { DateTime } from 'luxon';

const initialTodos = [
  { id: 1, text: 'Task 1', completed: false },
  { id: 2, text: 'Task 2', completed: true },
];

const meta: Meta<TodoListProps> = {
  title: 'components/organisms/TodoList',
  component: TodoList,
};
export default meta;

type Story = StoryObj<TodoListProps>;

export const Default: Story = {
  args: {
    currentDate: DateTime.now(),
    initialTodos: initialTodos,
  },
};
