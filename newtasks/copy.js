#!/usr/bin/env node
// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

'use strict';

/**
 * Copies files from one directory to another. Defaults to smart copy
 * (only copy if the target file is older than the source file).
 *
 * @param {String} baseDir Base directory of the main package
 * @param {Object} cliArgs Command-line arguments
 * @param {Object} settings Configuration specific to the task target
 */
function taskCopy(baseDir, cliArgs, settings) {
    console.log(baseDir, cliArgs);
    console.log('a');
}

module.exports = {
  'fn': taskCopy,
  'author': 'Michiel Sikma <michiel@sikma.org> (http://michielsikma.com/)',
  'license': 'MIT'
};
