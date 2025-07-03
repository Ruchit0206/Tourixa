import { useState, useEffect } from 'react';
import aboutImg from '/aboutpic.jpg';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const fullContent = (
    <>
      <p className="mb-4">
        <strong>Tourixaa</strong> is India’s first open and collaborative travel marketplace where verified travel agencies and passionate travelers connect, create, and get unforgettable journeys.
      </p>
      <p className="mb-4">
        We’re building India’s first open travel ecosystem where verified travel agencies come together under one roof through a subscription-based model, giving travelers direct access to a wide range of trip plans, unique local experiences, and expert guidance.
      </p>
      <p className="mb-4">
        Whether you’re looking for a serene escape in the hills, a culturally rich city tour, or a thrilling adventure off the beaten path — we connect you with the right agency to make it happen, your way.
      </p>
      <p className="mb-4">
        Born from a passion for exploration and built with modern technology, Tourixaa blends smart digital tools (like trip previews and real-time planning features) with a human-first approach. We empower both travelers and agencies:
        <br />
        – <strong>Travelers</strong> get freedom of choice, better deals, and fully tailored trips.
        <br />
        – <strong>Agencies</strong> get visibility, leads, and a platform to grow without middlemen.
      </p>
      <p>
        With Tourixaa, every journey starts with a choice — not a compromise.
        <br />
        <strong>Open. Flexible. Authentic.</strong> That’s Tourixaa.
      </p>
    </>
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6 md:px-8 pt-0 bg-white">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-[1rem] sm:text-[1.1rem] leading-7 order-1">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Tourixaa</h2>

          <div className="bg-[#f9fafb] p-4 sm:p-6 rounded-lg shadow-sm text-justify">
            {/* Always show full content on large screens */}
            {isLargeScreen ? fullContent : (
              <>
                <p className="mb-4">
                  <strong>Tourixaa</strong> is India’s first open and collaborative travel marketplace where verified travel agencies and passionate travelers connect, create, and get unforgettable journeys.
                </p>

                {showMore && fullContent}

                <button
                  className="text-blue-600 mt-2 font-medium hover:underline"
                  onClick={() => setShowMore(prev => !prev)}
                >
                  {showMore ? "See less" : "See more"}
                </button>
              </>
            )}
          </div>

          <div className="mt-6">
            
              <button className="bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-2 rounded-full font-semibold w-full sm:w-auto">
               <Link to ="/inquireus" ><i className="fa-solid fa-globe mr-2"></i> Inquire Us</Link>
              </button>
           
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 order-2 min-h-[300px]">
          <img
            src={aboutImg}
            alt="Tourixaa travel team or destination"
            className="w-full h-full max-h-[500px] min-h-[300px] object-cover rounded-[12px]"
          />
        </div>
      </div>

      <Benefits />
    </div>
  );
};

const Benefits = () => (
  <section className="py-12 bg-white text-center">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-10">Why Choose Tourixaa?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        {
          icon: "🛫",
          title: "Easy Booking",
          desc: "Seamless online booking with instant confirmation.",
        },
        {
          icon: "💰",
          title: "Best Price Guarantee",
          desc: "Competitive pricing with no hidden charges.",
        },
        {
          icon: "🌟",
          title: "24/7 Customer Support",
          desc: "Always here to assist you anytime, anywhere.",
        },
        {
          icon: "🔒",
          title: "Secure Payments",
          desc: "Safe and encrypted payment gateways for your peace of mind.",
        },
        {
          icon: "📱",
          title: "Mobile Friendly",
          desc: "Book and manage your trips easily from any device.",
        },
        {
          icon: "🎉",
          title: "Exclusive Deals & Rewards",
          desc: "Access to special offers and loyalty rewards for frequent travelers.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-[#f0f4f8] rounded-[12px] p-6 shadow-md text-center
                     transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
        >
          <span className="text-3xl block mb-3">{item.icon}</span>
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);


export default AboutUs;
