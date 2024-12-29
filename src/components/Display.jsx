import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ currentInput }) => {
  return (
    <div id="display">
      <span>{currentInput}</span>
    </div>
  );
};

Display.propTypes = {
  currentInput: PropTypes.string.isRequired,
};

export default Display;
