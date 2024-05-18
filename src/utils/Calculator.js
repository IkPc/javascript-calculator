import * as math from 'mathjs';

const handleButtonClick = (input = '0', value) => {
  console.log(`Input before click: ${input}, Value: ${value}`);

  switch (value) {
    case 'AC':
      const resultAC = handleClear();
      console.log(`Result after 'AC': ${resultAC}`);
      return resultAC;
    case '=':
      const resultEqual = handleEqual(input);
      console.log(`Result after '=': ${resultEqual}`);
      return resultEqual;
    case '+':
    case '-':
    case '*':
    case '/':
      const resultOperator = handleOperator(input, value);
      console.log(`Result after operator button: ${resultOperator}`);
      return resultOperator;
    case '.':
      const resultDecimal = handleDecimal(input);
      console.log(`Result after '.': ${resultDecimal}`);
      return resultDecimal;
    default:
      const resultNumeric = handleNumeric(input, value);
      console.log(`Result after numeric button: ${resultNumeric}`);
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
  const lastNumber = input.split(/[\+\-\*\/]/).pop();
  if (!lastNumber.includes('.')) {
    return input + '.';
  }
  return input;
};

const handleOperator = (input, value) => {
  if (!input) return value;
  if (input === 'Error') return value;

  const lastChar = input.slice(-1);
  const secondLastChar = input.slice(-2, -1);

  if ('+-*/'.includes(lastChar)) {
    if (value === '-' && !'+-*/'.includes(secondLastChar)) {
      return input + value;
    }
    return input.slice(0, -1) + value;
  }

  return input + value;
};

export default handleButtonClick;
