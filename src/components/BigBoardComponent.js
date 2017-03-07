'use strict';

import React, { Component, PropTypes } from 'react';

import SmallBoard from './SmallBoardComponent';

require('styles//BigBoard.css');

class BigBoardComponent extends Component {
  render() {
    // Break board into small boards
    const { board } = this.props;

    const segmentedBoard = board
      .map(row => row.match(/.{3}/g))
      .reduce((obj, row, it) => {
        const bigRow = Math.floor(it / 3);

        row.forEach((col, bigCol) => {
          obj[bigRow] = obj[bigRow] || [];
          obj[bigRow][bigCol] = obj[bigRow][bigCol] || [];

          obj[bigRow][bigCol].push(col)
        });

        return obj;
      }, [])

    return (
      <div className="bigboard-component">
        {segmentedBoard.map(row => row.map(board =>
          <SmallBoard board={board} />
        ))}
      </div>
    );
  }
}

BigBoardComponent.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BigBoardComponent;
