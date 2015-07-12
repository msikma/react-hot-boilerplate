// React Hot Boilerplate (replace this copyright notice with your own)
// (C) 2015, Michiel Sikma <michiel@sikma.org>
// MIT License

import Alt from 'etc/Alt';

class ExampleActions {
  nextStep(state) {
    this.dispatch(state);
  }
  getLesson() {
    // perform call for json data
    var fakeData = {
      'name': 'Basic particles',
      'id': 1234,
      'chapter': 1,
      'seq': 4,
      'steps': [
        {
          'title': 'Basic particles',
          'content': 'This is *example text* containing **markdown** rendering',
          'contentType': 'text/markdown',
          'layout': 0
        },
        {
          'title': 'も particle',
          'content': 'Here\'s more example text.\n\n# header\n\nMore text',
          'contentType': 'text/markdown',
          'layout': 1,
          'image': {
            'src': '/lesson-content/1/4/particle-info.png',
            'width': 400,
            'height': 300,
            'ratios': [2]
          }
        }
      ]
    };
    this.dispatch(fakeData);
  }
}

export default Alt.createActions(ExampleActions);
