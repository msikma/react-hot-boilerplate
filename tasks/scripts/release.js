// Copyright (C) 2012-2015, Let's Deliver - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

var grunt = require('grunt');
var copyright = require('../helpers/reisan-copyright.js');

module.exports = grunt.registerTask(
  'dev',
  'Runs a development server on localhost:3000.',
  function() {
    process.env.NODE_ENV = 'development';
    copyright.print();
    grunt.task.run('newer:copy:html');
    grunt.task.run('newer:copy:images');
    grunt.task.run('sprite');
    grunt.task.run('webpack-dev-server');
  }
);
