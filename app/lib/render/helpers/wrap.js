// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import jade from 'jade';
import path from 'path';
import os from 'os';

import copyrightInfo from 'etc/copyright-info';
import buildInfo from 'etc/build-info';

const templatesPath = path.resolve('app/assets/templates') + '/';

// Default variables, available in every file.
const jadeDefaultVars = {
  'showCopyrightComment': process.env.NODE_ENV == 'production',
  'showBuildComment': process.env.NODE_ENV == 'development',
  'showBuildTag': true,
  'showMeta': true,
  'copyright': os.EOL + copyrightInfo.string('public').trim(),
  'build': os.EOL + buildInfo.string().trim(),
  'buildOneLiner': buildInfo.oneLiner()
};
const prettyPrint = {
  'pretty': '  '
};

// Default variables for every various Jade template we use.
const jadeIndexVars = Object.assign(jadeDefaultVars, {
  'jsBundle': 'bundle.js'
});
const jadeErrorVars = Object.assign(jadeDefaultVars, {
  'responseCode': '404',
  'showMeta': false
});

// Compiled Jade templates.
const jadeIndex = jade.compileFile(templatesPath + 'index.jade', prettyPrint);
const jadeError = jade.compileFile(templatesPath + 'error.jade', prettyPrint);

/**
 * Wrap the output of our React app into an HTML template container.
 * This runs the Jade compiler (with the React output HTML string as one of
 * its arguments) and returns the output.
 *
 * @param {Object} vars An object containing HTML and XHR data
 * @param {String} type Template type to render
 * @returns {String} Rendered HTML to be output to the end user
 */
function wrapOutput(vars, type='standard') {
  if (type == 'standard') {
    return jadeIndex(Object.assign(jadeIndexVars, vars));
  }
  if (type == 'error') {
    return jadeError(Object.assign(jadeErrorVars, vars));
  }
}

export default wrapOutput;
