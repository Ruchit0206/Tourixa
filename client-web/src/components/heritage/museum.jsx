// MuseumPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "../layouts/PageLayout";

const museumsData = [
    {
        "id": 1,
        "name": "Visakha Museum",
        "state": "Visakhapatnam, Andhra Pradesh",
        "link": "local",
        "image": "",
        "description": "A maritime museum displaying artifacts of the region’s naval history.",
        "map": "https://maps.google.com/?q=Visakha+Museum+Visakhapatnam"
    },
    {
        "id": 2,
        "name": "Victoria Jubilee Museum",
        "state": "Vijayawada, Andhra Pradesh",
        "link": "local",
        "image": "",
        "description": "Also known as Bapu Museum, it showcases ancient sculptures and historical relics.",
        "map": "https://maps.google.com/?q=Victoria+Jubilee+Museum+Vijayawada"
    },
    {
        "id": 3,
        "name": "Tribal Museum",
        "state": "Araku Valley, Andhra Pradesh",
        "link": "local",
        "image": "",
        "description": "Dedicated to the tribal cultures of Andhra Pradesh, with traditional artifacts and huts.",
        "map": "https://maps.google.com/?q=Tribal+Museum+Araku+Valley"
    },
    {
        "id": 4,
        "name": "Jawaharlal Nehru State Museum",
        "state": "Itanagar, Arunachal Pradesh",
        "link": "local",
        "image": "",
        "description": "Cultural and archaeological collections of Arunachal Pradesh.",
        "map": "https://maps.google.com/?q=Jawaharlal+Nehru+State+Museum+Itanagar"
    },
    {
        "id": 5,
        "name": "Assam State Museum",
        "state": "Guwahati, Assam",
        "link": "http://axomuseum.in",
        "image": "",
        "description": "Features sculptures, epigraphy, and ethnographic displays from Assam’s history.",
        "map": "https://maps.google.com/?q=Assam+State+Museum+Guwahati"
    },
    {
        "id": 6,
        "name": "Srimanta Sankaradeva Kalakshetra Museum",
        "state": "Guwahati, Assam",
        "link": "https://kalakshetraonline.in",
        "image": "",
        "description": "A cultural institution preserving the legacy of Srimanta Sankardeva through art and exhibits.",
        "map": "https://maps.google.com/?q=Srimanta+Sankaradeva+Kalakshetra+Museum+Guwahati"
    },
    {
        "id": 7,
        "name": "Bihar Museum",
        "state": "Patna, Bihar",
        "link": "https://www.biharmuseum.org",
        "image": "",
        "description": "A modern museum showcasing the rich heritage and ancient history of Bihar.",
        "map": "https://maps.google.com/?q=Bihar+Museum+Patna"
    },
    {
        "id": 8,
        "name": "Patna Museum",
        "state": "Patna, Bihar",
        "link": "https://www.biharmuseum.org",
        "image": "",
        "description": "A colonial-era museum featuring historical artifacts from the Mauryan to British periods.",
        "map": "https://maps.google.com/?q=Patna+Museum"
    },
    {
        "id": 9,
        "name": "Vaishali Museum",
        "state": "Vaishali, Bihar",
        "link": "https://asivaishalimuseum.com",
        "image": "",
        "description": "Contains historical artifacts from the time of Lord Buddha and ancient Vaishali.",
        "map": "https://maps.google.com/?q=Vaishali+Museum"
    },
    {
        "id": 10,
        "name": "Nalanda Archaeological Museum",
        "state": "Nalanda, Bihar",
        "link": "local",
        "image": "",
        "description": "Houses artifacts and sculptures from the Nalanda Mahavihara ruins and nearby excavations.",
        "map": "https://maps.google.com/?q=Nalanda+Archaeological+Museum"
    },
  // Continue this with previous array
 
];

