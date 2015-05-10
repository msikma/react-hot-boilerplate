var path = require('path');

module.exports = {
  'options': {
    'jshintrc': path.join(process.cwd(), 'config', 'jshint.json')
  },
  'tasks': {
    'src': [
      'gruntfile.js',
      'tasks/**/*.js'
    ]
  },
  'src': {
    // todo: fix this
    'src': ['app/lib/**/*.js']
  }
};
