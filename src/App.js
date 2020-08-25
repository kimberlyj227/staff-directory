import React from 'react';
import './App.css';
import Jumbo from "./components/Jumbo/Jumbo";
import Nav from "./components/Nav/Nav"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbo />
      </header>
      <div>
        <Nav />
      </div>
    </div>
  );
}

export default App;
