var path = require('path');

module.exports = {
  options: {
    configFile: path.join(process.cwd(), 'tasks/config/eslint.json')
  },
  'target': [
    'gruntfile.js',
    'tasks/**/*.js'
  ]
};
