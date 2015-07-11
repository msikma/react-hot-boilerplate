// Copyright (C) 2014-2015, Reisan Ltd. - All rights reserved.
// This file is proprietary and confidential. For more information,
// see the 'copyright.md' file, which is part of this source code package.

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