const getBadge = (link) => {
  if (link === "free") return { label: "Free", color: "bg-green-100 text-green-700" };
  if (link === "local") return { label: "Offline Booking", color: "bg-yellow-100 text-yellow-700" };
  if (link.startsWith("http")) return { label: "Online Booking", color: "bg-blue-100 text-blue-700" };
  return { label: "Unknown", color: "bg-gray-100 text-gray-700" };
};

const MuseumModal = ({ museum, onClose, onBook }) => {
  const googleMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    `${museum.name}, ${museum.state}`
  )}&output=embed`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[999] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-3xl relative overflow-y-auto max-h-[90vh] mt-10 sm:mt-10"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={museum.image || "https://via.placeholder.com/400x300?text=Museum+Image"}
            alt={museum.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-1">
              {museum.name}
            </h2>
            <p className="text-gray-700 mb-2">
              📍 <strong>State:</strong> {museum.state}
            </p>
            <p className="text-gray-700 mb-2">
              🕒 <strong>Opening Hours:</strong> 10:00 AM – 6:00 PM
            </p>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed tracking-wide">
              {museum.description}
            </p>
            <button
              onClick={() => onBook(museum.link, museum.name)}
              className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 shadow-md shadow-indigo-300 transition font-medium"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            📍 Location on Map
          </h3>
          <div className="w-full h-64">
            <iframe
              src={googleMapUrl}
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


const MuseumPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedMuseum, setSelectedMuseum] = useState(null);

  const handleBookClick = (link, name) => {
    if (link === "local") {
      alert(`You can book the ticket for "${name}" by going there.`);
    } else if (link === "free") {
      alert(`The ticket for "${name}" is free. No booking required.`);
    } else if (link && link.startsWith("http")) {
      window.open(link, "_blank");
    } else {
      alert(`No booking information available for "${name}".`);
    }
  };

  const filteredMuseums = museumsData
    .filter((museum) => {
      const query = searchQuery.toLowerCase();
      return (
        museum.name.toLowerCase().includes(query) ||
        museum.state.toLowerCase().includes(query)
      );
    })
    .filter((museum) => {
      if (filterType === "all") return true;
      if (filterType === "free") return museum.link === "free";
      if (filterType === "local") return museum.link === "local";
      if (filterType === "online") return museum.link.startsWith("http");
      return false;
    });

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-100 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Discover the Best Museums</h1>
          <p className="text-lg opacity-90">
            Book online, go local, or enjoy free entries — all in one place!
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 mt-10 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="🔍 Search Museum..."
            className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="all">All Types</option>
            <option value="free">Free</option>
            <option value="local">Offline Booking</option>
            <option value="online">Online Booking</option>
          </select>
        </div>

        <div className="grid max-w-6xl mx-auto px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {filteredMuseums.map((museum, index) => {
            const badge = getBadge(museum.link);
            return (
              <motion.div
                key={museum.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group flex flex-col border border-gray-200"
              >
                <img
                  src={museum.image || "https://via.placeholder.com/400x300?text=Museum+Image"}
                  alt={museum.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h2 className="text-xl font-bold text-blue-700 mb-1 group-hover:underline decoration-indigo-400">
                      {museum.name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Place:</span> {museum.state}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${badge.color}`}
                    >
                      {badge.label}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => handleBookClick(museum.link, museum.name)}
                      className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 hover:shadow-md shadow-indigo-200 transition text-sm font-medium"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => setSelectedMuseum(museum)}
                      className="flex-1 bg-gray-100 border text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition text-sm font-medium"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {filteredMuseums.length === 0 && (
            <p className="text-gray-500 col-span-full text-center mt-6">
              No museums found matching your criteria.
            </p>
          )}
        </div>

        <AnimatePresence>
          {selectedMuseum && (
            <MuseumModal
              museum={selectedMuseum}
              onClose={() => setSelectedMuseum(null)}
              onBook={handleBookClick}
            />
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
};

export default MuseumPage;
