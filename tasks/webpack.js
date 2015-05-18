var path = require('path');

module.exports = {
  'options': require(path.join(process.cwd(), 'tasks/config/webpack.js')),
  'release': {
  }
};
