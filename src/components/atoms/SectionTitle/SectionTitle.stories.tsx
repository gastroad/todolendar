import { Meta, StoryObj } from "@storybook/react";
import SectionTitle, { SectionTitleProps } from "./SectionTitle";


const meta: Meta<SectionTitleProps> = {
    title: "components/atoms/SectionTitle",
    component: SectionTitle
}
export default meta

type Story = StoryObj<SectionTitleProps>

export const Default: Story = {
    args: { title: "테스트" }
}