var path = require('path');

function requireTask(task) {
  return require(path.join(process.cwd(), 'tasks', task + '.js'));
}

module.exports = function(grunt) {
  'use strict';
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'webpack-dev-server': requireTask('webpack-dev-server'),
    'jshint': requireTask('jshint')
  });
};
