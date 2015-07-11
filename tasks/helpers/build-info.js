// Copyright (C) 2014-2015, Reisan Ltd. - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

var grunt = require('grunt');
var EOL = require('os').EOL;
var repov = require('repo-v');
var path = require('path');
var packageData = require(path.join(process.cwd(), 'package.json'));

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
    // toUTCString() returns 'GMT' in its output as per the spec.
    'Timestamp: ' + new Date().toUTCString().replace('GMT', 'UTC')
  ]
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

/**
 * Prints the build info directly to the terminal.
 *
 * @param {String} indent Optionally, an indent string after the linebreaks
 */
function printBuild(indent) {
  grunt.log.write(getBuildString(indent));
}

module.exports = {
  'lines': getBuildLines,
  'string': getBuildString,
  'print': printBuild
};
