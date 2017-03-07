'use strict';

import React, { Component, PropTypes } from 'react';

require('styles//BigBoard.css');

class BigBoardComponent extends Component {
  render() {
    // Break board into small boards
    const { board } = this.props;

    return (
      <div className="bigboard-component">
        <pre>{board}</pre>
      </div>
    );
  }
}

BigBoardComponent.propTypes = {
  board: PropTypes.string.isRequired
};

export default BigBoardComponent;
