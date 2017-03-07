require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import BigBoardComponent from './BigBoardComponent';

class AppComponent extends React.Component {
  render() {
    const board =
      'xxx.oxoo.\n.o.ox.xx.\n..ox.x.o.\no.x.x....\nxxoxox.o.\nooxox.x..\n.x...o..o\noooxxx.o.\n.x...ooxx';

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
