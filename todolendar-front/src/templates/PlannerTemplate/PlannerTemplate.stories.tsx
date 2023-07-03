import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';

import PlannerTemplate, { PlannerTemplateProps } from './PlannerTemplate';

const container = document.createElement('div');
container.setAttribute('id', 'root-modal');
document.body.appendChild(container);

const meta: Meta<PlannerTemplateProps> = {
  title: 'templates/PlannerTemplate',
  component: PlannerTemplate,
};
export default meta;

type Story = StoryObj<PlannerTemplateProps>;

export const Default: Story = {
  args: {
    currentDate: DateTime.now(),
    todos: [],
    isOpen: false,
    setCurrentDate: () => {},
    openModal: () => {},
    closeModal: () => {},
    handlePrevMonth: () => {},
    handleNextMonth: () => {},
    handleThisMonth: () => {},
    handleDateSelect: (date: DateTime) => {},
  },
};
