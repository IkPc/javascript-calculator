import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ currentInput }) => {
  console.log(`Display Component - currentInput: ${currentInput}`);
  return (
    <div className="display">
      <input id='display' type="text" value={currentInput} onChange={() => {}} readOnly />
    </div>
  );
};

Display.propTypes = {
  currentInput: PropTypes.string.isRequired,
};

export default Display;
