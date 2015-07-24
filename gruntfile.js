// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

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

    // Jade - compiles Jade templates into HTML
    'jade': requireTask('jade'),

    // Usage - displays usage information in a user-friendly manner
    'usage': requireTask('usage')
  });

  // Load the three main build scripts.
  requireScript('dev');
  requireScript('staging');
  requireScript('master');
  requireScript('render');

  // Display the usage information by default.
  grunt.registerTask('default', ['usage']);
};
