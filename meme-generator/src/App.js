import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/Navbar';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
        <Nav />
        <Meme />
    </div>
  );
}

export default App;
