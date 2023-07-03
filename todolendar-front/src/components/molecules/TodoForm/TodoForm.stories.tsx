import { Meta, StoryObj } from '@storybook/react';
import TodoForm, { TodoFormProps } from './TodoForm';
import { ChangeEvent } from 'react';

const meta: Meta<TodoFormProps> = {
  title: 'components/molecules/TodoForm',
  component: TodoForm,
};
export default meta;

type Story = StoryObj<TodoFormProps>;

export const Default: Story = {
  args: {
    // addTodo: (text: string) => { },
    inputText: '',
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => {},
    handleButtonClick: () => {},
  },
};
