var path = require('path');
var webpack = require('webpack');
var babelConfig = require('./babel.json');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/lib/App'
  ],
  output: {
    path: path.join(process.cwd(), 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelConfig)],
      include: path.join(process.cwd(), 'app')
    }]
  }
};
