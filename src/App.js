import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Homepage"
import Footer from "./components/Footer/Footer";
import Development from "./components/Development/Development";
import { Routes, Route } from "react-router-dom";
import VideoUpload from "./Videoupload";
import AboutUs from "./components/AboutUs/Aboutus";
import International from "./components/Inquiry/International"; // This will have the multi-step form
import TourixaaApp from "./components/TourixaaApp/TourixaaApp"
import Offers from "./components/Offers/Offers";
import Community from "./components/Community/Community";
import MainPage from "./MainPage";
import VRServicePage from "./components/Vr/VRServicePage"

function App() {
  return (
    <div className="App">
      <Navbar
        first="Home"
        second="Packages"
        third="Offers"
        fourth="Travel Guide"
        fifth="Feature"
        six="Cultural Journeys"
        seven="Corporate Getaways"
      />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/underde/:page" element={<Development />} />
          <Route path="/VideoUpload" element={<VideoUpload />} />
          <Route path="/International" element={<International />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="*" element={
              <h2 style={{ textAlign: "center" }}>
                Page Not Found
              </h2>
            }
          />
          <Route path="/TourixaaApp" element={<TourixaaApp/>}/>
          <Route path="/Offers" element={<Offers/>}/>
          <Route path="/Community" element={<Community/>}/>
          <Route path="/MainPage" element={<MainPage/>}/>
          <Route path="VRServicePage" element={<VRServicePage/>}/>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
