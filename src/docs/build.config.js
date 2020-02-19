const webpack = require.main.require('webpack');
const { version } = require('../../package.json');

module.exports = {
  babel: {
    babelrc: false,
  },
  webpack: {
    devtool: false, // disable source-map
    output: {
      publicPath: '', // generate client.*.js relative to ./demo/index.html
    },
    plugins: [
      new webpack.DefinePlugin({
        'proccess.env.VERSION': JSON.stringify(version), // adds MyComponent.version
      }),
    ],
  },
};
