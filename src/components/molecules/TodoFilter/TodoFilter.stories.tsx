import { Meta, StoryObj } from '@storybook/react';
import TodoFilter, { TodoFilterProps } from './TodoFilter';

const meta: Meta<TodoFilterProps> = {
  title: 'components/molecules/TodoFilter',
  component: TodoFilter,
};
export default meta;

type Story = StoryObj<TodoFilterProps>;

export const Default: Story = {
  args: {
    filter: 'ALL',
    filterTodos: () => {},
  },
};
