import type { StorybookConfig } from "@storybook/react-webpack5";
import projectWebpackConfig from "../webpack.config"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.resolve!.alias = { ...config.resolve!.alias, ...projectWebpackConfig.resolve.alias, };
    return config;
  },
};
export default config;