import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculateResult = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
      case '+':
        setResult((n1 + n2).toString());
        break;
      case '-':
        setResult((n1 - n2).toString());
        break;
      case '*':
        setResult((n1 * n2).toString());
        break;
      case '/':
        setResult((n1 / n2).toString());
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <input type="number" value={num1} onChange={handleNum1Change} />
        <select value={operator} onChange={handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={num2} onChange={handleNum2Change} />
        <button onClick={calculateResult}>Calculate</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
