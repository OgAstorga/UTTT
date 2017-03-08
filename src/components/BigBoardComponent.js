'use strict';

import React, { Component, PropTypes } from 'react';

import SmallBoard from './SmallBoardComponent';

require('styles//BigBoard.css');

import calcBoardWinner from '../helpers/calcBoardWinner';

class BigBoardComponent extends Component {
  render() {
    const {
      board,
      lastPlay
    } = this.props;

    // Break board into small boards
    const segmentedBoard = board
      .map(row => row.match(/.{3}/g))
      .reduce((obj, row, it) => {
        const bigRow = Math.floor(it / 3);

        row.forEach((col, bigCol) => {
          obj[bigRow] = obj[bigRow] || [];
          obj[bigRow][bigCol] = obj[bigRow][bigCol] || [];

          obj[bigRow][bigCol].push(col);
        });

        return obj;
      }, []);


    // Calc small board winners
    let zoomedOut = [ [], [], [] ];
    let playableRegion = [ [], [], [] ];

    for (let i=0; i<3; ++i) {
      for (let g=0; g<3; ++g) {
        zoomedOut[i][g] = calcBoardWinner(segmentedBoard[i][g]);
        playableRegion[i][g] = (
          zoomedOut[i][g] === '.' &&
          segmentedBoard[i][g].join('').indexOf('.') !== -1
        )
      }
    }

    // Calc valid regions
    let [ nx, ny ] = lastPlay.map(d => {
      if (d === -1) {
        return -1;
      } else {
        return d % 3;
      }
    });

    if ((nx !== -1 && ny !== -1) && playableRegion[nx][ny]) {
      for (let i=0; i<3; ++i) {
        for (let g=0; g<3; ++g) {
          playableRegion[i][g] = (nx === i) && (ny === g);
        }
      }
    }

    return (
      <div className="bigboard-component">
        {[0,1,2].map(it =>
          <div className="row">
            {[0,1,2].map(gt =>
              <SmallBoard
                bigRow={it}
                bigCol={gt}
                board={segmentedBoard[it][gt]}
                winner={zoomedOut[it][gt]}
                playable={playableRegion[it][gt]}
                setBoardState={this.props.setBoardState}
              />
            )}
            <div className="clearfix"></div>
          </div>
        )}
      </div>
    );
  }
}

BigBoardComponent.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BigBoardComponent;
