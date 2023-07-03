import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import LoginForm, { LoginFormProps } from './LoginForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const meta: Meta<LoginFormProps> = {
  title: 'components/organisms/LoginForm',
  component: LoginForm,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};
export default meta;

type Story = StoryObj<LoginFormProps>;

const inputResult = {
  value: '',
  onChange: () => {},
  reset: () => {},
};
export const Default: Story = {
  args: {
    id: inputResult,
    pw: inputResult,
    login: () => {},
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};
