import Alt from 'etc/Alt';

class ClickMeActions {
  clickIt(state) {
    this.dispatch(state);
  }
}

export default Alt.createActions(ClickMeActions);
