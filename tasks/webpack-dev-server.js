var path = require('path');

module.exports = {
  'options': {
    'webpack': require(path.join(process.cwd(), 'tasks/config/webpack.js')),
    'contentBase': path.join(__dirname, '../public'),
    'keepalive': true,
    'port': 8080
  },
  'dev': {
    'hot': true,
    'historyApiFallback': true
  }
};
