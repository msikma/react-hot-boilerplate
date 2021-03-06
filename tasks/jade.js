// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

var EOL = require('os').EOL;
var copyrightInfo = require('../app/lib/etc/copyright-info.js');
var buildInfo = require('../app/lib/etc/build-info.js');

// Base list of files we need to compile, using 'source': 'destination'.
var files = {
  'public/index.html': ['app/assets/templates/index.jade']
};

/**
 * Performs a minor bit of whitespace formatting to comments at the
 * top of the file.
 *
 * @param {String} str The raw top comment string
 * @returns {String} The formatted top comment string
 */
function formatTopComment(str) {
  str = EOL + str.trim();
  return str;
}

/**
 * Returns the data to use for the compilation.
 *
 * @param {String} dest Destination file
 * @param {String} src Source file
 * @returns {Object} The data to use during compilation
 */
var getData = function(dest, src) {
  return {
    'showCopyrightComment': process.env.NODE_ENV == 'production',
    'showBuildComment': process.env.NODE_ENV == 'development',
    'showBuildTag': true,
    'html': '',
    'data': JSON.stringify({'data': 'nothing here'}),
    'bundle': 'bundle.js',
    'copyright': formatTopComment(copyrightInfo.string('public')),
    'build': formatTopComment(buildInfo.string())
  };
};

module.exports = {
  'dev': {
    'files': files,
    'options': {
      'pretty': true,
      'data': getData
    }
  },
  'staging': {
    'files': files,
    'options': {
      'pretty': true,
      'data': getData
    }
  },
  'master': {
    'files': files,
    'options': {
      'pretty': false,
      'data': getData
    }
  }
};
