import { Meta, StoryObj } from "@storybook/react";

import BarChart, { CustomBarChartProps } from "./BarChart"

const meta: Meta<CustomBarChartProps> = {
    title: "components/organisms/BarChart",
    component: BarChart

}
export default meta

type Story = StoryObj<CustomBarChartProps>;

export const Default: Story = {
    args: {
        data: [
            {
                name: "string",
                inProgress: 3,
                completed: 4,
            }, {
                name: "string",
                inProgress: 3,
                completed: 4,
            }
        ]
    }
};

