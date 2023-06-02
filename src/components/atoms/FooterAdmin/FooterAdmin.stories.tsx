import { Meta, StoryObj } from '@storybook/react';

import FooterAdmin from './FooterAdmin';

const meta: Meta<typeof FooterAdmin> = {
  title: 'components/atoms/FooterAdmin',
  component: FooterAdmin,
};
export default meta;

type Story = StoryObj<typeof FooterAdmin>;

export const Default: Story = {
  args: {
    adminName: '홍길동',
  }
};
