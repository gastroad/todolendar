import { Meta, StoryObj } from '@storybook/react';

import FooterAdmin, { FooterAdminProps } from './FooterAdmin';

const meta: Meta<FooterAdminProps> = {
  title: 'components/molecules/FooterAdmin',
  component: FooterAdmin,
};
export default meta;

type Story = StoryObj<FooterAdminProps>;

export const Default: Story = {
  args: {
    adminName: '홍길동',
  },
};
