import Alt from 'etc/Alt';
import ClickMeActions from './ClickMeActions';

class ClickMeStore {
  constructor() {
    this.amount = 0;
    this.bindAction(ClickMeActions.clickIt, this.clickIt);
  }
  clickIt(state) {
    this.amount += 1;
  }
}

export default Alt.createStore(ClickMeStore);