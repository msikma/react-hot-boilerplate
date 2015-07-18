// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import jade from 'jade';
import path from 'path';
import os from 'os';

import copyrightInfo from 'etc/copyright-info';
import buildInfo from 'etc/build-info';

const templatesPath = path.resolve('app/assets/templates') + '/';
const jadeDefaults = {
  'showCopyrightComment': process.env.NODE_ENV == 'production',
  'showBuildComment': process.env.NODE_ENV == 'development',
  'showBuildTag': true,
  'bundle': 'bundle.js',
  'copyright': os.EOL + copyrightInfo.string('public').trim(),
  'build': os.EOL + buildInfo.string().trim(),
  'buildOneLiner': buildInfo.oneLiner()
};
const jadeRenderer = jade.compileFile(templatesPath + 'index.jade', {
  'pretty': '  '
});

/**
 * Wrap the output of our React app into an HTML template container.
 * This runs the Jade compiler (with the React output HTML string as one of
 * its arguments) and returns the output.
 *
 * @param {Object} jadeVars An object containing HTML and XHR data
 * @returns {String} Rendered HTML to be output to the end user
 */
function wrapOutput(jadeVars) {
  return jadeRenderer(Object.assign(jadeVars, jadeDefaults));
}

export default wrapOutput;
