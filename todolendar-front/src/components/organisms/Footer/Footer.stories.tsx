import { Meta, StoryObj } from '@storybook/react';

import Footer, { FooterProps } from './Footer';

const meta: Meta<FooterProps> = {
  title: 'components/organisms/Footer',
  component: Footer,
};
export default meta;

type Story = StoryObj<FooterProps>;

export const Default: Story = {
  args: {
    email: 'test@test.com',
    adminName: '홍길동',
  },
};
