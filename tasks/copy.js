var path = require('path');

module.exports = {
  'assets': {
    'files': [
      {
        'expand': true,
        'cwd': path.join(process.cwd(), 'app/assets'),
        'src': '**/*',
        'dest': path.resolve('public/')
      }
    ]
  }
};
