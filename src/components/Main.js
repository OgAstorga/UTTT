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

  setBoardState(row, col) {
    let { board, player } = this.state;

    // Change board
    board[row] = board[row].split('').map((c,i) => (i === col) ? player : c).join('');

    // Toggle player
    player = (player === 'o') ? 'x' : 'o';

    // Last play
    const lastPlay = [row, col];

    this.setState({
      board,
      player,
      lastPlay
    });
  }

  componentDidUpdate() {
    if (this.state.player === 'x') {
      this.botPlay();
    }
  }

  botPlay() {
    const { lastPlay, board } = this.state;

    const [ urlLastRow, urlLastCol ] = lastPlay;
    const urlBoard = board.join('');

    const host = document.location.hostname;
    const url = `http://${host}:8001?lastrow=${urlLastRow}&lastcol=${urlLastCol}&board=${urlBoard}`;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        const obj = JSON.parse(xhr.responseText);
        console.log(obj.lastMove);
        this.setBoardState(obj.lastMove.y, obj.lastMove.x);
      }
    }

    xhr.open('GET', url, true);
    xhr.send(null);
  }

  render() {
    let setBoardState = () => {};
    if (this.state.player === 'o') {
      setBoardState = this.setBoardState.bind(this);
    }

    return (
      <div>
        <BigBoardComponent
          board={this.state.board}
          lastPlay={this.state.lastPlay}
          setBoardState={setBoardState}
        />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
