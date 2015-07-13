// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

'use strict';

var ArgumentParser = require('argparse').ArgumentParser;
var appModulePath = require('app-module-path');
var repov = require('repo-v');

// Data from our package, where we keep app-specific configuration.
var packageData = require(__dirname + '/package.json');
var appConfig = packageData._app;

// Add application import aliases. By default we add /app/lib/ to the list
// of import paths, allowing easy access to all the main modules.
// See the 'importAliases' key in the package.json file.
for (var n = 0; n < appConfig.importAliases.length; ++n) {
  appModulePath.addPath(__dirname + appConfig.importAliases[n]);
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

// Transpile ES2015+ to ES5. Remove when NodeJS starts supporting ES2015.
require('babel/register');
require('./app/lib/render/server');
