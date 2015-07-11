// Copyright (C) 2012-2015, Let's Deliver - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

var grunt = require('grunt');
var copyrightInfo = require('../helpers/copyright-info.js');

module.exports = grunt.registerTask(
  'master',
  'Compiles a master release of the project that\'s CDN-ready.',
  function() {
    process.env.NODE_ENV = 'production';
    copyrightInfo.print();

    // Copy over the public assets.
    grunt.task.run('newer:copy:root');
    grunt.task.run('newer:copy:images');

    // Generate the index.html file.
    grunt.task.run('jade:master');

    // Generate spritesheets.
    //grunt.task.run('sprite');

    // Generate the JS bundles.
    //grunt.task.run('webpack');
  }
);
