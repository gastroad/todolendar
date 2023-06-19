import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'components/atoms/Button',
  component: Button,
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    label: '버튼',
    onClick: () => {},
    type: 'primary',
  },
};
