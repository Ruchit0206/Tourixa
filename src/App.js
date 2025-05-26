import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Home from "./Homepage";
import Footer from "./Footer";
import Development from "./Development";
import { Routes, Route } from "react-router-dom";
import VideoUpload from "./Videoupload";
import AboutUs from "./Aboutus";
import International from "./International"; // This will have the multi-step form

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

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/underde/:page" element={<Development />} />
          <Route path="/VideoUpload" element={<VideoUpload />} />
          <Route path="/International" element={<International />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="*" element={
              <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
                Page Not Found
              </h2>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
