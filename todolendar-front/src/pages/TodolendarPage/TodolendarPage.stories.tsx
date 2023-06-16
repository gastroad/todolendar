import { Meta, StoryObj } from '@storybook/react';

import TodolendarPage from './TodolendarPage';

const container = document.createElement('div');
container.setAttribute('id', 'root-modal');
document.body.appendChild(container);

const meta: Meta<typeof TodolendarPage> = {
  title: 'pages/TodolendarPage',
  component: TodolendarPage,
};
export default meta;

type Story = StoryObj<typeof TodolendarPage>;

export const Default: Story = {};
