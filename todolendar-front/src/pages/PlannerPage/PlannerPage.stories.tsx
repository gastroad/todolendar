import { Meta, StoryObj } from '@storybook/react';

import PlannerPage from './PlannerPage'

const container = document.createElement('div');
container.setAttribute('id', 'root-modal');
document.body.appendChild(container);

const meta: Meta<typeof PlannerPage> = {
  title: 'pages/PlannerPage',
  component: PlannerPage,
};
export default meta;

type Story = StoryObj<typeof PlannerPage>;

export const Default: Story = {};
