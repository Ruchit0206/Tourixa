import React, { useState, useCallback, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Howl, Howler } from "howler";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import PageLayout from "../layouts/PageLayout";

// 🔊 Sound
const popSound = new Howl({ src: ["pop.mp3"], volume: 0.9 });

// 🎒 Packages
const packages = [
  {
    title: "Wonderland Adventure",
    ageRange: [3, 10],
    ageTag: "3-10",
    duration: "2 Days / 1 Night",
    price: "₹3,499",
    image: "/images/imagica.jpg",
    includes: "Amusement park + meals + safety gear",
    tags: ["Magic", "Amusement", "Fun"],
  },
  {
    title: "Jungle Safari",
    ageRange: [6, 12],
    ageTag: "6-12",
    duration: "3 Days / 2 Nights",
    price: "₹5,999",
    image: "/images/jungle.webp",
    includes: "Wildlife tour + kid-friendly guides",
    tags: ["Nature", "Adventure", "Animals"],
  },
  {
    title: "Science City Tour",
    ageRange: [8, 15],
    ageTag: "8-15",
    duration: "1 Day",
    price: "₹1,499",
    image: "/images/science.jpg",
    includes: "Museum entry + fun experiments",
    tags: ["Science", "Learning", "Tech"],
  },
  {
    title: "Dubai Explorer",
    ageRange: [8, 15],
    ageTag: "8-15",
    duration: "2 Days",
    price: "₹7,999",
    image: "/images/dubai.jpg",
    includes: "City tour + desert safari",
    tags: ["International", "Adventure", "Fun"],
  },
  {
    title: "Bali Beach Kids Camp",
    ageRange: [8, 15],
    ageTag: "8-15",
    duration: "3 Days",
    price: "₹6,499",
    image: "/images/bali.jpeg",
    includes: "Beach games + treasure hunt",
    tags: ["Beach", "Camp", "Games"],
  },
];

// 👨‍👩‍👧 Reviews
const reviews = [
  {
    name: "Anjali M.",
    comment: "My son loved Wonderland Adventure—it was magical!",
    avatar: "/images/avtar.jpg",
  },
  {
    name: "Ravi K.",
    comment: "Great safety and fun at Jungle Safari. Thank you Tourixa!",
    avatar: "/images/avtar.jpg",
  },
];

// ✅ Package Grid Component
function PackageGrid({ data }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {data.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">
          No packages match the selected filters.
        </p>
      ) : (
        data.map((pkg, index) => (
          <Card
            key={index}
            title={pkg.title}
            subTitle={`Ages ${pkg.ageRange[0]}–${pkg.ageRange[1]}`}
            className="rounded-2xl shadow-md bg-white hover:scale-105 transition animate-fadeIn"
            header={
              <img
                src={pkg.image}
                alt={pkg.title}
                className="rounded-t-2xl h-48 w-full object-cover"
              />
            }
            footer={
              <div className="flex justify-between items-center mt-4">
                <span className="text-pink-600 font-semibold text-lg">
                  {pkg.price}
                </span>
                <Button
                  label="Book Now"
                  icon="pi pi-book"
                  className="p-button-sm p-button-rounded p-button-success"
                  onClick={() => popSound.play()}
                />
              </div>
            }
          >
            <p className="m-0 text-sm">{pkg.duration}</p>
            <p className="text-sm mt-1">{pkg.includes}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {pkg.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Card>
        ))
      )}
    </div>
  );
}

// ✅ Main Page Component
export default function Children() {
  const [selectedTags, setSelectedTags] = useState([]);
  const ageTags = ["3-10", "6-12", "8-15"];

  useEffect(() => {
    const resumeAudio = () => {
      if (Howler.ctx && Howler.ctx.state === "suspended") {
        Howler.ctx.resume();
      }
    };
    window.addEventListener("click", resumeAudio, { once: true });
    return () => window.removeEventListener("click", resumeAudio);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const toggleTag = (tag) => {
    popSound.play();
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredPackages =
    selectedTags.length === 0
      ? packages
      : packages.filter((pkg) => selectedTags.includes(pkg.ageTag));

  return (
    <PageLayout>
      <div
        className="relative min-h-screen py-8 px-4 overflow-hidden text-gray-800 bg-gradient-to-br from-pink-100 to-blue-100"
        style={{
          backgroundImage: `url("https://www.tourixa.com/assets/kids-bg.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 🎈 Particles */}
        <Particles
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 20 },
              shape: {
                type: "image",
                image: {
                  src: "/icons/kite.png",
                  width: 40,
                  height: 40,
                },
              },
              move: { speed: 1, direction: "top", outModes: "out" },
              size: { value: 18, random: true },
            },
          }}
          className="absolute inset-0 -z-10"
        />

        <div className="w-[95%] mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Children’s Places 🎠
              </h1>
              <p className="text-lg mt-1">Fun adventures for little explorers</p>
            </div>
            <Button
              label="Kid Quiz 🎉"
              icon="pi pi-question-circle"
              className="p-button-rounded p-button-warning"
              onClick={() => {
                popSound.play();
                alert("Coming soon! Fun quizzes for kids 🎉");
              }}
            />
          </div>

          {/* ✅ Age Filters */}
          <div className="mb-4 flex flex-wrap gap-3">
            {ageTags.map((tag) => (
              <div
                key={tag}
                className={`cursor-pointer px-3 py-1 rounded-full border ${
                  selectedTags.includes(tag)
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-800"
                } hover:scale-105 transition`}
                onClick={() => toggleTag(tag)}
              >
                Ages {tag}
              </div>
            ))}
          </div>

          <div className="flex gap-4 mb-6">
            <Button
              label="Select All"
              icon="pi pi-check-square"
              className="p-button-sm p-button-rounded p-button-info"
              onClick={() => {
                popSound.play();
                setSelectedTags([...ageTags]);
              }}
            />
            <Button
              label="Clear All"
              icon="pi pi-times"
              className="p-button-sm p-button-rounded p-button-secondary"
              onClick={() => {
                popSound.play();
                setSelectedTags([]);
              }}
            />
          </div>

          <div className="mb-4 text-sm font-medium">
            Showing {filteredPackages.length} package
            {filteredPackages.length !== 1 && "s"}
          </div>

          <PackageGrid data={filteredPackages} />

          {/* 💖 Why Kids Love Us */}
          <div className="mt-16 p-6 bg-yellow-100 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold mb-3">Why Kids Love Us 💖</h2>
            <p className="text-gray-800">
              We design every experience with fun, learning, and safety at the
              core. From amusement parks to science tours, we make every moment
              magical! ✨
            </p>
          </div>

          {/* ⭐ Reviews */}
          <section
            className="relative mt-16 rounded-2xl overflow-hidden text-white"
            style={{
              backgroundImage: 'url("/images/children-bg-stars.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "60px 20px",
            }}
          >
            <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                What Parents Say 👨‍👩‍👧‍👦
              </h2>
              <Carousel
                value={reviews}
                itemTemplate={(review) => (
                  <Card className="m-2 p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border-2 border-white animate-fadeIn">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="h-12 w-12 rounded-full mr-3 border-2 border-pink-400"
                      />
                      <h4 className="font-semibold text-gray-800">
                        {review.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-700 italic">
                      "{review.comment}"
                    </p>
                  </Card>
                )}
                numVisible={1}
                numScroll={1}
                circular
                autoplayInterval={6000}
              />
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
