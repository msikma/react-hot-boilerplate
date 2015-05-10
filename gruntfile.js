var path = require('path');

function getTaskConfig(task) {
  return path.join(process.cwd(), 'tasks', task + '.js');
}

module.exports = function(grunt) {
  'use strict';
  
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'webpack-dev-server': require(getTaskConfig('webpack-dev-server'))
  });
};
