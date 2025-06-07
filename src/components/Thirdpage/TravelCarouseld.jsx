import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TravelCarousel.css";

const travelData = [
  { id: 1, title: "GOA", image: "/images/Goa.jpg" },
  { id: 2, title: "MANALI", image: "/images/Manali.jpg" },
  { id: 3, title: "JAIPUR", image: "/images/Jaipur.jpg" },
  { id: 4, title: "KERALA", image: "/images/Kerala.jpg" },
  { id: 5, title: "LEH LADAKH", image: "/images/Ladakh.webp" },
  { id: 6, title: "AGRA", image: "/images/Ladakh.webp" },
  { id: 7, title: "ANDAMAN", image: "/images/Ladakh.webp" },
  { id: 8, title: "OOTY", image: "/images/Ladakh.webp" },
  { id: 9, title: "DARJEELING", image: "/images/Ladakh.webp" },
  { id: 10, title: "RISHIKESH", image: "/images/Ladakh.webp" },
];

const TravelCarousel = () => {
  return (
    <div className="carousel-container">
    

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
