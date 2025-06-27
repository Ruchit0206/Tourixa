import React from 'react';
import logo from '/logo.jpeg';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Replace these URLs with your actual social media profile URLs
  const socialLinks = {
    instagram: 'https://instagram.com/tourixaa',
    linkedin: 'https://linkedin.com/company/tourixaa',
    twitter: 'https://twitter.com/tourixaa',
    facebook: 'https://facebook.com/tourixaa',
    pinterest: 'https://pinterest.com/tourixaa',
    youtube: 'https://youtube.com/tourixaa',
  };

  return (
    <footer className="bg-gray-50 text-gray-900 px-6 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

        {/* Left Column */}
        <div className="flex-1 min-w-[250px]">
          <Link to="/" onClick={handleScrollTop} className="inline-block mb-4">
            <img src={logo} alt="Tourixaa Logo" className="w-24 rounded-lg shadow-md" />
          </Link>
          <p className="text-gray-700 leading-relaxed max-w-sm">
            Tourixaa is India’s first open travel platform that connects travelers with verified local agencies to deliver personalized and flexible trip experiences.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pink-600 hover:text-pink-500 text-2xl transition-transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-blue-700 hover:text-blue-600 text-2xl transition-transform hover:scale-110">
              <FaLinkedinIn />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-sky-500 hover:text-sky-400 text-2xl transition-transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-600 hover:text-blue-500 text-2xl transition-transform hover:scale-110">
              <FaFacebookF />
            </a>
            <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-red-600 hover:text-red-500 text-2xl transition-transform hover:scale-110">
              <FaPinterestP />
            </a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-red-700 hover:text-red-600 text-2xl transition-transform hover:scale-110">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="flex-1 flex flex-wrap gap-10 min-w-[300px]">
          {/* Packages */}
          <div>
            <h4 className="text-blue-900 font-semibold text-lg mb-3 border-b border-blue-900 pb-1">Packages</h4>
            <ul className="space-y-2 text-gray-700">
              {[
                "International",
                "Domestic",
                "Group Tour",
                "Solo Tour",
                "Nature & Tracking",
                "Maharaja Express",
                "Honeymoon Package",
                "Spiritual Places",
                "Business Packages",
                "Children Places",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/underde/${item}`}
                    onClick={handleScrollTop}
                    className="hover:text-red-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-blue-900 font-semibold text-lg mb-3 border-b border-blue-900 pb-1">Features</h4>
            <ul className="space-y-2 text-gray-700">
              {["Video", "3D Model", "360 Video", "VR Tour"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "VR Tour" ? "/VRServicePage" : `/underde/${item}`}
                    onClick={handleScrollTop}
                    className="hover:text-red-600 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-blue-900 font-semibold text-lg mb-3 border-b border-blue-900 pb-1">Company</h4>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="/Aboutus" onClick={handleScrollTop} className="hover:text-red-600 transition-colors">About Us</Link></li>
              <li><Link to="/PlanWithUs" onClick={handleScrollTop} className="hover:text-red-600 transition-colors">Plan With Us</Link></li>
              <li><Link to="/underde/AI Tour Planner" onClick={handleScrollTop} className="hover:text-red-600 transition-colors">AI Tour Planner</Link></li>
              <li><Link to="/TourixaaApp" onClick={handleScrollTop} className="hover:text-red-600 transition-colors">Tourixaa App</Link></li>
              <li><Link to="/Community" onClick={handleScrollTop} className="hover:text-red-600 transition-colors">Community</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-blue-900 font-semibold text-lg mb-3 border-b border-blue-900 pb-1">Contact Us</h4>
          <address className="not-italic space-y-3 text-gray-700 text-base">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-900" />
              Nr. Visat three roads, Sabarmati-Koba Highway, Chandkheda, Ahmedabad, Gujarat
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-900" />
              <a href="tel:+919876543210" className="hover:underline">(+91) 98765 43210</a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-900" />
              <a href="mailto:tourixaa@gmail.com" className="hover:underline">tourixaa@gmail.com</a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-600 text-sm border-t border-gray-300 mt-10 pt-4">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <a
            href="https://tourixa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-900 font-semibold hover:underline"
          >
            Tourixaa
          </a>{' '}
          — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
