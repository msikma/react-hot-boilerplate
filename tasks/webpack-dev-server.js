var path = require('path');

module.exports = {
  'dev': {
    'webpack': require(path.join(process.cwd(), 'tasks/config/webpack.js')),
    'publicPath': '/public/',
    'keepalive': true,
    'port': 8080,
    'hot': true,
    'historyApiFallback': true
  }
};
