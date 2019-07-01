const webpackMerge = require('webpack-merge');
const resolve = require('../resolve');
const baseConfig = require('./base.config');


module.exports = webpackMerge(baseConfig({ isDev: true }), {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: resolve('build'),
  },
});
