


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// // import "./Firstslider.css";





// const TravelCarousel = () => {
//   return (
//     <div className="carousel-container">
     

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {travelData.map((place) => (
//           <SwiperSlide key={place.id}>
//             <div className="travel-card">
//               <img src={place.image} alt={place.title} />
//               <div className="card-overlay">
//                 <span className="card-number">{place.id}</span>
//                 <span className="card-title">{place.title}</span>
//                 {/* <span className="card-plan">{place.plan}</span> */}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default TravelCarousel;




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
    plan:"International"
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
       <h2 className="carousel-title">
        <span className="highlight">Most </span> Popular Travel  {" "}
        <span className="highlight">Places</span>
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
