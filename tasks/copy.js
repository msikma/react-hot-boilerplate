// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

var path = require('path');

module.exports = {
  // Files that end up in the /public/ root.
  'root': {
    'files': [
      {
        'expand': true,
        'cwd': path.join(process.cwd(), 'app/assets/root'),
        'src': '**/*',
        'dest': path.resolve('public/')
      }
    ]
  },
  // Image content (except sprites)
  'images': {
    'files': [
      {
        'expand': true,
        'cwd': path.join(process.cwd(), 'app/assets/images'),
        'src': '**/*',
        'dest': path.resolve('public/images/')
      }
    ]
  }
};
