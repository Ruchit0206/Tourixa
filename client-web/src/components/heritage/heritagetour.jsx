import React, { useState } from "react";
import PageLayout from "../layouts/PageLayout";

// -----------------------------
// 🏛️ Heritage Tour Data
// -----------------------------
const heritageData = [
  // Uttar Pradesh
  {
    id: 1,
    state: "Uttar Pradesh",
    packageName: "UNESCO Pack",
    image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/agra-up.jpg",
    places: [
      "Taj Mahal – Agra",
      "Agra Fort – Agra",
      "Fatehpur Sikri – Agra region"
    ],
    hashtags: ["#TajMahal", "#Agra", "#UNESCO"],
    type: "unesco",
  },
  {
    id: 2,
    state: "Uttar Pradesh",
    packageName: "Full Pack",
    image: "https://img.veenaworld.com/wp-content/uploads/2020/09/12-Tourist-Places-to-Visit-in-Uttar-Pradesh.jpg",
    places: [
      "Itmad-ud-Daulah’s Tomb – Agra",
      "Akbar’s Tomb – Sikandra, Agra",
      "Chunar Fort – Mirzapur",
      "Sarnath Complex – Varanasi",
      "Jahangir Palace – Agra Fort",
      "Bhitari Ruins – Ghazipur",
      "Jami Masjid – Jaunpur",
      "Fort of Jhansi – Jhansi"
    ],
    hashtags: ["#UPHeritage", "#HistoricIndia", "#FullPack"],
    type: "full",
  },

  // Rajasthan
  {
    id: 3,
    state: "Rajasthan",
    packageName: "UNESCO Pack",
    image: "https://tse1.mm.bing.net/th/id/OIP.YN__scci8c_E2twOBwNBCwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    places: [
      "Hill Forts of Rajasthan",
      "Jantar Mantar – Jaipur",
      "Jaipur Pink City"
    ],
    hashtags: ["#Rajasthan", "#Jaipur", "#UNESCO"],
    type: "unesco",
  },
  {
    id: 4,
    state: "Rajasthan",
    packageName: "Full Pack",
    image: "https://media1.thrillophilia.com/filestore/5ora0e609nb3xfx72el5mc336txg_Downpic.cc-138902336.jpg?w=305&h=230&dpr=2.0",
    places: [
      "Hawa Mahal – Jaipur",
      "Amber Fort – Jaipur",
      "City Palace – Udaipur",
      "Mehrangarh Fort – Jodhpur",
      "Chittorgarh Fort – Chittorgarh",
      "Kumbhalgarh Fort – Rajsamand",
      "Ranthambhore Fort – Sawai Madhopur",
      "Galtaji Temple – Jaipur",
      "Dilwara Temples – Mount Abu"
    ],
    hashtags: ["#FortTour", "#RoyalIndia", "#FullPack"],
    type: "full",
  },

  // Tamil Nadu
  {
    id: 5,
    state: "Tamil Nadu",
    packageName: "UNESCO Pack",
    image: "https://tse4.mm.bing.net/th/id/OIP.RRvTyzmY98lyragk9b-MuQHaD7?w=760&h=404&rs=1&pid=ImgDetMain&o=7&rm=3",
    places: [
      "Great Living Chola Temples",
      "Mahabalipuram Group of Monuments",
      "Nilgiri Mountain Railway"
    ],
    hashtags: ["#TamilNadu", "#CholaDynasty", "#UNESCO"],
    type: "unesco",
  },
  {
    id: 6,
    state: "Tamil Nadu",
    packageName: "Full Pack",
    image: "https://images.saymedia-content.com/.image/t_share/MTg4NDIyMzY0OTA3NDQ4MTEz/top-10-tourist-places-to-visit-in-tamil-nadu.jpg",
    places: [
      "Meenakshi Amman Temple – Madurai",
      "Brihadeeswarar Temple – Thanjavur",
      "Shore Temple – Mahabalipuram",
      "Gangaikonda Cholapuram Temple – Ariyalur",
      "Fort St. George – Chennai",
      "Ranganathaswamy Temple – Srirangam",
      "Airavatesvara Temple – Darasuram"
    ],
    hashtags: ["#TamilTemples", "#CholaArt", "#FullPack"],
    type: "full",
  },
    {
    id: 7,
    state: "Delhi",
    packageName: "UNESCO Pack",
    image: "https://www.tripsavvy.com/thmb/Q8-enki214IsS44Pen6lSB919Bg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-531732818-592d24ec3df78cbe7e956e68.jpg",
    places: [
      "Humayun’s Tomb",
      "Qutub Minar and its Monuments",
      "Red Fort Complex"
    ],
    hashtags: ["#Delhi", "#UNESCO", "#RedFort"],
    type: "unesco"
  },
  {
    id: 8,
    state: "Delhi",
    packageName: "Full Pack",
    image: "https://www.tripsavvy.com/thmb/pAlZ4kx0tM9HFLmgkYbqMlfxaok=/2116x1417/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-846359134-5b515328c9e77c003738e40c.jpg",
    places: [
      "Jama Masjid – Old Delhi",
      "India Gate – Central Delhi",
      "Purana Qila (Old Fort) – Near Pragati Maidan",
      "Tughlaqabad Fort – South Delhi",
      "Safdarjung Tomb – South Delhi",
      "Agrasen ki Baoli – Connaught Place",
      "Hauz Khas Complex – South Delhi"
    ],
    hashtags: ["#DelhiTour", "#MughalHeritage", "#FullPack"],
    type: "full"
  },
  {
    id: 9,
    state: "Maharashtra",
    packageName: "UNESCO Pack",
    image: "https://i.pinimg.com/originals/75/12/89/7512894bccabd83bbe3f8b464e867e99.jpg",
    places: [
      "Ajanta Caves – Aurangabad",
      "Ellora Caves – Aurangabad",
      "Elephanta Caves – Mumbai Harbour",
      "Chhatrapati Shivaji Terminus – Mumbai",
      "Victorian Gothic & Art Deco Ensembles – Mumbai",
      "Western Ghats (partially)"
    ],
    hashtags: ["#AjantaEllora", "#Mumbai", "#UNESCO"],
    type: "unesco"
  },
  {
    id: 10,
    state: "Maharashtra",
    packageName: "Full Pack",
    image: "https://tse1.mm.bing.net/th/id/OIP.K65BQcH31NYKFuHcFM4aKwHaDm?rs=1&pid=ImgDetMain&o=7&rm=3",
    places: [
      "Bibi Ka Maqbara – Aurangabad",
      "Shaniwar Wada – Pune",
      "Raigad Fort – Raigad",
      "Sindhudurg Fort – Malvan",
      "Gateway of India – Mumbai",
      "Kanheri Caves – Sanjay Gandhi NP",
      "Pandavleni Caves – Nashik",
      "Daulatabad Fort – Aurangabad"
    ],
    hashtags: ["#MHHeritage", "#FortsOfIndia", "#FullPack"],
    type: "full"
  },
  {
    id: 11,
    state: "Gujarat",
    packageName: "UNESCO Pack",
    image: "https://cdn.britannica.com/39/124439-004-B64E89CC/Sun-Temple-Modhera-Gujarat-India.jpg",
    places: [
      "Rani-ki-Vav – Patan",
      "Champaner-Pavagadh Archaeological Park",
      "Dholavira – Harappan City",
      "Historic City of Ahmedabad"
    ],
    hashtags: ["#Gujarat", "#Stepwells", "#UNESCO"],
    type: "unesco"
  },
  {
    id: 12,
    state: "Gujarat",
    packageName: "Full Pack",
    image: "https://www.indianluxurytrains.com/wp-content/uploads/2013/09/Mahabat-ka-Maqbara.jpg",
    places: [
      "Sun Temple – Modhera",
      "Sarkhej Roza – Ahmedabad",
      "Sidi Saiyyed Mosque – Ahmedabad",
      "Adalaj Stepwell – Gandhinagar",
      "Kirti Mandir – Porbandar",
      "Uparkot Fort – Junagadh",
      "Mahabat Maqbara – Junagadh"
    ],
    hashtags: ["#GujaratHistory", "#Ahmedabad", "#FullPack"],
    type: "full"
  },

    {
    id: 13,
    state: "Madhya Pradesh",
    packageName: "UNESCO Pack",
    image: "https://as2.ftcdn.net/v2/jpg/02/85/43/37/1000_F_285433744_iUcC83UYSfOuJjtXIiWiUbjWezGWlTbJ.jpg",
    places: [
      "Khajuraho Group of Monuments",
      "Buddhist Monuments at Sanchi",
      "Rock Shelters of Bhimbetka"
    ],
    hashtags: ["#MP", "#UNESCO", "#HeritageSites"],
    type: "unesco"
  },
  {
    id: 14,
    state: "Madhya Pradesh",
    packageName: "Full Pack",
    image: "https://1.bp.blogspot.com/-jLIx-FCcKJ0/XrU32wmeIAI/AAAAAAAAAZ4/7-IxaOApYKwF29WuSLDiDYgcVRVutvMqwCLcBGAsYHQ/s1600/Omkareshwar%2BTemple2.jpg",
    places: [
      "Gwalior Fort – Gwalior",
      "Jai Vilas Palace – Gwalior",
      "Orchha Fort Complex – Orchha",
      "Bhojeshwar Temple – Bhojpur",
      "Mahakaleshwar Temple – Ujjain",
      "Datia Palace – Datia",
      "Udayagiri Caves – Vidisha"
    ],
    hashtags: ["#MadhyaPradesh", "#TemplesOfIndia", "#FullPack"],
    type: "full"
  },
  {
    id: 15,
    state: "Karnataka",
    packageName: "UNESCO Pack",
    image: "https://blog.thomascook.in/wp-content/uploads/2017/09/Bhutanatha_temple_in_Badami_Karnataka_India-1.jpg",
    places: [
      "Group of Monuments at Hampi",
      "Group of Monuments at Pattadakal",
      "Sacred Ensembles of the Hoysalas",
      "Western Ghats (partially)"
    ],
    hashtags: ["#Karnataka", "#Hampi", "#UNESCO"],
    type: "unesco"
  },
  {
    id: 16,
    state: "Karnataka",
    packageName: "Full Pack",
    image: "https://media.istockphoto.com/id/1270774245/photo/hampi-stone-chariot-the-antique-stone-art-piece-from-unique-angle-with-amazing-blue-sk.webp?b=1&s=170667a&w=0&k=20&c=ztrX_g2MLSAieTasM2iDRFJUSrn4kkvjPHYviJdpX4Q=",
    places: [
      "Gol Gumbaz – Bijapur",
      "Hampi Temple Complex – Vijayanagara",
      "Badami Caves – Badami",
      "Aihole Temples – Bagalkot",
      "Belur & Halebidu Temples – Hassan",
      "Bidar Fort – Bidar",
      "Mysore Palace – Mysuru",
      "Chitradurga Fort – Chitradurga"
    ],
    hashtags: ["#KarnatakaTourism", "#TempleArchitecture", "#FullPack"],
    type: "full"
  },
  {
    id: 17,
    state: "Odisha",
    packageName: "UNESCO Pack",
    image: "https://tse2.mm.bing.net/th/id/OIP.5Ej0t2J2cC-uYnWR5IZxeQHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    places: ["Sun Temple – Konark"],
    hashtags: ["#Odisha", "#KonarkSunTemple", "#UNESCO"],
    type: "unesco"
  },
  {
    id: 18,
    state: "Odisha",
    packageName: "Full Pack",
    image: "https://www.holidify.com/images/bgImages/DHAULI.jpg",
    places: [
      "Jagannath Temple – Puri",
      "Lingaraj Temple – Bhubaneswar",
      "Mukteshvara Temple – Bhubaneswar",
      "Rajarani Temple – Bhubaneswar",
      "Udayagiri-Khandagiri Caves – Bhubaneswar",
      "Barabati Fort – Cuttack"
    ],
    hashtags: ["#JagannathPuri", "#TempleTrail", "#FullPack"],
    type: "full"
  },
  {
    id: 19,
    state: "Bihar",
    packageName: "UNESCO Pack",
    image: "https://www.bihartrip.com/pub/media/destination/bodhgaya/bihartrip-29.jpg",
    places: [
      "Mahabodhi Temple Complex at Bodh Gaya",
      "Nalanda Mahavihara (University Ruins)"
    ],
    hashtags: ["#BiharHeritage", "#BodhGaya", "#UNESCO"],
    type: "unesco"
  },
  {
    id: 20,
    state: "Bihar",
    packageName: "Full Pack",
    image: "https://www.holidify.com/images/bgImages/BODH-GAYA.jpg",
    places: [
      "Vishnupad Temple – Gaya",
      "Barabar Caves – Jehanabad",
      "Golghar – Patna",
      "Sher Shah Suri’s Tomb – Sasaram",
      "Patna Museum – Patna",
      "Kesaria Stupa – East Champaran"
    ],
    hashtags: ["#AncientBihar", "#FullPack", "#TempleTrail"],
    type: "full"
  },
  {
    id: 21,
    state: "Kerala",
    packageName: "UNESCO (Western Ghats)",
    image: "https://thumbs.dreamstime.com/b/tempel-sri-padmanabhaswamy-trivandrum-kerala-indien-90382273.jpg",
    places: ["Western Ghats (partly)"],
    hashtags: ["#Kerala", "#WesternGhats", "#UNESCO"],
    type: "unesco"
  },
  {
    id: 22,
    state: "Kerala",
    packageName: "Full Pack",
    image: "https://tse4.mm.bing.net/th/id/OIP.uHq1l5Kpwy5zjO1bDKWShAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    places: [
      "Bekal Fort – Kasaragod",
      "Mattancherry Palace – Kochi",
      "St. Francis Church – Kochi",
      "Edakkal Caves – Wayanad",
      "Thirunelli Temple – Wayanad",
      "Palakkad Fort – Palakkad"
    ],
    hashtags: ["#KeralaTourism", "#GodsOwnCountry", "#FullPack"],
    type: "full"
  },
  {
    id: 23,
    state: "Telangana",
    packageName: "UNESCO Pack",
    image: "https://tse2.mm.bing.net/th/id/OIP.37zOo0mcEicV8Q5jHDrzowHaE0?rs=1&pid=ImgDetMain&o=7&rm=3",
    places: ["Ramappa Temple – Warangal"],
    hashtags: ["#Telangana", "#RamappaTemple", "#UNESCO"],
    type: "unesco"
  },
  {
    id: 24,
    state: "Telangana",
    packageName: "Full Pack",
    image: "https://tse1.mm.bing.net/th/id/OIP.cqJmVXfNv0nd88LDf-c_-gHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",
    places: [
      "Charminar – Hyderabad",
      "Golconda Fort – Hyderabad",
      "Qutb Shahi Tombs – Hyderabad",
      "Warangal Fort – Warangal",
      "Thousand Pillar Temple – Hanamkonda",
      "Chowmahalla Palace – Hyderabad"
    ],
    hashtags: ["#TelanganaSites", "#HyderabadHeritage", "#FullPack"],
    type: "full"
  },
  {
    id: 25,
    state: "West Bengal",
    packageName: "UNESCO Pack",
    image: "https://tse4.mm.bing.net/th/id/OIP.FpXTgRBsflwkPe6SbvygpAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    places: [
      "Santiniketan",
      "Sundarbans NP",
      "Darjeeling Himalayan Railway"
    ],
    hashtags: ["#WestBengal", "#Darjeeling", "#UNESCO"],
    type: "unesco"
  },
  {
    id: 26,
    state: "West Bengal",
    packageName: "Full Pack",
    image: "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/bridges-wb.jpg",
    places: [
      "Victoria Memorial – Kolkata",
      "Howrah Bridge – Kolkata",
      "Fort William – Kolkata",
      "Hazarduari Palace – Murshidabad",
      "Bishnupur Terracotta Temples – Bankura",
      "Hooghly Imambara – Hooghly"
    ],
    hashtags: ["#Kolkata", "#FullPack", "#HeritageWalk"],
    type: "full"
  },
  {
    id: 27,
    state: "Uttarakhand",
    packageName: "UNESCO & Major Temples",
    image: "https://blog.thomascook.in/wp-content/uploads/2017/10/Rishikesh_temple_side_view_of_canal-Custom.jpg",
    places: [
      "Nanda Devi and Valley of Flowers National Parks",
      "Kedarnath Temple – Rudraprayag",
      "Badrinath Temple – Chamoli",
      "Baijnath Temple Complex – Bageshwar",
      "Jageshwar Temples – Almora"
    ],
    hashtags: ["#Uttarakhand", "#CharDham", "#UNESCO"],
    type: "mixed"
  },
  {
    id: 28,
    state: "Punjab",
    packageName: "Major Sites",
    image: "https://www.tripsavvy.com/thmb/eaFluodK9hL1f7taCnZ3UQz3MuQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/122329081-56a3be3e3df78cf7727efec1.jpg",
    places: [
      "Golden Temple – Amritsar",
      "Gobindgarh Fort – Amritsar",
      "Sheesh Mahal – Patiala",
      "Qila Mubarak – Bathinda",
      "Durgiana Temple – Amritsar"
    ],
    hashtags: ["#PunjabHeritage", "#GoldenTemple", "#HistoricSites"],
    type: "full"
  },
  {
    id: 29,
    state: "Haryana",
    packageName: "Major Sites",
    image: "https://www.travelworldplanet.com/wp-content/uploads/2022/09/Sheikh-Chehli-Mausoleum-Kurukshetra-Haryana-min.jpg",
    places: [
      "Sheikh Chilli’s Tomb – Thanesar",
      "Panipat Battlefields – Panipat",
      "Star Monument – Bhiwani",
      "Tomb of Ibrahim Lodi – Panipat"
    ],
    hashtags: ["#Haryana", "#HistoricIndia", "#Monuments"],
    type: "full"
  },
  {
    id: 30,
    state: "Chhattisgarh",
    packageName: "Major Sites",
    image: "https://tse3.mm.bing.net/th/id/OIP.73o3vY7Mkh5FspYa_ZajmwHaJK?rs=1&pid=ImgDetMain&o=7&rm=3",
    places: [
      "Kanker Palace – Kanker",
      "Sirpur Group of Monuments – Sirpur",
      "Ratanpur Fort – Bilaspur",
      "Mahamaya Temple – Ratanpur",
      "Bhoramdeo Temple – Kawardha"
    ],
    hashtags: ["#Chhattisgarh", "#HiddenIndia", "#HeritageSpots"],
    type: "full"
  },
  {
    id: 31,
    state: "North-East States",
    packageName: "UNESCO Pack",
    image: "https://static2.tripoto.com/media/filter/nl/img/1356094/SpotDocument/1559130883_1559130857473.jpg",
    places: [
      "Kaziranga National Park – Assam",
      "Manas Wildlife Sanctuary – Assam",
      "Moidams – Ahom Tombs – Assam"
    ],
    hashtags: ["#NorthEastIndia", "#AssamUNESCO", "#NatureHeritage"],
    type: "unesco"
  },
  {
    id: 32,
    state: "North-East States",
    packageName: "Full Pack",
    image: "https://tse2.mm.bing.net/th/id/OIP.4U67CcgQdQbxhBUscFhdGQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
    places: [
      "Kamakhya Temple – Guwahati, Assam",
      "Ujjayanta Palace – Agartala, Tripura",
      "Tawang Monastery – Tawang, Arunachal Pradesh",
      "Imphal Kangla Fort – Manipur",
      "Unakoti Rock Reliefs – Tripura"
    ],
    hashtags: ["#NorthEastHeritage", "#HiddenGems", "#FullPack"],
    type: "full"
  },
  {
    id: 33,
    state: "Union Territories",
    packageName: "Major Sites",
    image: "https://specialplacesofindia.com/wp-content/uploads/2024/01/Untitled-design-2024-06-10T173009.565.jpg",
    places: [
      "Cellular Jail – Port Blair (Andaman & Nicobar)",
      "Basilica of Bom Jesus – Goa",
      "Fort Aguada – Goa",
      "Monastery Complex – Leh, Ladakh",
      "Palace of the King of Ladakh – Leh"
    ],
    hashtags: ["#UnionTerritories", "#Goa", "#Ladakh", "#Andaman"],
    type: "full"
  }



];


