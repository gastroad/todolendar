import { Meta, StoryObj } from '@storybook/react';
import ArrowButton from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
  title: 'components/atoms/ArrowButton',
  component: ArrowButton,
};
export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const Default: Story = {
  args: {
    onClick: () => {},
    direction: 'left',
  },
};
