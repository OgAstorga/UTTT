require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import BigBoardComponent from './BigBoardComponent';

class AppComponent extends React.Component {
  render() {
    const board = [
      'xxx.oxoo.',
      '.o.ox.xx.',
      '..ox.x.o.',
      'o.x.x....',
      'xxoxxo.o.',
      'ooxox.x..',
      '.x...o..o',
      'oooxxx.o.',
      '.x...ooxx'
    ];

    return (
      <div>
        <BigBoardComponent board={board} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
