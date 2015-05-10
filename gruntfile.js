// blah blah

var path = require('path');

/**
 * Loads a task definition file.
 *
 * @param {String} task The task to load inside the /tasks/ directory
 * @returns {*} The return value of the require() call
 */
function requireTask(task) {
  return require(path.join(process.cwd(), 'tasks', task + '.js'));
}

module.exports = function(grunt) {
  'use strict';
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'webpack-dev-server': requireTask('webpack-dev-server'),
    'eslint': requireTask('eslint'),
    'jscs': requireTask('jscs')
  });
};
