import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import NavigationMenu from './NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'components/molecules/NavigationMenu',
  component: NavigationMenu,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {};
