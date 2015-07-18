#!/usr/bin/env node
// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

'use strict';

var ArgumentParser = require('argparse').ArgumentParser;
var appModulePath = require('app-module-path');
var repov = require('repo-v');
var path = require('path');

// Data from our package, where we keep app-specific configuration.
var packageData = require(__dirname + '/package.json');
var appConfig = packageData._app;

// Add application import paths. By default we add /app/lib/ to the list
// of import paths, allowing easy access to all the main modules.
// See the 'importPaths' key in the package.json file.
for (var n = 0; n < appConfig.importPaths.length; ++n) {
  appModulePath.addPath(__dirname + appConfig.importPaths[n]);
}

// Set up the arguments parser to accept command-line arguments.
var parser = new ArgumentParser({
  version: packageData.version,
  addHelp: true,
  description: appConfig.runDescription,
  epilog: appConfig.runEpilogue
});
parser.addArgument(['-n', '--no-caching'], {
    'nargs': 0,
    'required': false,
    'help': 'Run with caching turned off. Previously generated cache '
      + 'will not be used.'
  }
);
parser.addArgument(['-p', '--port'], {
    'nargs': 1,
    'required': false,
    'help': 'Specifies the listening port (8080).'
  }
);

// Parse the user's command-line arguments.
var args = parser.parseArgs();
// todo: do stuff here.

// Assume production state.
process.env.NODE_ENV = 'production';

// Transpile ES2015+ to ES5. Remove when NodeJS starts supporting ES2015.
require('babel/register');
require('./app/lib/render/server');
