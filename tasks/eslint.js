// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

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
