import { Meta, StoryObj } from '@storybook/react';
import TodoList, { TodoListProps } from './TodoList';
import { DateTime } from 'luxon';

const initialTodos = [
  {
    id: '1',
    text: 'Task 1',
    completed: false,
    date: DateTime.now().toFormat('yyyy MM/dd'),
  },
  {
    id: '2',
    text: 'Task 2',
    completed: true,
    date: DateTime.now().toFormat('yyyy MM/dd'),
  },
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
