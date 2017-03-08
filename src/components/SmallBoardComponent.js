'use strict';

import React, { Component, PropTypes } from 'react';

require('styles//SmallBoard.css');

class SmallBoardComponent extends Component {
  setBoardState(it, gt) {
    const {
      board,
      bigRow,
      bigCol,
      playable,
      setBoardState
    } = this.props;

    if (playable && board[it][gt] === '.' && setBoardState) {
      setBoardState(bigRow*3 + it, bigCol*3 + gt);
    }
  }

  render() {
    const {
      board,
      winner,
      playable
    } = this.props;

    let className = 'smallboard-component';
    if (winner !== '.') {
      className += ` player-${winner}`;
    }

    if (playable) {
      className += ' playable';
    }

    return (
      <div className={className}>
        {board.map((row, it) =>
          <div className="row">
            {row.split('').map((cell, gt) =>
              <div className="cell">
                <div className="inner">
                  <div
                    className={`game game-${cell}`}
                    onClick={this.setBoardState.bind(this, it, gt)}
                  />
                </div>
              </div>
            )}
            <div className="clearfix"></div>
          </div>
        )}
      </div>
    );
  }
}

SmallBoardComponent.displayName = 'SmallBoardComponent';

SmallBoardComponent.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SmallBoardComponent;
