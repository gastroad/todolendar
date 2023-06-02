import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'components/organisms/Header',
  component: Header,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    }
  }

};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
