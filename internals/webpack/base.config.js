const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const resolve = require('../resolve');

try {
  fs.readdirSync(resolve('src/static'));
} catch ({ code, message }) {
  if (code === 'ENOENT') {
    fs.mkdirSync(resolve('src/static'));
  } else {
    // eslint-disable-next-line no-console
    console.log('[Error]', message);
    process.exit(1);
  }
}

// eslint-disable-next-line import/no-dynamic-require
const { appTitle } = require(resolve('appData'));

module.exports = ({ isDev }) => ({
  entry: {
    main: resolve('src/index.js'),
  },
  output: {
    path: resolve('build'),
    filename: isDev ? 'js/[name].bundle.js' : 'js/[name].[contenthash].js',
    chunkFilename: isDev ? 'js/[name].chunk.js' : 'js/[name].[chunkhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
      title: appTitle,
    }),
    new CopyWebpackPlugin([{ from: resolve('src/static'), to: resolve('build') }]),
  ],
  resolve: {
    modules: [resolve('node_modules'), resolve('src')],
  },
});
