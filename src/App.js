import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Homepage";
import Footer from "./Footer";
// import Footerold from './Footerold';
import Development from "./Development";
import { Routes, Route } from "react-router-dom";
import VideoUpload from "./Videoupload";
// import Secondpage from "./Secondpage";


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
             <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "2rem" }}>Page Not Found</h2>} />
            <Route path="VideoUpload" element={<VideoUpload/>}/>
           </Routes>


    
      <Footer />

      
    </div>
  );
}

export default App;
