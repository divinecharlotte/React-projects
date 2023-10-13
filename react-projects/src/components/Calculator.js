import React, { useState } from 'react';

const Calculator = () => {
  const [displayedNumbers, setDisplayedNumbers] = useState('');
  const [operation, setOperation] = useState(null);
  const [currentNumber, setCurrentNumber] = useState('');

  const handleClick = (e) => {
    const number = e.target.textContent;

    if (!isNaN(number) || number === '.' ) {
      setCurrentNumber(currentNumber + number);
      setDisplayedNumbers(displayedNumbers + number);
    } else if (number ==='+/-'){
      setDisplayedNumbers(displayedNumbers.toString()*-1);
      setDisplayedNumbers(displayedNumbers.toString()*-1);
    }
    else if (number === '=') {
      if (currentNumber && operation !== null) {
        let result = null;
        switch (operation) {
          case '+':
            result = parseFloat(displayedNumbers) + parseFloat(currentNumber);
            break;
          case '-':
            result = parseFloat(displayedNumbers) - parseFloat(currentNumber);
            break;
          case 'x':
            result = parseFloat(displayedNumbers) * parseFloat(currentNumber);
            break;
          case '÷':
            if (parseFloat(currentNumber) !== 0) {
              result = parseFloat(displayedNumbers) / parseFloat(currentNumber);
            } else {
              result = 'Error';
            }
            break;
          default:
            break;
        }

        if (result !== 'Error') {
          setDisplayedNumbers(result.toString());
          setCurrentNumber(result.toString());
          setOperation(null);
        } else {
          setDisplayedNumbers(result);
          setCurrentNumber('');
          setOperation(null);
        }
      }
    } else if (['+', '-', 'x', '÷'].includes(number)) {
      if (currentNumber !== '') {
        setDisplayedNumbers(displayedNumbers + number);
        setOperation(number);
        setCurrentNumber('');
      }
    } else if (number === 'AC') {
      setDisplayedNumbers('');
      setCurrentNumber('');
      setOperation(null);
    }
  };

  return (
    <div className="w-full h-[900px] flex flex-col items-center justify-center">
      <div className="w-1/4 p-7 border bg-gray-400 text-white font-bold flex justify-end">
        {displayedNumbers || '0'}
      </div>
      <div className="grid grid-cols-4">
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          AC
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          +/-
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          %
        </button>
        <button onClick={handleClick} className="p-9 bg-orange-600 text-white font-bold border border-black " type="button">
          ÷
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          7
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          8
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          9
        </button>
        <button onClick={handleClick} className="p-9 bg-orange-600 text-white font-bold border border-black" type="button">
          x
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          4
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          5
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          6
        </button>
        <button onClick={handleClick} className="p-9 bg-orange-600 text-white border font-bold border-black" type="button">
          -
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          1
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          2
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          3
        </button>
        <button onClick={handleClick} className="p-9 bg-orange-600 text-white font-bold border border-black" type="button">
          +
        </button>
        <button onClick={handleClick} className="p-9 border col-span-2 border-black font-bold" type="button">
          0
        </button>
        <button onClick={handleClick} className="p-9 border border-black font-bold" type="button">
          .
        </button>
        <button onClick={handleClick} className="p-9 bg-orange-600 text-white border font-bold border-black" type="button">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
