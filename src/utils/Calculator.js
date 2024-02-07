import { useState } from 'react';
import { evaluate } from 'mathjs';

export const useCalculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEqual = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return {
    input,
    handleButtonClick,
    handleEqual,
    handleClear,
  };
};
