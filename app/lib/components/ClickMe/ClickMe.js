// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import React from 'react';

import ClickMeActions from './ClickMeActions.js'
import ClickMeStore from './ClickMeStore.js'

export default class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this._getStateFromStores = this._getStateFromStores.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = this._getStateFromStores();
  }

  componentDidMount() {
    ClickMeStore.listen(this._onChange);
  }

  componentWillUnmount() {
    ClickMeStore.unlisten(this._onChange);
  }

  _onChange() {
    this.setState(this._getStateFromStores());
  }

  _getStateFromStores() {
    var state = ClickMeStore.getState();
    return {
      'amount': state.amount
    };
  }

  _clickIt() {
    ClickMeActions.clickIt();
  }
  render() {
    return (
      <div>
        <h3>Click me component (<code>app/lib/components/ClickMe/</code>)</h3>
        {this.props.showCount == true ?
          <p>You've pressed this button {this.state.amount} times.</p>
        :
          <p>Who knows how many times you've clicked this?</p>
        }
        <button onClick={this._clickIt}>Click me</button>
      </div>
    );
  }
}
