#!/usr/bin/env node
// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

'use strict';

var ArgumentParser = require('argparse').ArgumentParser;
var repov = require('repo-v');

var testScripts = [
  {
    'name': 'dev',
    'help': 'Runs hot reloading dev server at localhost.'
  },
  {
    'name': 'staging',
    'help': 'Creates a staging build in /public/.'
  },
  {
    'name': 'production',
    'help': 'Creates a production build in /public/.'
  },
  {
    'name': 'clean',
    'help': 'Empties out the /public/ directory.'
  },
  {
    'name': 'copy',
    'help': 'Copies over static assets.'
  },
  {
    'name': 'lint',
    'help': 'Checks code correctness using ESLint and JSCS.'
  }
];
var testArguments = [
  {
    'arg': ['-p', '--port'],
    'nargs': 1,
    'required': false,
    'help': 'Specifies the listening port for the dev server (default: 8080).'
  }
];

// Data from our package, where we keep app-specific configuration.
var packageData = require(__dirname + '/../../package.json');
var appConfig = packageData._app;
var appVersion = packageData.name + ', v' + packageData.version
  + ' (' + repov.getVersion() + ')';

// Set up the arguments parser to accept command-line arguments.
var rootParser;               // The main parser.
var renderParser;             // Parser for the 'render' sub-command.
var buildParser;              // Parser for the 'build' sub-command.

// Sub-parsers for setting up the sub-commands.
var rootSubparsers, buildSubparsers;

rootParser = new ArgumentParser({
  'version': appVersion,
  'addHelp': true,
  'description': 'React Hot Boilerplate front-end build and render script.',
  'epilog': 'See <http://github.com/some/url> for more information.'
});
rootSubparsers = rootParser.addSubparsers();
rootSubparsers.addParser('dev', {
  'help': 'Runs hot reloading dev server at localhost.'
});
rootSubparsers.addParser('staging', {
  'help': 'Creates a staging build in /public/.'
});
rootSubparsers.addParser('production', {
  'help': 'Creates a production build in /public/.'
});
rootSubparsers.addParser('clean', {
  'help': 'Empties out the /public/ directory.'
});
rootSubparsers.addParser('copy', {
  'help': 'Copies over static assets.'
});
rootSubparsers.addParser('lint', {
  'help': 'Checks code correctness using ESLint and JSCS.'
});
rootParser.addArgument(['-p', '--port'], {
  'nargs': 1,
  'required': false,
  'help': 'Specifies the listening port for the dev server (default: 8080).'
});

module.exports = {
  'parser': rootParser,
  'packageData': packageData,
  'appConfig': appConfig,
  'appVersion': appVersion
};
