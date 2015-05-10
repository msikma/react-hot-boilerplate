module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),
    'webpack-dev-server': {
      'dev': {
        'webpack': require('./config/webpack.config.js'),
        'publicPath': '/scripts/',
        'keepalive': true,
        'port': 3000,
        'hot': true,
        'historyApiFallback': true
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-webpack');
};
