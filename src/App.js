import React from 'react';
import './App.css';
import Persional from './Persional/persional';
import './Persional/persional.css';
import Brother from './Brother/brother';
import './Brother/brother.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Persional name='JianPing Liu 111'/>
        <Brother name="NengZhi Chen lll"/>
      </header>
    </div>
  );
}

export default App;
