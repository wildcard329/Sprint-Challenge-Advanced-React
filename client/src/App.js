import React from 'react';
import Players from './components/Players';
import DarkMode from './components/DarkMode';
import './App.css';

function App() {
  return (
    <div className="App">
      <DarkMode />
      <Players />
    </div>
  );
}

export default App;
