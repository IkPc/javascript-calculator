import { useEffect } from "react";

const Keyboard = () => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case '0':
          document.getElementById('zero').click();
          break;
        case '1':
          document.getElementById('one').click();
          break;
        case '2':
          document.getElementById('two').click();
          break;
        case '3':
          document.getElementById('three').click();
          break;
        case '4':
          document.getElementById('four').click();
          break;
        case '5':
          document.getElementById('five').click();
          break;
        case '6':
          document.getElementById('six').click();
          break;
        case '7':
          document.getElementById('seven').click();
          break;
        case '8':
          document.getElementById('eight').click();
          break;
        case '9':
          document.getElementById('nine').click();
          break;
        case 'Backspace':
          document.getElementById('clear').click();
          break;
        case '+':
          document.getElementById('add').click();
          break;
        case '-':
          document.getElementById('subtract').click();
          break;
        case '*':
          document.getElementById('multiply').click();
          break;
        case '/':
          document.getElementById('divide').click();
          break;
        case '=':
        case 'Enter':
          document.getElementById('equals').click();
          break;
        case '.':
        case ',':
          document.getElementById('decimal').click();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return null;
};

export default Keyboard;