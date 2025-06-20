import React from 'react';
import aboutImg from '/aboutpic.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-nowrap gap-8 px-8 py-20 pt-[200px] bg-white flex-wrap md:flex-nowrap">
        <div className="flex-1 min-w-[300px]">
          <img src={aboutImg} alt="Tourixaa travel team or destination" className="w-full h-full rounded-[12px] object-cover" />
        </div>
        <div className="flex-1 min-w-[300px] text-[1.2rem]">
          <h2 className="text-3xl font-semibold mb-4">About Tourixaa</h2>
          <p className="mb-4">
            Tourixaa isn’t just a travel company — it’s a passport to unforgettable memories.
            We’re here to flip the script on ordinary vacations and turn your trips into stories worth retelling.
          </p>
          <p className="mb-4">
            Whether you're dreaming of a peaceful sunset in Santorini, a bustling street market in Bangkok, or a quiet hilltop in Himachal,
            we help make it happen — your way. Since our beginning, we’ve focused on <strong>customized, thoughtful travel experiences</strong> that go far beyond basic itineraries.
          </p>
          <p className="mb-4">
            Founded by passionate explorers, Tourixaa started with a simple belief: <em>travel should feel personal, not packaged</em>.
            Today, we help travelers across the world plan everything from romantic honeymoons to adventure treks, family gateways to business trips — and everything in between.
          </p>
          <p className="mb-4">
            Our signature? A blend of modern tech (hello <strong>AR/VR previews</strong>!) and old-school care (yes, real humans who listen). 
            Oh, and great deals — because smart travel should also be smartly priced.
          </p>
          <p className="mb-4">
            At Tourixaa, we believe every trip is a chance to discover something new — about the world, and maybe even about yourself.
            Wherever you’re headed, we’ll help you get there in style.
          </p>
          <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full font-semibold">
            <Link className="nav-link active flex items-center gap-2" to="/International">
              <i className="fa-solid fa-globe"></i> Inquire Us
            </Link>
          </button>
        </div>
      </div>
      <Benefits />
    </div>
  );
};

const Benefits = () => (
  <section className="py-12 px-8 bg-white text-center">
    <h2 className="text-3xl font-semibold mb-8">Why Choose Tourixaa?</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1000px] mx-auto">
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
          className="bg-[#f0f4f8] rounded-[12px] p-6 shadow-md text-center w-full max-w-[220px] mx-auto"
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