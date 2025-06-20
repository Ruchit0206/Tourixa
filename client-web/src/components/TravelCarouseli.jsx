import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const travelData = [
  {
    id: 1,
    title: "BARCELONA",
    image: "/images/barcelona.jpg",
    sticker: "International Pack",
  },
  {
    id: 2,
    title: "BALI",
    image: "/images/bali.jpeg",
    sticker: "International Pack",
  },
  {
    id: 3,
    title: "DUBAI",
    image: "/images/dubai.jpg",
    sticker: "International Pack",
  },
  {
    id: 4,
    title: "GREECE",
    image: "/images/greece.webp",
    sticker: "International Pack",
  },
  {
    id: 5,
    title: "PARIS",
    image: "/images/paris.jpg",
    sticker: "International Pack",
  },
  {
    id: 6,
    title: "TOKYO",
    image: "/images/tokyo.jpg",
    sticker: "International Pack",
  },
  {
    id: 7,
    title: "ROME",
    image: "/images/rome.webp",
    sticker: "International Pack",
  },
  {
    id: 8,
    title: "NEW YORK",
    image: "/images/newyork.jpg",
    sticker: "International Pack",
  },
  {
    id: 9,
    title: "CAPE TOWN",
    image: "/images/capetown.jpg",
    sticker: "International Pack",
  },
  {
    id: 10,
    title: "SYDNEY",
    image: "/images/sydney.jpg",
    sticker: "International Pack",
  },
];

const TravelCarousel = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="relative px-4 py-8 text-center">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-red-700">Most </span>
        Popular Travel <span className="text-red-700">Places</span>
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
        autoplay={{ delay: 10000, disableOnInteraction: false }}
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
              className="rounded-xl overflow-hidden border border-red-600 shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 cursor-pointer relative"
              onClick={() => openFullscreen(place.image)}
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-60 object-cover"
              />

              {place.sticker && (
                <div className="absolute top-3 right-3 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded shadow-md z-10">
                  {place.sticker}
                </div>
              )}

              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-left text-white">
                <h3 className="text-xl font-semibold tracking-wide drop-shadow-md">
                  {place.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Arrows */}
        <div className="custom-prev absolute top-1/2 -left-2 z-20 bg-black/60 text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-red-700 transition-all duration-300 select-none">
          &#10094;
        </div>
        <div className="custom-next absolute top-1/2 -right-2 z-20 bg-black/60 text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-red-700 transition-all duration-300 select-none">
          &#10095;
        </div>
      </Swiper>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[999]"
          onClick={closeFullscreen}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-[80%] max-h-[80%] rounded-lg shadow-lg"
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
