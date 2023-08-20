import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import AuthLayoutTemplate, {
  AuthLayoutTemplateProps,
} from './AuthLayoutTemplate';

const meta: Meta<AuthLayoutTemplateProps> = {
  title: 'components/templates/AuthLayoutTemplate',
  component: AuthLayoutTemplate,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};
export default meta;

type Story = StoryObj<AuthLayoutTemplateProps>;

export const Default: Story = {};
