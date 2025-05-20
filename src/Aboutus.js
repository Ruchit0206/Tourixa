import React from 'react';
import './Aboutus.css';
import aboutImg from './aboutpic.jpg'; // Replace with your image path

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="about-image">
        <img src={aboutImg} alt="Tourixa travel team or destination" />
      </div>
      <div className="about-content">
        <h2>About Tourixa</h2>
        <p>
          Tourixa isn’t just a travel company — it’s a passport to unforgettable memories.
          We’re here to flip the script on ordinary vacations and turn your trips into stories worth retelling.
        </p>
        <p>
          Whether you're dreaming of a peaceful sunset in Santorini, a bustling street market in Bangkok, or a quiet hilltop in Himachal,
          we help make it happen — your way. Since our beginning, we’ve focused on <strong>customized, thoughtful travel experiences</strong> that go far beyond basic itineraries.
        </p>
        <p>
          Founded by passionate explorers, Tourixa started with a simple belief: <em>travel should feel personal, not packaged</em>.
          Today, we help travelers across the world plan everything from romantic honeymoons to adventure treks, family getaways to business trips — and everything in between.
        </p>
        <p>
          Our signature? A blend of modern tech (hello <strong>AR/VR previews</strong>!) and old-school care (yes, real humans who listen). 
          Oh, and great deals — because smart travel should also be smartly priced.
        </p>
        <p>
          At Tourixa, we believe every trip is a chance to discover something new — about the world, and maybe even about yourself.
          Wherever you’re headed, we’ll help you get there in style.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
