import React from "react";
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
  
];


// const travelData = [
//   {
//     id: 1,
//     title: "GOA",
//     image: "/images/goa.jpg",
//   },
//   {
//     id: 2,
//     title: "MANALI",
//     image: "/images/manali.jpg",
//   },
//   {
//     id: 3,
//     title: "JAIPUR",
//     image: "/images/jaipur.jpg",
//   },
//   {
//     id: 4,
//     title: "KERALA",
//     image: "/images/kerala.jpg",
//   },
//   {
//     id: 5,
//     title: "LEH LADAKH",
//     image: "/images/leh.jpg",
//   },
//   {
//     id: 6,
//     title: "AGRA",
//     image: "/images/agra.jpg",
//   },
//   {
//     id: 7,
//     title: "ANDAMAN",
//     image: "/images/andaman.jpg",
//   },
//   {
//     id: 8,
//     title: "OOTY",
//     image: "/images/ooty.jpg",
//   },
//   {
//     id: 9,
//     title: "DARJEELING",
//     image: "/images/darjeeling.jpg",
//   },
//   {
//     id: 10,
//     title: "RISHIKESH",
//     image: "/images/rishikesh.jpg",
//   },
// ];



const TravelCarousel = () => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">
        <span className="highlight">Popular</span> Travel Picks Within <span className="highlight">India</span>
      </h2>
      <div className="card-container">
        {travelData.map((place) => (
          <div key={place.id} className="travel-card">
            <img src={place.image} alt={place.title} />
            <div className="card-overlay">
              <span className="card-number">{place.id}</span>
              <span className="card-title">{place.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TravelCarousel;
