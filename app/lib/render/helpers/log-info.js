// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import os from 'os';
import copyrightInfo from 'etc/copyright-info';

/**
 * Returns server environment information and copyright. This is intended
 * only to be displayed inside of a terminal.
 *
 * @param {String} version Main package version number
 * @returns {String} Copyright and server environment information
 */
function getServerInfo(version='unknown version') {
  const copyrightString = copyrightInfo.string('source', true);
  const engineName = process.title == 'node' ? 'Node.js'
    : process.title == 'iojs' ? 'io.js' : '(unknown engine)';
  const engineVersion = process.title +  ' v' + process.versions.node;
  const enginePlatform = process.platform + '-' + process.arch;

  return `${copyrightString}
${version}
Running on ${engineName} (${engineVersion}, ${enginePlatform})`;
}

/**
 * Returns basic information about a request to the Express server.
 * The format used is similar to that of the Flask testing server.
 *
 * @param {Object} req Request that the client made
 * @param {Object} state Routing state
 * @returns {String} Request information as a single string.
 */
function getReqInfo(req, state) {
  const url = req.url;
  const method = req.method;
  const date = new Date();
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const httpVersion = 'HTTP/' + req.httpVersion;
  const dateString = date.toUTCString().replace('GMT', 'UTC');
  const code = state.routes.length > 0 ? 200 : 404;

  // e.g. 127.0.0.1 - [Sun, 19 Jul 2015 09:56:19 UTC] "GET / HTTP/1.1" 200 -
  return (
    ip + ' - '
    + '[' + dateString + '] "'
    + method + ' ' + url +  ' ' + httpVersion + '" '
    + code + ' -'
  );
}

export default { getReqInfo, getServerInfo };
