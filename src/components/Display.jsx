import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ currentInput }) => {
  console.log(`Display Component - currentInput: ${currentInput}`);
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
