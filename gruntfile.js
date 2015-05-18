// blah blah

var path = require('path');

function requireTask(task) {
  return require(path.join(process.cwd(), 'tasks', task + '.js'));
}
function requireScript(script) {
  return require(path.join(process.cwd(), 'tasks/scripts', script + '.js'));
}

module.exports = function(grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    // Webpack - bundle compilation and resource compression toolset
    'webpack': requireTask('webpack'),
    'webpack-dev-server': requireTask('webpack-dev-server'),

    // eslint - tests code quality
    'eslint': requireTask('eslint'),

    // Copy - copies over static assets
    'copy': requireTask('copy'),

    // Clean - cleans files and folders
    'clean': requireTask('clean'),

    // JSCS - tests code style
    'jscs': requireTask('jscs'),

    // Usage - displays usage information in a user-friendly manner
    'usage': requireTask('usage')
  });

  // Build scripts.
  requireScript('dev');
  requireScript('release');
};
