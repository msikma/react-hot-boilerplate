// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

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
