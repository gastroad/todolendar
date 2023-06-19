import { Meta, StoryObj } from '@storybook/react';

import LoginPage, { LoginPageProps } from './LoginPage';

const meta: Meta<LoginPageProps> = {
  title: 'pages/LoginPage',
  component: LoginPage,
};
export default meta;

type Story = StoryObj<LoginPageProps>;

export const Default: Story = {};
