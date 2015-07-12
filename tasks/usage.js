// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

// Helper function to print the copyright.
var copyrightInfo = require('./helpers/copyright-info.js');

module.exports = {
  'options': {
    'title': copyrightInfo.lines('source', true),
    'description': 'Task runner script for [Project name].',
    'formatting': {
      'addPeriod': true
    },
    'taskGroups': [
      {
        'header': 'Build scripts',
        'tasks': ['dev', 'staging', 'master']
      },
      {
        'header': 'Code validation',
        'tasks': ['eslint', 'jscs']
      },
      {
        'header': 'Other tasks',
        'tasks': ['copy', 'clean']
      }
    ],
    'taskDescriptionOverrides': {

    }
  }
};
