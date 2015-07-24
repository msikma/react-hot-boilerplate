// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

var grunt = require('grunt');

module.exports = grunt.registerTask(
  'render',
  'Starts the rendering server on localhost:9000.',
  function() {
    // Assume production state.
    process.env.NODE_ENV = 'production';

    var appModulePath = require('app-module-path');
    var path = require('path');

    // Data from our package, where we keep app-specific configuration.
    var packageData = require('../../package.json');
    var appConfig = packageData._app;

    // Add application import paths. By default we add /app/lib/ to the list
    // of import paths, allowing easy access to all the main modules.
    // See the 'importPaths' key in the package.json file.
    for (var n = 0; n < appConfig.importPaths.length; ++n) {
      appModulePath.addPath(__dirname + appConfig.importPaths[n]);
    }

    // Transpile ES2015+ to ES5. Remove when NodeJS starts supporting ES2015.
    require('babel/register');
    require('../../app/lib/render/server');

    this.async();
  }
);
