import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalTemplate, { ModalTemplateProps } from './ModalTemplate';

const meta: Meta<ModalTemplateProps> = {
  title: 'components/templates/ModalTemplate',
  component: ModalTemplate,
};
export default meta;

type Story = StoryObj<ModalTemplateProps>;

export const Default: Story = {
  args: {
    closeModal: action('clicked'),
  },
  render: (args) => <ModalTemplate {...args}>modal</ModalTemplate>,
};
