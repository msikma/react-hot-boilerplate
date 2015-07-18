// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import React from 'react';
import Router from 'react-router';

import routes from './routes';

// Listen for URL changes and render the application.
Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById('root'));
});
