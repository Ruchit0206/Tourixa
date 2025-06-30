import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; 

import "swiper/css/navigation"; 

import "swiper/css/pagination"; 


const travelData = [
  {
    id: 1,
    title: "MUNNAR",
    image: "/images/Goa.jpg",
    description: "Beaches, parties, and Portuguese charm.",
    sticker: "Nature Pack",
  },
  {
    id: 2,
    title: "MANALI",
    image: "/images/Manali.jpg",
    description: "Snow-capped mountains & peaceful valleys.",
    sticker: "Tracking Pack",
  },
  {
    id: 3,
    title: "OOTY",
    image: "/images/Jaipur.jpg",
    description: "Pink City with forts and culture.",
    sticker: "Nature Pack",
  },
  {
    id: 4,
    title: "RAJASTAN",
    image: "/images/Kerala.jpg",
    description: "Backwaters, houseboats & lush greenery.",
    sticker: "Heritage Pack",
  },
  {
    id: 5,
    title: "LEH LADAKH",
    image: "/images/Ladakh.webp",
    description: "Breathtaking landscapes & bike rides.",
    sticker: "Tracking Pack",
  },
  {
    id: 6,
    title: "AGRA",
    image: "/images/Ladakh.webp",
    description: "Home of the majestic Taj Mahal.",
    sticker: "Domestic Pack",
  },
  {
    id: 7,
    title: "KEDARNATH",
    image: "/images/Ladakh.webp",
    description: "Island beauty & coral diving.",
    sticker: "Spiritual Pack",
  },
  {
    id: 8,
    title: "OOTY",
    image: "/images/Ladakh.webp",
    description: "Green hills, tea gardens & toy train.",
    sticker: "Tracking Pack",
  },
  {
    id: 9,
    title: "HUMPI",
    image: "/images/Ladakh.webp",
    description: "Famous for tea and scenic sunrise.",
    sticker: "Heritage Pack",
  },
  {
    id: 10,
    title: "MALLDIVES",
    image: "/images/Ladakh.webp",
    description: "River rafting & spiritual vibes.",
    sticker: "Spiritual Pack",
  },
];

const TravelCarousel = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="relative px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-red-700">Top </span> Indian Travel{" "}
        <span className="text-red-700">Destinations</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {travelData.map((place) => (
          <SwiperSlide key={place.id}>
            <div
              className="rounded-xl overflow-hidden border border-red-600 shadow-lg hover:scale-[1.03] transition-transform duration-300 cursor-pointer relative"
              onClick={() => setFullscreenImage(place.image)}
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-60 object-cover"
              />

              {/* Sticker */}
              {place.sticker && (
                <div className="absolute top-3 right-3 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded shadow-md z-10">
                  {place.sticker}
                </div>
              )}

              {/* Info Overlay */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-left text-white">
                <h3 className="text-xl font-semibold drop-shadow-md">
                  {place.title}
                </h3>
                <p className="text-sm opacity-90 mt-1">{place.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute top-1/2 -left-3 z-20 bg-black/50 text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300">
          &#10094;
        </div>
        <div className="custom-next absolute top-1/2 -right-3 z-20 bg-black/50 text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300">
          &#10095;
        </div>
      </Swiper>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-[80%] max-h-[80%] rounded-lg shadow-2xl"
          />
          <span className="absolute top-10 right-12 text-white text-5xl cursor-pointer">
            &times;
          </span>
        </div>
      )}
    </div>
  );
};

export default TravelCarousel;
