import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Homepage';
import Footer from './Footer';
// import Footerold from './Footerold';

function App() {
  return (
    <div className="App">
      <Navbar first="Home" second="Packages" third="Offers" fourth="Travel Guide" fifth="Feature" />
      <Home/>
          {/* <Footerold/> */}
<Footer/>
          </div>
  );
}

export default App;
