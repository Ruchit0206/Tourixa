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
		const launchDate = new Date('2025-06-01T00:00:00').getTime();
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
		<PageLayout>
			<div>
				<div
					className="relative bg-cover bg-center bg-no-repeat text-white w-full h-[730px]"
					style={{ backgroundImage: `url(homepage.jpg)` }}
				>
					<div className="relative z-10 flex flex-col justify-center items-start pt-32 px-10 max-w-full backdrop-blur-sm">
						<p className="text-sm text-orange-100 font-bold mb-2">Launching Soon</p>
						<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
							Discover The <span className="text-gray-300">Trip</span> Crafted By You
						</h1>
						<p className="text-lg md:text-xl mb-6 animate-fadeIn">
							<span className="text-2xl font-bold animate-fadeIn bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 bg-clip-text text-transparent inline-block animate-rainbow">
								<TypeAnimation
									sequence={greetings.flatMap((g) => [g, 2000])}
									speed={80}
									repeat={Infinity}
									cursor={true}
								/>
							</span>
							<br />
							Our team is working hard to bring you a powerful user experience. Stay
							tuned!
						</p>

						<div className="flex flex-wrap gap-4 justify-start">
							<Link to="/underde/Login As Traveller">
								<button className="min-w-[180px] max-w-[250px] py-3 px-8 text-white font-bold rounded-full bg-gradient-to-br from-[#45302d] via-[#10ea08e6] to-[#45302d] shadow-lg hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transform hover:-translate-y-1 transition-all duration-300">
									Login As Traveller
								</button>
							</Link>
							<a
								href="https://tourixaa.vercel.app/login"
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="min-w-[180px] max-w-[250px] py-3 px-8 text-white font-bold rounded-full bg-gradient-to-br from-[#45302d] via-[#10ea08e6] to-[#45302d] shadow-lg hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transform hover:-translate-y-1 transition-all duration-300">
									Join As Agency
								</button>
							</a>
							<Link to="VideoUpload">
								<button className="min-w-[180px] max-w-[250px] py-3 px-8 text-white font-bold rounded-full bg-gradient-to-br from-[#45302d] via-[#10ea08e6] to-[#45302d] shadow-lg hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 transform hover:-translate-y-1 transition-all duration-300">
									Upload Travel Moments
								</button>
							</Link>
						</div>

						<div className="mt-5 text-lg font-semibold">
							India's First Open Travel Platform
						</div>

						{timeLeft && (
							<div className="mt-4 text-xl font-bold text-[#faf0e6]">
								{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
								{timeLeft.seconds}s
							</div>
						)}

						<div
							onClick={scrollToSecondPage}
							className="cursor-pointer font-bold text-white mt-8 text-xl relative inline-block pb-1 transition-all duration-300 hover:text-yellow-300"
						>
							Start Your Journey
							<img
								src="https://placeaa-seven.vercel.app/static/media/spiral.6e188be20c53c6fdce60d3f1a7b0ea1f.svg"
								alt="start"
								className="inline-block w-6 h-6 ml-2 transform rotate-180"
							/>
							<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-yellow-400 scale-x-0 origin-right transition-transform duration-300 hover:scale-x-100 hover:origin-left"></div>
						</div>
					</div>
				</div>

				<div id="next-section">
					<AboutUs />
				</div>
				<TravelCarouseli />
				<TravelCarouseld />
				<Secondpage />

				{showBackToTop && (
					<>
						<button
							onClick={scrollToTop}
							aria-label="Back to top"
							className="fixed bottom-10 right-10 w-12 h-12 text-white text-2xl font-bold bg-gradient-to-br from-purple-600 to-blue-500 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 z-50"
						>
							↑
						</button>

						<button
							onClick={() => navigate('/International')}
							className="fixed bottom-20 left-5 bg-[#7c4b30] text-white px-5 py-3 rounded-full font-bold shadow-md flex items-center gap-2 z-50 hover:bg-[#5c3724] transition duration-300"
						>
							<img
								src="https://cdn-icons-png.flaticon.com/512/9412/9412919.png"
								alt="Inquiry"
								className="w-5"
							/>
							<span className="hidden sm:inline">Inquiry</span>
						</button>

						<button
							onClick={() => navigate('/Community')}
							className="fixed bottom-5 left-5 bg-[#7c4b30] text-white px-5 py-3 rounded-full font-bold shadow-md flex items-center gap-2 z-50 hover:bg-[#5c3724] transition duration-300"
						>
							<i className="fa-solid fa-users-rectangle"></i>
							<span className="hidden sm:inline">Community</span>
						</button>
					</>
				)}
			</div>
		</PageLayout>
	);
}
