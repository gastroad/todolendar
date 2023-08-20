import type { Meta, StoryObj } from '@storybook/react';
import LoginTemplate, { LoginTemplateProps } from './LoginTemplate';

const meta: Meta<LoginTemplateProps> = {
  title: 'components/templates/LoginTemplate',
  component: LoginTemplate,
};
export default meta;

type Story = StoryObj<LoginTemplateProps>;

export const Default: Story = {
  args: {},
  render: (args) => <LoginTemplate {...args}>LoginTemplate</LoginTemplate>,
};
