#!/usr/bin/env node
// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

'use strict';

var ArgumentParser = require('argparse').ArgumentParser;
var repov = require('repo-v');

// Data from our package, where we keep app-specific configuration.
var packageData = require(__dirname + '/../../package.json');
var appConfig = packageData._app;
var appVersion = packageData.name + ', v' + packageData.version
  + ' (' + repov.getVersion() + ')';

// Set up the arguments parser to accept command-line arguments.
var rootParser;
var rootSubparsers, buildSubparsers;

rootParser = new ArgumentParser({
  'version': appVersion,
  'addHelp': true,
  'description': 'Runs production server at localhost:9000 (by default) and '
    + 'serves rendered HTML. To be used in conjunction with the built files. '
    + 'This server requires a more heavy-duty httpd like Apache or Nginx as '
    + 'reverse proxy when running in production.',
  'epilog': 'See <http://github.com/some/url> for more information.'
});
rootParser.addArgument(['-n', '--no-caching'], {
  'nargs': 0,
  'defaultValue': false,
  'required': false,
  'help': 'Runs with caching turned off (previously generated cache '
    + 'will not be used).'
});
rootParser.addArgument(['-p', '--port'], {
  'nargs': 1,
  'defaultValue': 9000,
  'required': false,
  'help': 'Specifies the listening port (default: 9000).'
});

module.exports = {
  'parser': rootParser,
  'packageData': packageData,
  'appConfig': appConfig,
  'appVersion': appVersion
};
