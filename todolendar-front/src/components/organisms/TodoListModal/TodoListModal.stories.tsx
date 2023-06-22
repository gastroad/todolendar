import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';
import TodoListModal, { TodoListModalProps } from './TodoListModal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const meta: Meta<TodoListModalProps> = {
  title: 'components/organisms/TodoListModal',
  component: TodoListModal,
};
export default meta;

type Story = StoryObj<TodoListModalProps>;

export const Default: Story = {
  args: {
    currentDate: DateTime.now(),
    openModal: () => {},
    closeModal: () => {},
    todos: [],
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};
