// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import React from 'react';
import Router from 'react-router';

const Link = Router.Link;
const RouteHandler = Router.RouteHandler;

const navbarItems = [
  {
    'to': 'about',
    'label': 'About us',
    'params': {userId: '123'}
  },
  {
    'to': 'help',
    'label': 'Need help?'
  },
  {
    'to': 'contact',
    'label': 'Drop us a line'
  }
];

export default class Interface extends React.Component {
  /**
   * Renders the top navigation bar.
   *
   * @param {Object} items The navbar items to display
   * @returns {XML}
   * @private
   */
  _renderNavbar(items) {
    return (
      <ul className="navbar">
        {items.map(function(item, n) {
          return (
            <li key={n} className="item">
              <Link to={item.to} params={item.params}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  /** @returns {XML} */
  render() {
    return (
      <div>
        <h1><Link to="home">Dada Boilerplate</Link></h1>
        {this._renderNavbar(navbarItems)}
        <RouteHandler />
      </div>
    );
  }
}
