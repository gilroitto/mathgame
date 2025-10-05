import logo from './logo.svg';
import './App.css';
import TwoTexts from './components/TwoTexts/TwoTexts';
import React, { useRef, useState } from 'react';
import BoxRow from './components/BoxRow/BoxRow';
import ColumnMethodCalculation from './components/ColumnMethodCalculation/ColumnMethodCalculation';

function App() {
  const boxRowRef = useRef();
  const columnRef = useRef();
  const [result, setResult] = useState('');
  const [sumResult, setSumResult] = useState('');

  const handleCalc = () => {
    if (boxRowRef.current) {
      setResult(boxRowRef.current.getValue());
    }
  };

  const handleSum = () => {
    if (columnRef.current) {
      setSumResult(columnRef.current.getLastRowValue());
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BoxRow count={3} characters='54' ref={boxRowRef} />
        <button onClick={handleCalc}>Calc</button>
        <div style={{ marginTop: '16px', fontSize: '1.5rem' }}>{result}</div>
        <ColumnMethodCalculation ref={columnRef} rowCount={3} boxCount={3} />
        <button onClick={handleSum}>Sum</button>
        <div style={{ marginTop: '16px', fontSize: '1.5rem' }}>Sum result: {sumResult}</div>
        <TwoTexts text1="First text goes here." text2="Second text goes here." />
      </header>
    </div>
  );
}

export default App;
