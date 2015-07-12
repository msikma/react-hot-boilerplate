// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

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
