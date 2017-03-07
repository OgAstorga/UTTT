'use strict';

import React, { PropTypes } from 'react';

require('styles//SmallBoard.css');

let calcBoardWinner = (board) => {
  board = board.join('');

  let winner;

  // Horizontal lines
  for (let i=0; i<3; ++i) {
    winner = board[i*3];
    for (let j=0; j<3; ++j) {
      if (winner !== board[i*3 + j]) {
        winner = '.';
      }
    }

    if (winner !== '.') {
      return winner;
    }
  }

  // Vertical lines
  for (let i=0; i<3; ++i) {
    winner = board[i];
    for (let j=0; j<3; ++j) {
      if (winner !== board[i + j*3]) {
        winner = '.';
      }
    }

    if (winner !== '.') {
      return winner;
    }
  }

  // Diagonals
  winner = board[0];
  for (let i=0; i<3; ++i) {
    if (winner !== board[i*3 + i]) {
      winner = '.';
    }
  }

  if (winner !== '.') {
    return winner;
  }

  winner = board[0 + 2];
  for (let i=0; i<3; ++i) {
    if (winner !== board[i*3 + (2-i)]) {
      winner = '.';
    }
  }

  if (winner !== '.') {
    return winner;
  }

  return '.';
}

let SmallBoardComponent = (props) => {
  const { board } = props;

  const boardWinner = calcBoardWinner(board);

  let className = 'smallboard-component';
  if (boardWinner !== '.') {
    className += ` player-${boardWinner}`;
  }

  return (
    <div className={className}>
      <pre>{board.join('\n')}</pre>
    </div>
  );
}

SmallBoardComponent.displayName = 'SmallBoardComponent';

SmallBoardComponent.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SmallBoardComponent;
