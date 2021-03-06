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
    extensions: ['', '.js', '.jsx'],
    // These aliases are used to make it easier to import our own modules.
    // This works in tandem with the import path described in package.json,
    // which is used for the HTML rendering server code.
    'alias': {
      'app': path.join(process.cwd(), 'app'),
      'components': 'app/lib/components',
      'actions': 'app/lib/actions',
      'etc': 'app/lib/etc',
      'stores': 'app/lib/stores',
      'pages': 'app/lib/pages'
    }
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelConfig)],
      include: path.join(process.cwd(), 'app')
    }]
  }
};
