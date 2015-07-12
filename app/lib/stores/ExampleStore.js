// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import Alt from 'etc/Alt';
import ExampleActions from 'actions/ExampleActions';

class ExampleStore {
  constructor() {
    this.step = 0;
    this.lastStep = 6;
    this.bindAction(ExampleActions.nextStep, this.nextStep);
  }

  getLesson() {
    this.lessonData = ExampleActions.getLesson();
    console.log('getLesson() return state from action: %o', this.lessonData);
  }

  nextStep(state) {
    this.step += 1;
    if (this.step > this.lastStep) {
      this.step = this.lastStep;
    }
  }
}

export default Alt.createStore(ExampleStore);
