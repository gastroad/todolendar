import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import LoginTemplate, { LoginTemplateProps } from './LoginTemplate';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const meta: Meta<LoginTemplateProps> = {
  title: 'templates/LoginTemplate',
  component: LoginTemplate,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};
export default meta;

type Story = StoryObj<LoginTemplateProps>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};
