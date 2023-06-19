import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import NavigationMenu, { NavigationMenuProps } from './NavigationMenu';

const meta: Meta<NavigationMenuProps> = {
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

type Story = StoryObj<NavigationMenuProps>;

export const Default: Story = {};
