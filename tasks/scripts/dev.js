// Copyright (C) 2012-2015, Let's Deliver - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

var grunt = require('grunt');
var copyright = require('../helpers/copyright.js');

module.exports = grunt.registerTask(
  'dev',
  'Runs a development server on localhost:8080.',
  function() {
    process.env.NODE_ENV = 'development';
    copyright.print();
    grunt.task.run('copy:assets');
    //grunt.task.run('sprite');
    grunt.task.run('webpack-dev-server');
  }
);
