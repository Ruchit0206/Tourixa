import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Homepage';

function App() {
  return (
    <div className="App">
      <Navbar first="Home" second="Packages" third="Offers" fourth="Travel Guide" fifth="Feature" />
      <Home/>
      
    </div>
  );
}

export default App;
