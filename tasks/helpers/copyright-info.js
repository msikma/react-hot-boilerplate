// Copyright (C) 2014-2015, Reisan Ltd. - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

var grunt = require('grunt');
var EOL = require('os').EOL;

var year = new Date().getFullYear();

// Public copyright lines - displayed in files visible to the public.
var publicCopyright = [
  ['Reisan'],
  ['(C) 2014-' + year + ', Reisan Ltd. - All rights reserved.']
];

// Source code copyright lines - only shown during development.
var sourceCopyright = [
  ['Reisan Webapp <https://github.com/reisan/webapp>', 'cyan'],
  [('(C) 2014-' + year + ', Reisan Ltd. - All rights reserved.'), 'green'],
  [('This program is part of the Reisan Japanese language ' +
    'education app project.'), 'yellow'],
  ['For more information, visit <https://rei-san.com/>.', 'yellow'],
  ['']
];

/**
 * Returns an array of copyright lines, either colorized or plain strings.
 * If colorized, the strings will contain escape sequences for display
 * in a terminal.
 *
 * @param {String} type Whether to display the public or source copyright
 * @param {Boolean} colorized Whether to colorize the output for terminal
 * @returns {Array} The copyright lines
 */
function getCopyrightLines(type, colorized) {
  if (!type) type = 'source';
  var cleanLines = [];
  var lineContent;
  var lineColor;
  var copyrightLines = type == 'source' ? sourceCopyright : publicCopyright;

  for (var n = 0; n < copyrightLines.length; ++n) {
    lineContent = copyrightLines[n][0];
    lineColor = copyrightLines[n][1];

    if (colorized && lineColor) {
      // Note: this is a Grunt trick. Applies colorized output,
      // e.g. 'string'.yellow
      cleanLines.push(lineContent[lineColor]);
    }
    else {
      cleanLines.push(lineContent);
    }
  }
  return cleanLines;
}

/**
 * Returns a multiline string containing copyright information, either
 * colorized for terminal output or plain.
 *
 * @param {String} type Whether to display the public or source copyright
 * @param {Boolean} colorized Whether to colorize the output for terminal
 * @returns {String} The copyright string
 */
function getCopyrightString(type, colorized) {
  if (!type) type = 'source';
  return getCopyrightLines(type, colorized).join(EOL) + EOL;
}

/**
 * See getCopyrightString(), except this prints the output directly.
 *
 * @param {String} type Whether to display the public or source copyright
 * @param {Boolean} colorized Whether to colorize the output for terminal
 */
function printCopyright(type, colorized) {
  if (!type) type = 'source';
  grunt.log.write(getCopyrightString(type, colorized));
}

module.exports = {
  'lines': getCopyrightLines,
  'string': getCopyrightString,
  'print': printCopyright
};
