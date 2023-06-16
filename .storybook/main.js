/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../stories/Button.stories.js'],
  addons: [
    // '@storybook/addon-links',
    // '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config) => ({
    ...config,
    optimization: {
      ...config.optimization,
      minimize: false,
    },
  }),
};
export default config;
