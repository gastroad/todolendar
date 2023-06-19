import { Meta, StoryObj } from '@storybook/react';
import ArrowButton, { ArrowButtonProps } from './ArrowButton';

const meta: Meta<ArrowButtonProps> = {
  title: 'components/atoms/ArrowButton',
  component: ArrowButton,
};
export default meta;
type Story = StoryObj<ArrowButtonProps>;

export const Default: Story = {
  args: {
    onClick: () => {},
    direction: 'left',
    name: '',
  },
};
