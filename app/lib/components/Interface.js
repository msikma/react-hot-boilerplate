// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import React from 'react';
import Router from 'react-router';

import ClickMe from './ClickMe/ClickMe';

const Link = Router.Link;
const RouteHandler = Router.RouteHandler;

export default class Interface extends React.Component {
  render() {
    return (
      <div>
        <Link to="about" params={{userId: "123"}}>Link to about</Link>
        <h1>Hello, world.</h1>
        <ClickMe />
        <RouteHandler />
      </div>
    );
  }
}
