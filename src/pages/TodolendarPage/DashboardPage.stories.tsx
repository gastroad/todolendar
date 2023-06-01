import { Meta, StoryObj } from "@storybook/react";

import TodolendarPage from "./TodolendarPage";


const meta: Meta<typeof TodolendarPage> = {
    title: 'pages/TodolendarPage',
    component: TodolendarPage,
};
export default meta;



type Story = StoryObj<typeof TodolendarPage>;

export const Default: Story = {};
