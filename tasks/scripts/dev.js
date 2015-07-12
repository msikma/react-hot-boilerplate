// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

var grunt = require('grunt');
var copyrightInfo = require('../helpers/copyright-info.js');

module.exports = grunt.registerTask(
  'dev',
  'Runs a development server on localhost:8080.',
  function() {
    process.env.NODE_ENV = 'development';
    copyrightInfo.print('source', true);

    // Copy over the public assets.
    grunt.task.run('newer:copy:root');
    grunt.task.run('newer:copy:images');

    // Generate the index.html file.
    grunt.task.run('jade:dev');

    // Generate spritesheets.
    //grunt.task.run('sprite');

    // Generate the JS bundles.
    grunt.task.run('webpack-dev-server');
  }
);
