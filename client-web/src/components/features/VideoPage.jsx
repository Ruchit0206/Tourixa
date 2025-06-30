import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import "primeicons/primeicons.css";
import PageLayout from "../layouts/PageLayout";

// -----------------------------
// 🔁 LazyIframe Component
// -----------------------------
const LazyIframe = ({ src, title }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {isVisible ? (
        <iframe
          src={src}
          title={title}
          className="w-full h-full rounded pointer-events-none"
          allowFullScreen
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded">
          <i className="pi pi-spinner pi-spin text-2xl text-blue-500" />
        </div>
      )}
    </div>
  );
};

// -----------------------------
// 📹 Video Data
// -----------------------------
const videoData = [
  {
    id: 1,
    type: "Video",
    place: "Goa",
    url: "https://www.youtube.com/embed/h7SAwlnWsjw",
    description: "Experience the vibrant beaches, Portuguese architecture, and stunning sunsets of Goa, India's ultimate coastal escape.",
    hashtags: ["#Goa", "#BeachVibes", "#Sunset", "#IndianCoast"]
  },
  {
    id: 2,
    type: "Video",
    place: "Manali",
    url: "https://www.youtube.com/embed/YkFsf-vaLkI",
    description: "A serene journey through Manali’s snow-covered mountains, pine forests, and river valleys in the heart of Himachal Pradesh.",
    hashtags: ["#Manali", "#MountainViews", "#Snow", "#Himalayas"]
  },
  {
    id: 3,
    type: "Video",
    place: "Kerala",
    url: "https://www.youtube.com/embed/ti39UJYgc5s",
    description: "Cruise through the tranquil backwaters of Kerala, surrounded by lush greenery, traditional houseboats, and cultural beauty.",
    hashtags: ["#Kerala", "#Backwaters", "#GodsOwnCountry", "#NatureLovers"]
  },
  {
    id: 4,
    type: "Video",
    place: "Darjeeling",
    url: "https://www.youtube.com/embed/XYwP-QndGG0",
    description: "Ride through the misty hills of Darjeeling, famous for its tea gardens, Toy Train, and panoramic Himalayan views.",
    hashtags: ["#Darjeeling", "#TeaGardens", "#Himalayas", "#ToyTrain"]
  },
  {
    id: 5,
    type: "Video",
    place: "Portugal",
    url: "https://www.youtube.com/embed/1cAK01jmTvo",
    description: "Explore Portugal’s rich maritime history, charming coastal towns, and vibrant streets full of culture and cuisine.",
    hashtags: ["#Portugal", "#EuropeTravel", "#CoastalViews", "#CulturalHeritage"]
  },
  {
    id: 6,
    type: "Video",
    place: "Paris",
    url: "https://www.youtube.com/embed/Sz5WxOUZeTU",
    description: "A romantic tour through Paris, featuring the Eiffel Tower, Seine River cruises, and the artistic soul of the city.",
    hashtags: ["#Paris", "#EiffelTower", "#RomanticCity", "#France"]
  },
  {
    id: 7,
    type: "Video",
    place: "Ajanta and Ellora Caves",
    url: "https://www.youtube.com/embed/6SbRU946uF0",
    description: "Dive into ancient Indian history through the Ajanta and Ellora caves, showcasing rock-cut Buddhist, Hindu, and Jain temples.",
    hashtags: ["#AjantaEllora", "#IndianHeritage", "#RockCutCaves", "#History"]
  },
  {
    id: 8,
    type: "Video",
    place: "Ahmedabad",
    url: "https://www.youtube.com/embed/rr96E28QZDA",
    description: "Discover the blend of modernity and heritage in Ahmedabad, from Sabarmati Ashram to bustling bazaars and historic stepwells.",
    hashtags: ["#Ahmedabad", "#HeritageCity", "#Gujarat", "#Culture"]
  },
  {
    id: 9,
    type: "360 Video",
    place: "Taj Mahal",
    url: "https://www.youtube.com/embed/8HV1JVgqPM0",
    description: "Walk through the majestic white marble mausoleum of the Taj Mahal, a symbol of eternal love and a UNESCO World Heritage site.",
    hashtags: ["#TajMahal", "#WonderOfTheWorld", "#Agra", "#IncredibleIndia"]
  },
  {
    id: 10,
    type: "360 Video",
    place: "Ganges River",
    url: "https://www.youtube.com/embed/6gDBq8M_JOg",
    description: "Experience the spiritual essence of India along the Ganges River, where ancient rituals meet timeless culture.",
    hashtags: ["#Ganges", "#Varanasi", "#SpiritualJourney", "#India360"]
  },
  {
    id: 11,
    type: "360 Video",
    place: "Mumbai",
    url: "https://www.youtube.com/embed/CZHFu2BSZPs",
    description: "Dive into the fast-paced life of Mumbai, India’s financial capital, with its blend of Bollywood, beaches, and colonial charm.",
    hashtags: ["#Mumbai", "#CityOfDreams", "#India360", "#BollywoodCity"]
  },
  {
    id: 12,
    type: "360 Video",
    place: "Mumbai",
    url: "https://www.youtube.com/embed/CZHFu2BSZPs",
    description: "Dive into the fast-paced life of Mumbai, India’s financial capital, with its blend of Bollywood, beaches, and colonial charm.",
    hashtags: ["#Mumbai", "#CityOfDreams", "#India360", "#BollywoodCity"]
  },
  {
    id: 13,
    type: "360 Video",
    place: "Maldive",
    url: "https://www.youtube.com/embed/jqq_ZdD5Zwg",
    description: "Float through the turquoise waters of the Maldives, featuring stunning coral reefs, water villas, and white sandy beaches.",
    hashtags: ["#Maldives", "#BeachParadise", "#IslandLife", "#LuxuryTravel"]
  },
  {
    id: 14,
    type: "360 Video",
    place: "United Arab",
    url: "https://www.youtube.com/embed/b7BUpveunKo",
    description: "Witness the architectural marvels and luxury experiences of the United Arab Emirates—from deserts to futuristic skylines.",
    hashtags: ["#UAE", "#DesertVibes", "#LuxuryLife", "#MiddleEast"]
  },
  {
    id: 15,
    type: "360 Video",
    place: "Florence",
    url: "https://www.youtube.com/embed/Npcv4vnD1LU",
    description: "Stroll through Florence, the cradle of the Renaissance, rich in art, architecture, and history at every turn.",
    hashtags: ["#Florence", "#RenaissanceArt", "#ItalyTravel", "#HistoricCity"]
  },
  {
    id: 16,
    type: "360 Video",
    place: "London",
    url: "https://www.youtube.com/embed/KGerjHMa90s",
    description: "Explore London’s iconic landmarks—from the Thames to Big Ben—in a vibrant mix of heritage and modern life.",
    hashtags: ["#London", "#BigBen", "#UKTravel", "#HistoricSites"]
  },
  {
    id: 17,
    type: "360 Video",
    place: "Switzerland",
    url: "https://www.youtube.com/embed/MGSALKM2VeI",
    description: "Glide through Switzerland’s scenic landscapes, charming towns, and snow-covered peaks in an unforgettable 360° journey.",
    hashtags: ["#Switzerland", "#Alps", "#ScenicViews", "#Europe360"]
  },
  {
    id: 18,
    type: "360 Video",
    place: "Zurich, Switzerland",
    url: "https://www.youtube.com/embed/P3jyeihhCWk",
    description: "Wander through Zurich’s clean streets, serene lakefronts, and alpine backdrops—Switzerland’s cultural and financial heart.",
    hashtags: ["#Zurich", "#Switzerland", "#EuropeTravel", "#Cityscape"]
  }
];


