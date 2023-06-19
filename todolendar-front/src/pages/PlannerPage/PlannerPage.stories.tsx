import { Meta, StoryObj } from '@storybook/react';

import PlannerPage, { PlannerPageProps } from './PlannerPage';

const container = document.createElement('div');
container.setAttribute('id', 'root-modal');
document.body.appendChild(container);

const meta: Meta<PlannerPageProps> = {
  title: 'pages/PlannerPage',
  component: PlannerPage,
};
export default meta;

type Story = StoryObj<PlannerPageProps>;

export const Default: Story = {};
