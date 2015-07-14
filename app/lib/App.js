// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import React from 'react';
import Router from 'react-router';

import Interface from 'components/Interface';
import About from 'pages/About';
import Contact from 'pages/Contact';

const Route = Router.Route;
const routes = (
  <Route handler={Interface}>
    <Route name="about" path="about" handler={About} />
    <Route name="contact" path="contact" handler={Contact} />
    <Redirect from="company" to="about" />
  </Route>
);

// Listen for URL changes and render the application.
Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById('root'));
});
