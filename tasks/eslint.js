var path = require('path');

module.exports = {
  options: {
    configFile: path.join(process.cwd(), 'config', 'eslint.json')
  },
  'target': [
    'gruntfile.js',
    'tasks/**/*.js'
  ]
};
