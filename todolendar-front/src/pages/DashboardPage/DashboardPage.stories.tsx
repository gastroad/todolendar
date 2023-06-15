import { Meta, StoryObj } from '@storybook/react';

import DashboardPage from './DashboardPage';

const meta: Meta<typeof DashboardPage> = {
  title: 'pages/DashboardPage',
  component: DashboardPage,
};
export default meta;

type Story = StoryObj<typeof DashboardPage>;

export const Default: Story = {};
