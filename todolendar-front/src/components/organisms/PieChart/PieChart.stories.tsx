import { Meta, StoryObj } from '@storybook/react';

import PieChart, { PieChartProps } from './PieChart';

const meta: Meta<PieChartProps> = {
  title: 'components/organisms/PieChart',
  component: PieChart,
};
export default meta;

type Story = StoryObj<PieChartProps>;

export const Default: Story = {
  args: {
    data: [
      {
        name: ' string',
        value: 1,
        color: 'red',
      },
      {
        name: ' string',
        value: 1,
        color: 'blue',
      },
    ],
  },
};
