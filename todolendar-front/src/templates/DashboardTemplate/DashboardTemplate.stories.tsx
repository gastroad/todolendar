import { Meta, StoryObj } from '@storybook/react';
import DashboardTemplate, { DashboardTemplateProps } from './DashboardTemplate';

const meta: Meta<DashboardTemplateProps> = {
  title: 'templates/DashboardTemplate',
  component: DashboardTemplate,
};
export default meta;

type Story = StoryObj<DashboardTemplateProps>;

export const Default: Story = {
  args: {
    todos: [],
  },
};
