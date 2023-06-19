import { Meta, StoryObj } from '@storybook/react';

import FooterEmail, { FooterEmailProps } from './FooterEmail';

const meta: Meta<FooterEmailProps> = {
  title: 'components/atoms/FooterEmail',
  component: FooterEmail,
};
export default meta;

type Story = StoryObj<FooterEmailProps>;

export const Default: Story = {
  args: {
    email: 'test@test.com',
  },
};
