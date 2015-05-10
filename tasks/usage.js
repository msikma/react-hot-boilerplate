// Copyright (C) 2012-2015, Let's Deliver - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

// Helper function to print the copyright.
var copyright = require('./helpers/reisan-copyright.js');

module.exports = {
  'options': {
    'title': copyright.lines(),
    'formatting': {
      'addPeriod': true
    },
    'taskGroups': [
      {
        'header': 'Build scripts',
        'tasks': ['dev']
      },
      {
        'header': 'Other tasks',
        'tasks': ['jscs']
      }
    ],
    'taskDescriptionOverrides': {
      'jscs': 'hi'
    }
  }
};
