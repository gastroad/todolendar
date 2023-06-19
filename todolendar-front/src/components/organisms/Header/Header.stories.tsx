import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Header, { HeaderProps } from './Header';

const meta: Meta<HeaderProps> = {
  title: 'components/organisms/Header',
  component: Header,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};
export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {};
