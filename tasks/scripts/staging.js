// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

var grunt = require('grunt');
var copyrightInfo = require('../../app/lib/etc/copyright-info.js');

module.exports = grunt.registerTask(
  'staging',
  'Compiles a staging release version of the project.',
  function() {
    process.env.NODE_ENV = 'development';
    grunt.log.writeln(copyrightInfo.string('source', true));

    // Copy over the public assets.
    grunt.task.run('newer:copy:root');
    grunt.task.run('newer:copy:images');

    // Generate the index.html file.
    grunt.task.run('jade:staging');

    // Generate spritesheets.
    //grunt.task.run('sprite');

    // Generate the JS bundles.
    //grunt.task.run('webpack');
  }
);
