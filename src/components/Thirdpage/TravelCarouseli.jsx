


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TravelCarousel.css";


const travelData = [
  {
    id: 1,
    title: "BARCELONA",
    image: "/images/barcelona.jpg",
  },
  {
    id: 2,
    title: "BALI",
    image: "/images/bali.jpeg",
  },
  {
    id: 3,
    title: "DUBAI",
    image: "/images/dubai.jpg",
  },
  {
    id: 4,
    title: "GREECE",
    image: "/images/greece.webp",
  },
  {
    id: 5,
    title: "PARIS",
    image: "/images/paris.jpg",
  },
  {
    id: 6,
    title: "TOKYO",
    image: "/images/tokyo.jpg",
  },
  {
    id: 7,
    title: "ROME",
    image: "/images/rome.webp",
  },
  {
    id: 8,
    title: "NEW YORK",
    image: "/images/newyork.jpg",
  },
  {
    id: 9,
    title: "CAPE TOWN",
    image: "/images/capetown.jpg",
  },
  {
    id: 10,
    title: "SYDNEY",
    image: "/images/sydney.jpg",
  },
];


const TravelCarousel = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">
        <span className="highlight">Most </span> Popular Travel  {" "}
        <span className="highlight">Places</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {travelData.map((place) => (
          <SwiperSlide key={place.id}>
            <div className="travel-card">
              <img src={place.image} alt={place.title} />
              <div className="card-overlay">
                <span className="card-number">{place.id}</span>
                <span className="card-title">{place.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TravelCarousel;
