import { Meta, StoryObj } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput';

const meta: Meta<TextInputProps> = {
  title: 'components/atoms/TextInput',
  component: TextInput,
};
export default meta;

type Story = StoryObj<TextInputProps>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: '',
    onChange: () => {},
    onKeyDown: () => {},
  },
};
