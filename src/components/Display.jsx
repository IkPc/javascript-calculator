import React, { useState } from 'react';

const Display = () => {
  const [currentInput, setCurrentInput] = useState('');

  return (
    <div className="display">
      <input id='display' type="text" value={currentInput} readOnly />
    </div>
  );
};

export default Display;
