const base = require('./webpack.base.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//extend base.config with property plugins.
const config = Object.assign({}, base, {
  plugins: base.plugins || []
  })

  module.exports = config;
