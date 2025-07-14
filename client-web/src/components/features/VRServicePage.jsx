import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import video from '/newvideo.mp4';
import video2 from '/video2.mp4'
import video3 from '/video3.mp4';
import { FaVrCardboard, FaMapMarkerAlt, FaRupeeSign, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';

const VRServicePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  const sendEmail = (e) => {
    e.preventDefault();
    setBookingLoading(true);
    setBookingSuccess(false);

    emailjs
      .sendForm(
        'service_7zl9xmc',
        'template_vn26jmb',
        e.target,
        'y_5KVy1AXxkQGcECX'
      )
      .then(() => {
        setBookingLoading(false);
        setBookingSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        setTimeout(() => {
          setShowForm(false);
          setBookingSuccess(false);
        }, 1500);
      })
      .catch((error) => {
        console.error(error);
        alert('❌ Submission failed. Please try again.');
        setBookingLoading(false);
      });
  };

  const testimonials = [
    {
      quote: 'The VR experience was amazing! I could feel the vibe of Goa before booking the trip!',
      name: 'Aayushi S.',
      stars: '⭐⭐⭐⭐⭐',
    },
    {
      quote: 'Convenient and professional service. Highly recommended for family vacation planning!',
      name: 'Rohan M.',
      stars: '⭐⭐⭐⭐⭐',
    },
    {
      quote: 'This helped me finalize my honeymoon destination in minutes!',
      name: 'Neha D.',
      stars: '⭐⭐⭐⭐⭐',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const faqData = [
    { question: 'How long is each demo?', answer: 'About 15–20 minutes per destination.' },
    { question: 'Do I need special equipment?', answer: 'No, we bring everything to your home.' },
    { question: 'Is it suitable for kids and seniors?', answer: "Yes, it's safe and fun for all age groups." },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const [city, setCity] = useState('');
  const [available, setAvailable] = useState(null);

  const checkAvailability = () => {
    const availableCities = ['ahmedabad', 'gandhinagar', 'patna'];
    setAvailable(availableCities.includes(city.trim().toLowerCase()));
  };
  const videos = [
  {
    id: 1,
    preview: video, // Short or cropped video
    fullLink: "https://drive.google.com/your-full-video-link",
  },
  {
    id: 2,
    preview: video2,
    fullLink: "https://drive.google.com/file/d/1bgmdPEbC5n_RDg7-QP9E0WtAk9OnGdTv/view?usp=sharing",
  },
  {
    id: 3,
    preview: video3,
    fullLink: "https://drive.google.com/another-full-video",
  },
  // Add more if needed
];


  return (
    <PageLayout>
      <div className=" bg-gradient-to-b from-[#7490b9] to-[#8bf9d6] mt-2">
        <div className="bg-[#ffde59] text-black py-2 px-5 text-center font-semibold animate-fadeInDown">
          🎉 First-time users get a free Tourixa Welcome Kit!
        </div>
        <section className="bg-blue-600 text-white text-center py-16 px-5">
  <h2 className="text-3xl font-bold mb-4">Experience Virtual Reality – Your Way!</h2>
  <p className="max-w-2xl mx-auto mb-4 text-lg">
    Whether you're curious about top destinations or want to view <span className="font-semibold underline">your own video</span> in VR, we’ve got you covered.
  </p>
  <p className="max-w-2xl mx-auto mb-8 text-md">
    Book your personalized home VR session today and enjoy an immersive experience tailored just for you!
  </p>
  <button
    onClick={toggleForm}
    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
  >
    🎟️ Book Your VR Session
  </button>
</section>


        <section className="bg-white py-10 px-5 text-center">
          <h2 className="text-2xl font-bold mb-4">Check VR Availability in Your City</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="px-4 py-2 border rounded w-64"
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
              onClick={checkAvailability}
            >
              Check
            </button>
          </div>
          {available !== null && (
            <p className={`mt-3 font-semibold ${available ? 'text-green-600' : 'text-red-600'}`}>
              {available
                ? '🎉 Service available in your city!'
                : '😔 Oops! We are not in this city yet — but we are expanding soon. Stay tuned!'}
            </p>
          )}
        </section>

       

        <section className="bg-white py-12 px-5 text-center">
          <h2 className="text-2xl font-bold mb-8">Why Try Our VR Experience?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[FaVrCardboard, FaMapMarkerAlt, FaRupeeSign, FaCheckCircle].map((Icon, i) => (
              <div key={i} className="bg-gray-100 p-5 rounded-lg w-56 text-center shadow">
                <Icon className="text-4xl text-blue-600 mb-2 mx-auto" />
                <h3 className="font-semibold text-lg">
                  {['Immersive Preview', 'At Your Doorstep', 'Minimal Cost', 'Easy Booking'][i]}
                </h3>
                <p className="text-sm mt-1">
                  {
                    [
                      'Get a 3D tour before you travel.',
                      'We come to you with our mobile VR kit.',
                      'Affordable pricing for every traveler.',
                      'Instant online scheduling.',
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </section>

     <section className="py-10 px-5 bg-gray-200 text-center">
  <h2 className="text-2xl font-bold mb-8">See Our VR Projects</h2>

  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
    {videos.map((vid) => (
      <div
        key={vid.id}
        className="bg-white rounded-xl shadow-md overflow-hidden max-w-md w-full"
      >
        <video
          className="w-full h-auto rounded-t-xl"
          muted
          autoPlay
          loop
          controls={false}
        >
          <source src={vid.preview} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="p-4">
          <a
            href={vid.fullLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Full Video
          </a>
        </div>
      </div>
    ))}
  </div>

  {/* Message at the end */}
  <p className="mt-10 text-gray-600 text-lg font-medium">
    🚀 More Projects Coming Soon...
  </p>
</section>



        <section className="py-12 px-5 text-center">
          <h2 className="text-2xl font-bold mb-6">What Our Clients Say</h2>
          <div className="mb-4 italic">
            <p>"{testimonials[currentSlide].quote}"</p>
            <p>"{testimonials[currentSlide].stars}"</p>
            <span>- {testimonials[currentSlide].name}</span>
          </div>
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-red-600'
                }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </section>

        <section className="bg-gray-300 py-10 px-5">
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <ul className="max-w-xl mx-auto">
            {faqData.map((item, index) => (
              <li key={index} className="mb-5 border-b pb-3">
                <div
                  className="font-bold cursor-pointer flex justify-between"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {item.question}
                  <span>{openFAQ === index ? '▲' : '▼'}</span>
                </div>
                {openFAQ === index && (
                  <div className="mt-2 text-red-800 font-semibold">{item.answer}</div>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-green-100 py-10 px-5 text-center text-green-900 font-medium">
          <h2 className="text-2xl font-bold mb-4">Your Safety is Our Priority</h2>
          <ul className="space-y-2">
            <li>Fully Sanitized VR Equipment</li>
            <li>Masked & Trained Team</li>
            <li>No Physical Contact During Setup</li>
          </ul>
        </section>

        <section className="bg-white py-10 px-5 flex flex-wrap justify-center gap-10 text-center">
          {[
            ['10,000+', 'VR Tours Delivered'],
            ['98%', 'Customer Satisfaction'],
            ['300+', 'Cities Covered'],
            ['5,000+', 'Happy Travelers'],
            ['40+', 'Service Cities'],
            ['24/7', 'Support'],
          ].map(([count, label], i) => (
            <div key={i} className="text-center">
              <h3 className="text-2xl text-blue-600 font-bold">{count}</h3>
              <p>{label}</p>
            </div>
          ))}
        </section>

        {/* ✅ EmailJS Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000]">
            <div className="bg-white p-5 rounded-lg w-[90%] max-w-[500px] relative">
              <span className="absolute top-2 right-3 text-2xl cursor-pointer" onClick={toggleForm}>
                ✕
              </span>
              <h3 className="text-xl font-bold mb-4 text-center">Book Your VR Session</h3>
             <form onSubmit={sendEmail} className="space-y-4" id="vr-booking-form">
  <input type="text" name="name" placeholder="Full Name" required className="w-full border px-3 py-2 rounded" />
  <input type="email" name="email" placeholder="Email" required className="w-full border px-3 py-2 rounded" />
  <input type="tel" name="contact" placeholder="Contact Number" required className="w-full border px-3 py-2 rounded" />
  <input type="text" name="address" placeholder="Address" required className="w-full border px-3 py-2 rounded" />
  <input type="date" name="date" required className="w-full border px-3 py-2 rounded" />

  {/* NEW: VR Video Type Dropdown */}
  <select
    name="videoType"
    required
    className="w-full border px-3 py-2 rounded bg-white text-gray-800"
    defaultValue=""
  >
    <option value="" disabled>
      Select VR Video Type
    </option>
    <option value="Our Provided VR Tour Videos">Our Provided VR Tour Videos</option>
    <option value="Your Own Video in VR">Your Own Video in VR</option>
  </select>

  <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
    Submit
  </button>
</form>


              {bookingLoading && (
                <div className="text-center text-blue-600 mt-3 animate-pulse font-semibold">
                  ⏳ Booking in progress...
                </div>
              )}

              {bookingSuccess && (
                <div className="text-center text-green-600 mt-3 font-semibold animate-fade-in">
                  🎉 Booking Confirmed! You’ll receive a confirmation email shortly.
                </div>
              )}
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917046726220"
          className="fixed bottom-5 right-5 p-3 rounded-full bg-green-500 text-white text-xl shadow hover:bg-green-600 z-[999]"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* Book Now Button */}
        <button
          onClick={toggleForm}
          className="fixed bottom-4 left-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 z-[999]"
        >
          🎟️ Book Now
        </button>
      </div>
    </PageLayout>
  );
};

export default VRServicePage;
