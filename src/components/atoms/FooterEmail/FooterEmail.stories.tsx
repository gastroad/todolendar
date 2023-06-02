import { Meta, StoryObj } from '@storybook/react';

import FooterEmail from './FooterEmail';

const meta: Meta<typeof FooterEmail> = {
  title: 'components/atoms/FooterEmail',
  component: FooterEmail,
};
export default meta;

type Story = StoryObj<typeof FooterEmail>;

export const Default: Story = {
  args: {
    email: "test@test.com"
  }
};