// -----------------------------
// 📦 Video Card Component
// -----------------------------
const VideoCard = ({ video, onClick, isViewed }) => {
  return (
    <div
      onClick={() => onClick(video)}
      className="group relative p-[2px] rounded-xl w-full cursor-pointer transition-transform transform hover:scale-105"
    >
      {/* Card content inside sparkling border */}
      <div className="relative bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-gray-400 hover:shadow-lg transition">
        {isViewed && (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full shadow">
            ✅ Watched
          </div>
        )}
        <div className="aspect-video mb-3">
          <LazyIframe src={video.url} title={video.place} />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {video.place}
        </h3>
        <h3 className="text-lg font-semibold text-red-600 text-center">
          {video.type}
        </h3>
        <p className="text-sm text-gray-600 text-center mt-1">
          {video.description}
        </p>
        <div className="mt-2 text-center flex flex-wrap gap-2 justify-center">
          {video.hashtags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// -----------------------------
// 📽️ Main Page Component
// -----------------------------
export default function VideoPage() {
  const [activeType, setActiveType] = useState("all");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [viewedVideos, setViewedVideos] = useState([]);

  const handleCardClick = (video) => {
    setSelectedVideo(video);
    setVisible(true);
    if (!viewedVideos.includes(video.id)) {
      setViewedVideos((prev) => [...prev, video.id]);
    }
  };

  const filteredVideos = videoData.filter(
    (v) =>
      (activeType === "all" || v.type === activeType) &&
      v.place.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageLayout>
      <div className="min-h-screen p-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-4">
          Explore Destinations
        </h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search place..."
          className="border rounded px-3 py-2 mb-6 w-full max-w-md mx-auto block shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
            <div className="text-l text-center text-gray-500 mt-1 py-1.3">
  ⚠️ All video copyrights belong to their respective owners.
</div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {["all", "Video", "360 Video"].map((type) => (
            <Button
              key={type}
              label={
                type === "all"
                  ? "All Videos"
                  : type === "Video"
                  ? "Video"
                  : "360 Video°"
              }
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 text-sm rounded-lg ${
                activeType === type
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black border"
              }`}
            />
          ))}
        </div>
    


        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={handleCardClick}
              isViewed={viewedVideos.includes(video.id)}
            />
          ))}
        </div>

        {/* Modal Video Dialog */}
        <Dialog
          visible={visible}
          onHide={() => setVisible(false)}
          header={selectedVideo?.place}
          style={{ width: "90vw", maxWidth: "800px" }}
          breakpoints={{ "960px": "90vw", "640px": "100vw" }}
          className="rounded-xl"
        >
          {selectedVideo && (
            <div className="aspect-video">
              <iframe
                src={selectedVideo.url}
                title={selectedVideo.place}
                className="w-full h-full rounded"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Dialog>
        {/* 📌 Copyright Disclaimer */}
<div className="mt-12 bg-yellow-100 text-yellow-900 border-l-4 border-yellow-500 p-4 rounded shadow-sm max-w-3xl mx-auto text-sm leading-relaxed">
  <h4 className="font-bold mb-1">📌 Disclaimer</h4>
  <p>
    The videos embedded on this page are publicly available content hosted on YouTube. We do not claim any ownership or copyright over these videos. All credit goes to their respective creators and YouTube channels. These videos are used purely for educational and informational purposes, without any intent to infringe.
  </p>
</div>

      </div>
    </PageLayout>
  );
}
