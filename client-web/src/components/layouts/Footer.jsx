import React from 'react';
import logo from '/logo.jpeg';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-gray-800 px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

        {/* Left Column */}
        <div className="flex-1 min-w-[250px]">
          <Link to="/" onClick={handleScrollTop}>
            <img src={logo} alt="Tourixaa" className="w-20 mb-3" />
          </Link>
          <p className="text-base">
            Tourixaa is India’s first open travel platform that connects travelers with verified local agencies to deliver personalized and flexible trip experiences.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {["instagram", "linkedin-in", "twitter", "facebook-f", "pinterest-p", "youtube"].map((icon) => (
              <a
                key={icon}
                href="/"
                target="_blank"
                rel="noreferrer"
                className="text-white bg-blue-900 p-2 rounded-full text-sm hover:bg-green-500 transition"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Middle Columns */}
        <div className="flex-1 flex flex-wrap gap-6 min-w-[300px]">
          {/* Packages */}
          <div>
            <h4 className="text-blue-900 font-bold underline mb-2">Packages</h4>
            <ul className="space-y-1 text-base">
              {[
                "International",
                "Domestic",
                "Group Tour",
                "Solo Tour",
                "Nature and Tracking",
                "Maharaja Express",
                "Honeymoon Package",
                "Spiritual Places",
                "Business Packages",
                "Children Places",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={"/packages"}
                    onClick={handleScrollTop}
                    className="hover:text-red-600"
                  >
                    {item.replace(" and ", " & ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
        <div>
  <h4 className="text-blue-900 font-bold underline mb-2">Features</h4>
  <ul className="space-y-1 text-base">
    <li>
      <Link to="/videopage" onClick={handleScrollTop} className="hover:text-red-600">
        Video
      </Link>
    </li>
    <li>
      <Link to="/3dmodel" onClick={handleScrollTop} className="hover:text-red-600">
        3D Model
      </Link>
    </li>
    <li>
      <Link to="/vr-service-page" onClick={handleScrollTop} className="hover:text-red-600">
        VR Tour
      </Link>
    </li>
  </ul>
</div>


          {/* Company */}
          <div>
            <h4 className="text-blue-900 font-bold underline mb-2">Company</h4>
            <ul className="space-y-1 text-base">
              <li><Link to="/aboutus" onClick={handleScrollTop} className="hover:text-red-600">About Us</Link></li>
              <li><Link to="/plan-with-us" onClick={handleScrollTop} className="hover:text-red-600">Plan With Us</Link></li>
              <li><Link to="/aitour" onClick={handleScrollTop} className="hover:text-red-600">AI Tour Planner</Link></li>
            
              <li><Link to="/Community" onClick={handleScrollTop} className="hover:text-red-600">Community</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
      <div className="flex-1 min-w-[250px]">
  <h4 className="text-lg font-bold mb-2 text-blue-900">TOURIXAA</h4>

  {/* 📍 Clickable Address */}
  <p className="text-base mb-3 flex items-start gap-2">
    <i className="fas fa-map-marker-alt text-red-600 mt-1"></i>
    <a
      href="https://maps.app.goo.gl/JQKqDRX8Ntj18z4m7"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-900 hover:underline"
    >
      Nr. Visat three roads, Sabarmati-Koba Highway, Chandkheda, Ahmedabad, Gujarat
    </a>
  </p>

  {/* 📞 Clickable Phone */}
  <p className="text-base mb-2 flex items-center gap-2">
   <i className="fa-solid fa-phone text-green-500"></i>
    <a href="tel:+917046726220" className="text-blue-900 hover:underline">
      +91 7046726220
    </a>
  </p>

  {/* 📧 Clickable Email */}
  <p className="text-base flex items-center gap-2">
    <i className="fas fa-envelope text-yellow-600"></i>
    <a href="mailto:tourixaa@gmail.com" className="text-blue-900 hover:underline">
      tourixaa@gmail.com
    </a>
  </p>
</div>

      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm border-t mt-6 pt-3">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="/" target="_self" rel="noreferrer" className="text-blue-900 font-semibold hover:underline">
            Tourixaa
          </a>{" "}
          — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