// -----------------------------
// 📸 Package Card Component
// -----------------------------

const PackageCard = ({ tour }) => {
  const [showAll, setShowAll] = useState(false);
  const price = tour.type === "unesco" ? 3000 : 5000;
  const oldPrice = price + 1000;

  const isLongList = tour.places.length > 6;
  const visiblePlaces = showAll ? tour.places : tour.places.slice(0, 6);

  return (
    <div className="flex flex-col justify-between border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 rounded-2xl overflow-hidden shadow-md bg-white p-5 h-full min-h-[500px]">
      
      {/* Top Section */}
      <div className="flex-1">
        <img
          src={tour.image}
          alt={tour.packageName}
          loading="lazy"
          className="w-full h-48 object-cover rounded mb-3"
        />

        <p className="text-sm text-gray-500 font-medium mb-1">📍 {tour.state}</p>
        <h3 className="text-lg font-extrabold text-blue-800 mb-2">
          {tour.packageName}
        </h3>

        <ul className="list-disc list-inside text-sm text-gray-700 mb-2 min-h-[108px]">
          {visiblePlaces.map((place, idx) => (
            <li key={idx}>🏛️ {place}</li>
          ))}
        </ul>

        {isLongList && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-blue-600 text-sm hover:underline mb-2"
          >
            {showAll ? "See less" : "See more"}
          </button>
        )}
      </div>

      {/* Middle Section (Tags & Price) */}
      <div className="mt-2">
        <div className="flex flex-wrap gap-2 mb-3 min-h-[36px]">
          {tour.hashtags.map((tag, idx) => (
           <span
  key={idx}
  className="text-xs px-2 py-2 bg-[#F0F4FF] text-[#2B50AA] rounded-full border border-blue-200 shadow-sm"
>
  #{tag.replace("#", "")}
</span>
          ))}
        </div>

        <p className="text-green-700 font-semibold mb-4">
          Starting at ₹{price}
          <span className="text-sm line-through text-gray-400 ml-2">
            ₹{oldPrice}
          </span>
        </p>
      </div>

      {/* Bottom Button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow hover:from-blue-700 hover:to-indigo-700 transition mt-auto">
        Book Now
      </button>
    </div>
  );
};



// -----------------------------
// 🏛️ Heritage Tour Page
// -----------------------------
export default function HeritageTourPage() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("all");

  const filteredData = heritageData.filter(
    (t) =>
      (activeType === "all" || t.type === activeType) &&
      (t.state.toLowerCase().includes(search.toLowerCase()) ||
        t.packageName.toLowerCase().includes(search.toLowerCase()) ||
        t.places.some((p) => p.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <PageLayout>
<div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 via-yellow-50 to-white">

        <h1 className="text-3xl font-bold text-center mb-6">🏞️ Heritage Tour Packages</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by state, place or package..."
          className="border rounded px-3 py-2 mb-4 w-full max-w-md mx-auto block shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Type Filters */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {[
            { label: "All Packages", value: "all" },
            { label: "UNESCO Pack", value: "unesco" },
            { label: "Full Heritage Pack", value: "full" },
          ].map((type) => (
            <button
              key={type.value}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition border ${
                activeType === type.value
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black border-gray-300"
              }`}
              onClick={() => setActiveType(type.value)}
            >
              {type.label}
            </button>
          ))}
          
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredData.map((tour) => (
            <PackageCard key={tour.id} tour={tour} />
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">🙋 Frequently Asked Questions</h2>
  
  <details className="mb-3 border border-gray-200 rounded p-4 bg-white shadow-sm">
    <summary className="font-semibold text-gray-800 cursor-pointer">What is a UNESCO Pack?</summary>
    <p className="mt-2 text-sm text-gray-600">
      A UNESCO Pack includes only those heritage sites that are officially recognized as World Heritage Sites by UNESCO for their cultural or natural importance.
    </p>
  </details>

  <details className="mb-3 border border-gray-200 rounded p-4 bg-white shadow-sm">
    <summary className="font-semibold text-gray-800 cursor-pointer">What is a Full Heritage Pack?</summary>
    <p className="mt-2 text-sm text-gray-600">
      The Full Heritage Pack includes UNESCO sites as well as other important historic forts, temples, palaces, and cultural landmarks from the state.
    </p>
  </details>

  <details className="mb-3 border border-gray-200 rounded p-4 bg-white shadow-sm">
    <summary className="font-semibold text-gray-800 cursor-pointer">Is this package customizable?</summary>
    <p className="mt-2 text-sm text-gray-600">
      Yes, we offer customization options depending on your travel preferences, budget, and the number of days.
    </p>
  </details>

  <details className="mb-3 border border-gray-200 rounded p-4 bg-white shadow-sm">
    <summary className="font-semibold text-gray-800 cursor-pointer">How is the price decided?</summary>
    <p className="mt-2 text-sm text-gray-600">
      Price depends on the type of package, accommodation level, guide fees, and number of destinations covered. UNESCO Packs start at ₹3000 and Full Packs at ₹5000.
    </p>
  </details>
</div>
<div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
  <h2 className="text-xl font-bold text-center text-blue-700 mb-4">🚀 Why Choose Our Heritage Tours?</h2>
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
    <li>✅ Expert-curated heritage itineraries</li>
    <li>✅ Affordable & transparent pricing</li>
    <li>✅ Trusted by 1,000+ travelers</li>
    <li>✅ Guided tours with local experts</li>
  </ul>
</div>



        {/* 📌 Disclaimer */}
        <div className="mt-12 bg-yellow-100 text-yellow-900 border-l-4 border-yellow-500 p-4 rounded shadow-sm max-w-3xl mx-auto text-sm leading-relaxed">
          <h4 className="font-bold mb-1">📌 Disclaimer</h4>
          <p>
            The images used on this page are for display purposes only and belong to their respective sources. We do not claim any ownership or copyright. These visuals are used to promote awareness and appreciation of heritage tourism.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
