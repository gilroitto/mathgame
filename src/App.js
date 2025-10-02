import logo from './logo.svg';
import './App.css';
import TwoTexts from './components/TwoTexts/TwoTexts';
import React, { useRef, useState } from 'react';
import BoxRow from './components/BoxRow/BoxRow';

function App() {
  const boxRowRef = useRef();
  const [result, setResult] = useState('');

  const handleCalc = () => {
    if (boxRowRef.current) {
      setResult(boxRowRef.current.getValue());
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
        <TwoTexts text1="First text goes here." text2="Second text goes here." />
        <BoxRow count={3} ref={boxRowRef} />
        <button onClick={handleCalc}>Calc</button>
        <div style={{ marginTop: '16px', fontSize: '1.5rem' }}>{result}</div>
      </header>
    </div>
  );
}

export default App;
