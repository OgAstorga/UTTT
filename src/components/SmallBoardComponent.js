'use strict';

import React, { PropTypes } from 'react';

require('styles//SmallBoard.css');

let SmallBoardComponent = (props) => {
  const { board } = props;

  return (
    <div className="smallboard-component">
      <pre>{board}</pre>
    </div>
  );
}

SmallBoardComponent.displayName = 'SmallBoardComponent';

SmallBoardComponent.propTypes = {
  board: PropTypes.string.isRequired
};

export default SmallBoardComponent;
