import { Meta, StoryObj } from "@storybook/react";

import BubbleChart, { BubbleChartProps } from "./BubbleChart"

const meta: Meta<BubbleChartProps> = {
    title: "components/organisms/BubbleChart",
    component: BubbleChart

}
export default meta

type Story = StoryObj<BubbleChartProps>;

export const Default: Story = {
    args: {
        data: [
            {
                month: "string",
                index: 1,
                value: 10
            },
            {
                month: "string",
                index: 1,
                value: 20
            }
        ]
    }
};


