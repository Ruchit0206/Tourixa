import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Secondpage from '../components/SecondPage';
import AboutUs from '../components/AboutUs';
import { Link, useNavigate } from 'react-router-dom';
import TravelCarouseli from '../components/TravelCarouseli';
import TravelCarouseld from '../components/TravelCarouseld';
import PageLayout from '../components/layouts/PageLayout';

export default function Home() {
	const [timeLeft, setTimeLeft] = useState({});
	const [showBackToTop, setShowBackToTop] = useState(false);
	const navigate = useNavigate();
	const [showPopupDisclaimer, setShowPopupDisclaimer] = useState(true);



	const greetings = [
		'नमः',
		'Namaste!',
		'નમસ્તે!',
		'नमस्कार!',
		'নমস্কার!',
		'ਸਤ ਸ੍ਰੀ ਅਕਾਲ!',
		'నమస్తే!',
		'Vadakkam!',
	];

	useEffect(() => {
		const launchDate = new Date('2025-07-05T00:00:00').getTime();
		const interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = launchDate - now;
			if (distance < 0) {
				clearInterval(interval);
				setTimeLeft(null);
				return;
			}
			setTimeLeft({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000),
			});
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.pageYOffset > 300);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
	const scrollToSecondPage = () => {
		const section = document.getElementById('next-section');
		section?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<PageLayout className="overflow-hidden">

			{/* Hero Section */}
			<section
	className="relative w-full h-screen bg-cover bg-center text-white"
	style={{ backgroundImage: `url(homepage.jpg)` }}
>

				<div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>


				<div className="relative w-full h-full flex flex-col justify-center items-start space-y-6 px-4 md:px-6">
					<p className="text-orange-300 font-semibold tracking-wider uppercase text-sm md:text-base animate-pulse">
						Launching Soon
					</p>

					<h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
						Discover The{' '}
						<span className="text-gradient bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
							Trip
						</span>{' '}
						Crafted By You
					</h1>

					<p className="text-lg md:text-xl max-w-2xl">
						<span className="inline-block text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-yellow-300 to-green-300 bg-clip-text">
							<TypeAnimation
								sequence={greetings.flatMap((g) => [g, 2000])}
								speed={80}
								repeat={Infinity}
								cursor={true}
							/>
						</span>
						<br />
						Our team is working hard to bring you a powerful user experience. Stay tuned!
					</p>


					{/* Buttons Group */}
					<div className="flex flex-wrap gap-4 mt-6">
						

						<Link to="/agency/login" target="_blank" rel="noopener noreferrer">
							<button className={btnPrimaryClasses}>Join As Agency</button>
						</Link>

						<Link to="/packages">
							<button className={btnPrimaryClasses}>Visit Packages</button>
						</Link>
						<button className={btnPrimaryClasses}>Profile Section</button>
					</div>


					{/* Tagline */}
					<div className="mt-4 text-lg font-semibold uppercase tracking-wide text-yellow-400 drop-shadow-md">
						India's First Open Travel Platform
					</div>

					{/* Countdown Timer */}
					{timeLeft && (
						<div className="mt-6 inline-flex items-center gap-4 bg-black/40 px-6 py-3 rounded-lg shadow-lg text-xl font-semibold tracking-widest">
							<TimeBlock label="Days" value={timeLeft.days} />
							<TimeBlock label="Hours" value={timeLeft.hours} />
							<TimeBlock label="Minutes" value={timeLeft.minutes} />
							<TimeBlock label="Seconds" value={timeLeft.seconds} />
						</div>
					)}

					{/* Scroll Down */}
					<div
						onClick={scrollToSecondPage}
						className="cursor-pointer flex items-center gap-2 font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300 w-max select-none"
					>
						Start Your Journey
						<img
							src="https://placeaa-seven.vercel.app/static/media/spiral.6e188be20c53c6fdce60d3f1a7b0ea1f.svg"
							alt="start"
							className="w-6 h-6 rotate-180"
							loading="lazy"
						/>
					</div>
				</div>
			</section>

			{/* About and Carousels Section */}
			<main className="px-3 mx-auto space-y-16 py-12">
				<section id="next-section" className="space-y-10 scroll-mt-20">

					<AboutUs />
					<TravelCarouseli />
					<TravelCarouseld />
					<Secondpage />
				</section>
{showPopupDisclaimer && (
  <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center px-4">
    <div className="bg-white w-full max-w-lg p-6 rounded-xl relative shadow-2xl text-center animate-fadeIn">
      
      {/* 
	  e Button */}
      <button
        className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
        onClick={() => {
          setShowPopupDisclaimer(false);
          localStorage.setItem('popupDisclaimerDismissed', 'true');
        }}
        aria-label="Dismiss disclaimer"
      >
        &times;
      </button>

     
      {/* Disclaimer Content */}
      <h2 className="text-xl font-bold mb-3 text-red-600">📌 Disclaimer</h2>
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
        All images, videos, and other visual assets shown on this website are used strictly for educational and illustrative purposes.
        We do not own the copyrights of these materials unless explicitly stated. Credit belongs to the original creators and sources.
        This content is shared with respect, aiming to raise awareness about India's cultural heritage and promote responsible tourism.
        If you are a rightful owner and would like us to remove or credit the content, please contact us directly.
      </p>

      <button
        onClick={() => {
          setShowPopupDisclaimer(false);
          localStorage.setItem('popupDisclaimerDismissed', 'true');
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition"
      >
        I Understand
      </button>
    </div>
  </div>
)}




			</main>


			{/* Back to Top and Fixed Buttons */}
			{showBackToTop && (
				<>
					<button
						onClick={scrollToTop}
						aria-label="Back to top"
						className="fixed bottom-10 right-10 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white text-3xl shadow-lg flex items-center justify-center transition-transform hover:-translate-y-1 z-50"
					>
						↑
					</button>

					<Link to ="/inquireus"><button
						onClick={() => navigate('/Inquiry')}
						className="fixed bottom-20 left-5 bg-[#7c4b30] text-white px-6 py-3 rounded-full font-bold shadow-md flex items-center gap-3 z-50 hover:bg-[#5c3724] transition duration-300"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/512/9412/9412919.png"
							alt="Inquiry"
							className="w-6"
							loading="lazy"
						/>
						<span className="hidden sm:inline">Inquiry</span>
					</button></Link>

					<button
						onClick={() => navigate('/Community')}
						className="fixed bottom-5 left-5 bg-[#7c4b30] text-white px-6 py-3 rounded-full font-bold shadow-md flex items-center gap-3 z-50 hover:bg-[#5c3724] transition duration-300"
					>
						<i className="fa-solid fa-users-rectangle"></i>
						<span className="hidden sm:inline">Community</span>
					</button>
				</>
			)}
		</PageLayout>
	);
}

// Helper for countdown blocks
const TimeBlock = ({ label, value }) => (
	<div className="flex flex-col items-center min-w-[3.5rem]">
		<span className="text-3xl font-extrabold">{value}</span>
		<span className="text-xs uppercase tracking-widest">{label}</span>
	</div>
);

// Tailwind button class for reuse in main buttons
// You can put this in your global CSS or Tailwind config if needed
const btnPrimaryClasses =
	'px-6 py-3 rounded-full font-bold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-md hover:from-pink-500 hover:to-yellow-400 transform hover:-translate-y-1 transition duration-300';

// Usage inside JSX: className={btnPrimaryClasses}
// Or you can just keep it inline for simplicity

