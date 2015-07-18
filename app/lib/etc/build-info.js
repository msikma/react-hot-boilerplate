// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

'use strict';

// Note: this file is in ES5 so that it can be used by Grunt
// without the need for transpilation.

var EOL = require('os').EOL;
var repov = require('repo-v');
var path = require('path');
var packageData = require(path.join(process.cwd(), 'package.json'));

/**
 * Returns a date string as a UTC string.
 *
 * @returns {String} The current date in UTC
 */
function getDateString() {
  // toUTCString() returns 'GMT' in its output as per the spec.
  return new Date().toUTCString().replace('GMT', 'UTC');
}

/**
 * Returns build information string array.
 *
 * @returns {Array} The build information items
 */
function getBuildLines() {
  return [
    packageData.name,
    'Version: ' + packageData.version,
    'Build: ' + repov.getVersion(),
    'Timestamp: ' + getDateString()
  ]
}

/**
 * Returns build information as a one-liner without linebreaks.
 *
 * @returns {String} The build information string in one line
 */
function getBuildOneLiner() {
  return repov.getVersion();
}

/**
 * Returns a multiline string containing build information: the package name
 * and version, the current Git repository state, and finally a timestamp.
 *
 * @param {String} indent Optionally, an indent string after the linebreaks
 * @returns {String} The build information string
 */
function getBuildString(indent) {
  if (!indent) indent = '';
  var lines = getBuildLines();
  return lines.join(EOL + indent);
}

module.exports = {
  'oneLiner': getBuildOneLiner,
  'lines': getBuildLines,
  'string': getBuildString
};
