import type { Meta, StoryObj } from '@storybook/react';
import ContentTemplate, { DashboardTemplateProps } from './ContentTemplate';

const meta: Meta<DashboardTemplateProps> = {
  title: 'components/templates/ContentTemplate',
  component: ContentTemplate,
};
export default meta;

type Story = StoryObj<DashboardTemplateProps>;

export const Default: Story = {
  args: {
    title: 'title',
  },
  render: (args) => <ContentTemplate {...args}>content</ContentTemplate>,
};
