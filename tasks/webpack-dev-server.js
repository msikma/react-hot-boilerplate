var path = require('path');

module.exports = {
  'dev': {
    'webpack': require(path.join(process.cwd(), 'config', 'webpack.js')),
    'publicPath': '/public/',
    'keepalive': true,
    'port': 3000,
    'hot': true,
    'historyApiFallback': true
  }
};
