// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import React from 'react';
import Router, { DefaultRoute, Route, Redirect } from 'react-router';

import Interface from 'components/Interface';
import Home from 'pages/Home';
import About from 'pages/About';
import Help from 'pages/Help';
import Contact from 'pages/Contact';

const routes = (
  <Route handler={Interface}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="about" path="about" handler={About} />
    <Route name="help" path="help" handler={Help} />
    <Route name="contact" path="contact" handler={Contact} />
    <Redirect from="company" to="about" />
  </Route>
);

export default routes;
