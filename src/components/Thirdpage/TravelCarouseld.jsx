import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TravelCarousel.css";
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

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ speed: 10000, delay: 10000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {travelData.map((place) => (
          <SwiperSlide key={place.id}>
            <div className="travel-card">
              <div
                className="image-wrapper"
                onClick={() => openFullscreen(place.image)}
              >
                <img src={place.image} alt={place.title} />
                <div className="card-overlay">
                  {/* <span className="card-number">{place.id}</span> */}
                </div>
                {place.sticker && <div className="sticker">{place.sticker}</div>}

                <div className="travel-info-overlay">
                  <h3>{place.title}</h3>
                  {/* <p>{place.description}</p> */}
                  {/* <div className="price">{place.price}</div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="custom-prev">&#10094;</div>
        <div className="custom-next">&#10095;</div>
      </Swiper>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fullscreen-modal" onClick={closeFullscreen}>
          <img src={fullscreenImage} alt="Fullscreen" />
          <span className="close-btn">&times;</span>
        </div>
      )}
    </div>
  );
};

export default TravelCarousel;
