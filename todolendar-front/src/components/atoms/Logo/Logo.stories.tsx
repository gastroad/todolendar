import { Meta, StoryObj } from '@storybook/react';

import Logo, { LogoProps } from './Logo';

const meta: Meta<LogoProps> = {
  title: 'components/Atoms/Logo',
  component: Logo,
};
export default meta;

type Story = StoryObj<LogoProps>;

export const Default: Story = {};
