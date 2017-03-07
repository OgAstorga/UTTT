require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import BigBoardComponent from './BigBoardComponent';

class AppComponent extends React.Component {
  render() {
    const board = '.........\n.........\n.........\n.........\n.........\n.........\n.........\n.........\n.........';

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
