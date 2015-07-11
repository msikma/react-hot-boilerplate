// Copyright (C) 2012-2015, Let's Deliver - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

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
