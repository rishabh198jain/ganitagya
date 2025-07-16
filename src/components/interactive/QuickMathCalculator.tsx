import React, { useState } from 'react';
import './QuickMathCalculator.css';

interface CalculatorProps {
  className?: string;
}

const QuickMathCalculator: React.FC<CalculatorProps> = ({ className = '' }) => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clear();
    } else if (value === '⌫') {
      setExpression(prev => prev.slice(0, -1));
    } else {
      setExpression(prev => prev + value);
    }
  };

  const calculateResult = () => {
    try {
      // Simple math evaluation (in production, use a proper math parser)
      const evalResult = Function('"use strict"; return (' + expression + ')')();
      const resultStr = evalResult.toString();
      setResult(resultStr);
      setHistory(prev => [...prev.slice(-4), `${expression} = ${resultStr}`]);
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setExpression('');
    setResult('');
  };

  const buttons = [
    ['C', '⌫', '/', '×'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.', 'π', '√']
  ];

  const handleSpecialOperations = (value: string) => {
    switch (value) {
      case '×':
        return '*';
      case '√':
        return 'Math.sqrt(';
      case 'π':
        return 'Math.PI';
      default:
        return value;
    }
  };

  return (
    <div className={`quick-calculator ${className}`}>
      <div className="calculator-header">
        <h3>🧮 Quick Calculator</h3>
        <p>Solve math problems instantly</p>
      </div>
      
      <div className="calculator-display">
        <div className="expression">{expression || '0'}</div>
        <div className="result">{result && `= ${result}`}</div>
      </div>

      <div className="calculator-buttons">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {row.map((button) => (
              <button
                key={button}
                className={`calc-btn ${
                  button === '=' ? 'equals' : 
                  ['C', '⌫'].includes(button) ? 'clear' :
                  ['/', '×', '-', '+'].includes(button) ? 'operator' :
                  ['π', '√'].includes(button) ? 'special' : 'number'
                }`}
                onClick={() => handleButtonClick(handleSpecialOperations(button))}
              >
                {button}
              </button>
            ))}
          </div>
        ))}
      </div>

      {history.length > 0 && (
        <div className="calculator-history">
          <h4>Recent Calculations</h4>
          <div className="history-list">
            {history.slice(-3).map((calc, index) => (
              <div key={index} className="history-item">{calc}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickMathCalculator;
