const webpack = require('webpack')
const clientConfig = require('./webpack.client.config')

module.exports = function setupDevServer (app) {

  //extend config with new entry point into entry array

  // 1. communicates with server to recieve notifications when the bundle rebuilds.
  // 2. update client bundle accordingly.

  clientConfig.entry.app = [
    "webpack-hot-middleware/client",
    clientConfig.entry.app
  ];

  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )

  const clientCompiler = webpack(clientConfig);
  app.use(
    require('webpack-dev-middleware')(clientCompiler, {
      stats: {
        colors: true
      }
    })
  );
  
  app.use(require("webpack-hot-middleware")(clientCompiler));
};
