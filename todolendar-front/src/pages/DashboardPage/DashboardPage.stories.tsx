import { Meta, StoryObj } from '@storybook/react';

import DashboardPage, { DashboardPageProps } from './DashboardPage';

const meta: Meta<DashboardPageProps> = {
  title: 'pages/DashboardPage',
  component: DashboardPage,
};
export default meta;

type Story = StoryObj<DashboardPageProps>;

export const Default: Story = {};
