const webpack = require.main.require('webpack');
const { name, version } = require('./package.json');

const devMode =
  process.env.NODE_ENV === 'development' || process.env.npm_lifecycle_event === 'docs:build';

let config = {
  filenameHashing: devMode,
  publicPath: devMode ? '/docs' : '',
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: 'client.[hash].js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'proccess.env.VERSION': JSON.stringify(version), // adds MyComponent.version
      }),
    ],
  },
};

if (!devMode) {
  const chainWebpack = config => {
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  };
  // converts MyComponent to my-component
  const kebabCase = s =>
    s
      .replace(/([A-Z])([^A-Z-])/g, (_, a, b) => `-${a}${b}`)
      .toLowerCase()
      .replace(/[\s_-]+/g, '-')
      .replace(/(^\W)|(\W$)/g, '');

  // converts my-component to MyComponent
  const camelCase = s =>
    s.replace(/([-_\s]+[a-z])|(^[a-z])/g, $1 => $1.toUpperCase()).replace(/[-_\s]+/g, '');

  const configureWebpack = {
    ...config.configureWebpack,
    optimization: {
      splitChunks: false,
    },
    output: {
      filename: `${kebabCase(name)}.js`,
      library: camelCase(name),
    },
  };

  config = {
    ...config,
    chainWebpack,
    configureWebpack,
  };
}

module.exports = config;
