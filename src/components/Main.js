require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import BigBoardComponent from './BigBoardComponent';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player: 'o',
      board: [
        '.........',
        '.........',
        '.........',
        '.........',
        '.........',
        '.........',
        '.........',
        '.........',
        '.........'
      ],
      lastPlay: [-1, -1]
    };
  }

  setBoardState(x, y) {
    let { board, player } = this.state;

    // Change board
    board[x] = board[x].split('').map((c,i) => i===y ? player : c).join('');

    // Toggle player
    player = (player === 'o') ? 'x' : 'o';

    // Last play
    const lastPlay = [x, y];

    this.setState({
      board,
      player,
      lastPlay
    });
  }

  render() {
    return (
      <div>
        <BigBoardComponent
          board={this.state.board}
          lastPlay={this.state.lastPlay}
          setBoardState={this.setBoardState.bind(this)}
        />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
