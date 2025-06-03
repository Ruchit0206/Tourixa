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
        <span className="highlight">Most popular</span> International places for <span className="highlight">Travel</span>
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
