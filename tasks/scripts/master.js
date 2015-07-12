// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

var grunt = require('grunt');
var copyrightInfo = require('../helpers/copyright-info.js');

module.exports = grunt.registerTask(
  'master',
  'Compiles a master release of the project that\'s CDN-ready.',
  function() {
    process.env.NODE_ENV = 'production';
    grunt.log.write(copyrightInfo.string('source', true));

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
