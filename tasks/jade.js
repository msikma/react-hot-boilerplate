// Copyright (C) 2012-2015, Let's Deliver - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

var EOL = require('os').EOL;
var copyrightInfo = require('./helpers/copyright-info.js');
var buildInfo = require('./helpers/build-info.js');

// Base list of files we need to compile, using 'source': 'destination'.
var files = {
  'public/index.html': ['app/assets/templates/index.jade']
};


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
    'NODE_ENV': process.env.NODE_ENV,
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
