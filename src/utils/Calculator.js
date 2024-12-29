import * as math from 'mathjs';

const handleButtonClick = (input = '0', value) => {

  switch (value) {
    case 'AC':
      const resultAC = handleClear();
      return resultAC;
    case '=':
      const resultEqual = handleEqual(input);
      return resultEqual;
    case '+':
    case '-':
    case '*':
    case '/':
      const resultOperator = handleOperator(input, value);
      return resultOperator;
    case '.':
      const resultDecimal = handleDecimal(input);
      return resultDecimal;
    default:
      const resultNumeric = handleNumeric(input, value);
      return resultNumeric;
  }
};

const handleClear = () => {
  return '0';
};

const handleEqual = (input) => {
  try {
    const result = math.evaluate(input).toString();
    return result;
  } catch (error) {
    return 'Error';
  }
};

const handleNumeric = (input, value) => {
  if (input === '0' || input === 'Error') {
    return value;
  }
  return input + value;
};

const handleDecimal = (input) => {
  if (input === 'Error') return '0.';
  
  const numbers = input.split(/[^0-9.]/);
  const lastNumber = numbers[numbers.length - 1];

  if (!lastNumber.includes('.')) {
    return input + '.';
  }
  
  return input;
};

const handleOperator = (input, value) => {
  if (!input || input === 'Error') return value;

  const lastChar = input.slice(-1);
  const secondLastChar = input.slice(-2, -1);

  if ('+-*/'.includes(lastChar)) {
    if (value === '-') {
      return input + value;
    } else {
      if ('+-*/'.includes(secondLastChar)) {
        return input.slice(0, -2) + value;
      } else {
        return input.slice(0, -1) + value;
      }
    }
  }

  return input + value;
};

export default handleButtonClick;
