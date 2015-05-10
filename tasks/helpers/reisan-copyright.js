// Copyright (C) 2014-2015, Reisan Ltd. - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

var grunt = require('grunt');
var EOL = require('os').EOL;

var year = new Date().getFullYear();
var copyrightLines = [
  'Reisan Webapp <https://github.com/reisan/webapp>'.cyan,
  ('(C) 2014-' + year + ', Reisan Ltd. - All rights reserved.').green,
  ('This program is part of the Reisan Japanese language ' +
  'education app project.').yellow,
  'For more information, visit <https://rei-san.com/>.'.yellow,
  ''
];

function getCopyrightLines() {
  return copyrightLines;
}

function getCopyrightString() {
  return copyrightLines.join(EOL) + EOL;
}

function printCopyright() {
  grunt.log.write(getCopyrightString());
}

module.exports = {
  'lines': getCopyrightLines,
  'string': getCopyrightString,
  'print': printCopyright
};
