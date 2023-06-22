import { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DateTime } from 'luxon';

import PlannerTemplate, { PlannerTemplateProps } from './PlannerTemplate';

const container = document.createElement('div');
container.setAttribute('id', 'root-modal');
document.body.appendChild(container);
const queryClient = new QueryClient();

const meta: Meta<PlannerTemplateProps> = {
  title: 'templates/PlannerTemplate',
  component: PlannerTemplate,
};
export default meta;

type Story = StoryObj<PlannerTemplateProps>;

export const Default: Story = {
  args: {
    currentDate: DateTime.now(),
    setCurrentDate: () => {},
    todos: [],
    onDateSelect: () => {},
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};
