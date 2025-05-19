import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Homepage";
import Footer from "./Footer";
// import Footerold from './Footerold';
import Development from "./Development";
import { Routes, Route } from "react-router-dom";
import Secondpage from "./Secondpage";

function App() {
  return (
    <div className="App">
      <Navbar
        first="Home"
        second="Packages"
        third="Offers"
        fourth="Travel Guide"
        fifth="Feature"
      />

     <Routes>
             <Route path="/" element={<Home />} /> {/* Home page */}
             <Route path="/underde/:page" element={<Development />} />
           </Routes>


    
      <Footer />

      
    </div>
  );
}

export default App;
