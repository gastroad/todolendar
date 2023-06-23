import { Meta, StoryObj } from '@storybook/react';

import HalfPieChart, { HalfPieChartProps } from './HalfPieChart';

const meta: Meta<HalfPieChartProps> = {
  title: 'components/organisms/HalfPieChart',
  component: HalfPieChart,
};
export default meta;

type Story = StoryObj<HalfPieChartProps>;

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
