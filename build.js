#!/usr/bin/env node
// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

'use strict';

var path = require('path');
var script = path.basename(__filename);

// Load the program's accepted argument definitions.
var buildArgs = require('./newtasks/argparse/build-args');
var parser = buildArgs.parser;

// Parse command-line arguments.
var args = parser.parseArgs();
var subcommand = process.argv.slice(2, 3)[0];
var task;

try {
  // Run the requested task.
  task = require('./newtasks/' + subcommand);
  task.fn.apply(null, [__dirname, args]);
}
catch (e) {
  // In the event that a script doesn't exist or can't be called somehow.
  console.log(script + ': error: Could not load task script: '
    + subcommand + '.js');
  console.log(e);
  process.exit(1);
}
