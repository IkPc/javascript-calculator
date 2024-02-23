import * as math from 'mathjs';

const handleButtonClick = (input, value) => {
  console.log(`Input before click: ${input}, Value: ${value}`);
  switch (value) {
    case 'AC':
      const resultAC = handleClear(input);
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
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      const resultNumeric = handleNumeric(input, value);
      console.log(`Result after numeric button: ${resultNumeric}`);
      return resultNumeric;
    case '.':
      const resultDecimal = handleDecimal(input);
      console.log(`Result after '.': ${resultDecimal}`);
      return resultDecimal;
    default:
      console.warn(`Unhandled button click: ${value}`);
      return input;
  }
};

const handleClear = (input) => {
  return '';
};

const handleEqual = (input) => {
  try {
    return math.evaluate(input).toString();
  } catch (error) {
    return 'Error';
  }
};

const handleNumeric = (input, value) => {
  return input + value;
};

const handleDecimal = (input) => {
  if (!input.includes('.')) {
    return input + '.';
  } else {
    return input;
  }
};

export default handleButtonClick;
