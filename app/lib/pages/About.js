// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import React from 'react';

import ClickMe from 'components/ClickMe/ClickMe';

export default class About extends React.Component {
  /** @returns {XML} */
  render() {
    return (
      <div>
        <h2>About page</h2>
        <ClickMe showCount={true} />
      </div>
    );
  }
}
