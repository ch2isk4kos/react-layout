import React from 'react';
import Navigation from '../src/components/Navigation';
import Home from '../src/components/Home';
import Modal from '../src/components/Modal';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Modal />
      <Sidebar />
    </div>
  );
};

export default App;
