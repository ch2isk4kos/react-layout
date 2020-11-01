import React from 'react';
import Navigation from '../src/components/Navigation';
import Home from '../src/components/Home';
import Modal from '../src/components/Modal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Modal />
    </div>
  );
};

export default App;
