const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    // tsconfigのpaths設定を参照する: https://storybook.js.org/docs/react/configure/webpack#typescript-module-resolution
    // 以下設定するとcompileエラーでたのでこちらで解消: https://github.com/storybookjs/storybook/issues/14497#issuecomment-818838975
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]
    return config
  },
}
