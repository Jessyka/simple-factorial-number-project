import React from 'react';
import './App.css';
import CalculateFactorial from './features/factorial/calculateFactorial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CalculateFactorial/>
      </header>
    </div>
  );
}

export default App;
