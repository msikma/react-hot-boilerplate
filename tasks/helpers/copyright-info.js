// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

var grunt = require('grunt');
var path = require('path');
var EOL = require('os').EOL;
var packageData = require(path.join(process.cwd(), 'package.json'));
var appConfig = packageData._app;

// Determine the copyright year range, e.g. '2015' or '2014–2015', etc.
var startYear = appConfig.copyrightStartYear;
var currYear = new Date().getFullYear();
var copyrightYear = startYear == currYear
  ? currYear
  : startYear + '–' + currYear;

// Public copyright lines - displayed in files visible to the public.
var publicCopyright = filterCopyright(appConfig.copyrightPublic);

// Source code copyright lines - only shown during development.
var sourceCopyright = filterCopyright(appConfig.copyrightSource);

/**
 * Filter the copyright strings to do string substitutions.
 * @param {Array} lines The copyright lines
 */
function filterCopyright(lines) {
  lines.map(function(item) {
    item[0] = item[0].replace('%YEAR%', copyrightYear);
    return item;
  });
  return lines;
}

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
