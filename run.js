#!/usr/bin/env node
// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

'use strict';

// Load the program's accepted argument definitions,
// and the available scripts.
var renderArgs = require('./newtasks/argparse/render-args');
var parser = renderArgs.parser;

// Parse command-line arguments.
var args = parser.parseArgs();

// Start the server and hand the controls over to Express.
runServer(args);

/**
 * Starts our rendering server at localhost:9000 by default.
 *
 * The site is written in ES2015, so in order to run in an ES5-only
 * environment we register the BabelJS transpiler before loading the code.
 *
 * @param {Object} args Parsed command-line arguments
 */
function runServer(args) {
  var appModulePath = require('app-module-path');

  // Data from our package, where we keep app-specific configuration.
  var packageData = require(__dirname + '/package.json');
  var appConfig = packageData._app;

  // Add application import paths. By default we add /app/lib/ to the list
  // of import paths, allowing easy access to all the main modules.
  // See the 'importPaths' key in the package.json file.
  for (var n = 0; n < appConfig.importPaths.length; ++n) {
    appModulePath.addPath(__dirname + appConfig.importPaths[n]);
  }

  // Assume production state.
  process.env.NODE_ENV = 'production';

  // Transpile ES2015+ to ES5. Remove when NodeJS starts supporting ES2015.
  require('babel/register');
  var listen = require('./app/lib/render/server');

  listen.apply(null, [
    parseInt(args.port, 10),
    args.no_caching,
    renderArgs.packageData,
    renderArgs.appVersion
  ]);
}
