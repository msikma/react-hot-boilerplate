// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import Alt from 'etc/Alt';
import ClickMeActions from './ClickMeActions';

class ClickMeStore {
  constructor() {
    this.amount = 0;
    this.bindAction(ClickMeActions.clickIt, this.clickIt);
  }

  /**
   * Increments the button click amount.
   *
   * @param {Object} state
   */
  clickIt(state) {
    this.amount += 1;
  }
}

export default Alt.createStore(ClickMeStore);
