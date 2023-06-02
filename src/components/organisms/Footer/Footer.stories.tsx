import { Meta, StoryObj } from '@storybook/react';

import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'components/organisms/Footer',
  component: Footer,
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    email: 'test@test.com',
    adminName: '홍길동',
  }
};
