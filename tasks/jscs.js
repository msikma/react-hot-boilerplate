var path = require('path');

module.exports = {
  'options': {
    'config': path.join(process.cwd(), 'tasks/config/jscs.json'),
    'esnext': true,
    'esprima': 'esprima-fb'
  },
  'tasks': {
    'src': [
      'gruntfile.js',
      'tasks/**/*.js'
    ]
  },
  'src': {
    'src': [
      'app/lib/**/*.js'
    ]
  }
};
