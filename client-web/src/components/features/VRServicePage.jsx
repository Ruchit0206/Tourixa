import React, { useState, useEffect } from 'react';
import video from '/newvideo.mp4';
import { FaVrCardboard, FaMapMarkerAlt, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';
import PageLayout from '../layouts/PageLayout';

const VRServicePage = () => {
	const [showForm, setShowForm] = useState(false);
	const toggleForm = () => setShowForm(!showForm);

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
		{
			question: 'Do I need special equipment?',
			answer: 'No, we bring everything to your home.',
		},
		{
			question: 'Is it suitable for kids and seniors?',
			answer: "Yes, it's safe and fun for all age groups.",
		},
	];

	const [openFAQ, setOpenFAQ] = useState(null);
	const [city, setCity] = useState('');
	const [available, setAvailable] = useState(null);

	const checkAvailability = () => {
		const availableCities = [
			'Ahmedabad',
			'Surat',
			'Mumbai',
			'Delhi',
			'Bangalore',
			'Vadodara',
			'Patna',
		];
		setAvailable(availableCities.includes(city.trim()));
	};

	return (
		<PageLayout>
			<div className="mt-[66px] bg-gradient-to-b from-[#7490b9] to-[#8bf9d6]">
				<div className="bg-[#ffde59] text-black py-2 px-5 text-center font-semibold animate-fadeInDown">
					🎉 First-time users get a free 10-minute VR destination tour!
				</div>

				<section className="text-center py-24 px-5 text-black">
					<h1 className="text-4xl font-bold mb-3">
						Experience Travel in Virtual Reality
					</h1>
					<p className="mb-5">
						We bring the world to your living room with Tourixa's exclusive VR service.
					</p>
					<button
						className="bg-blue-600 text-white py-3 px-6 rounded font-semibold hover:bg-blue-800 transition"
						onClick={toggleForm}
					>
						Book a Free Demo
					</button>
				</section>

				<section className="bg-white py-12 px-5 text-center">
					<h2 className="text-2xl font-bold mb-8">Why Try Our VR Experience?</h2>
					<div className="flex flex-wrap justify-center gap-8">
						{[FaVrCardboard, FaMapMarkerAlt, FaRupeeSign, FaCheckCircle].map(
							(Icon, i) => (
								<div
									key={i}
									className="bg-gray-100 p-5 rounded-lg w-56 text-center shadow"
								>
									<Icon className="text-4xl text-blue-600 mb-2 mx-auto" />
									<h3 className="font-semibold text-lg">
										{
											[
												'Immersive Preview',
												'At Your Doorstep',
												'Minimal Cost',
												'Easy Booking',
											][i]
										}
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
							)
						)}
					</div>
				</section>

				<section className="py-10 px-5 bg-gray-200 text-center">
					<h2 className="text-2xl font-bold mb-5">See It In Action</h2>
					<div className="flex justify-center">
						<video
							className="rounded shadow-lg"
							width="50%"
							height="400"
							muted
							autoPlay
							loop
						>
							<source src={video} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
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
						<p
							className={`mt-3 font-semibold ${
								available ? 'text-green-600' : 'text-red-600'
							}`}
						>
							{available
								? '🎉 Service available in your city!'
								: '😔 Oops! We are not in this city yet — but we are expanding soon. Stay tuned!'}
						</p>
					)}
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
					<h2 className="text-2xl font-bold mb-4 text-center">
						Frequently Asked Questions
					</h2>
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
									<div className="mt-2 text-red-800 font-semibold">
										{item.answer}
									</div>
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

				<section className="bg-blue-600 text-white text-center py-16 px-5">
					<h2 className="text-3xl font-bold mb-3">Ready to Explore Virtually?</h2>
					<p className="mb-6">
						Feel the adventure before the journey. Book your home VR session today!
					</p>
					<button
						className="bg-white text-blue-600 px-5 py-2 rounded font-semibold hover:bg-gray-200"
						onClick={toggleForm}
					>
						Get Started
					</button>
				</section>

				{showForm && (
					<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000]">
						<div className="bg-white p-5 rounded-lg w-[90%] max-w-[700px] relative">
							<span
								className="absolute top-2 right-3 text-2xl cursor-pointer"
								onClick={toggleForm}
							>
								✕
							</span>
							<iframe
								src="https://docs.google.com/forms/d/e/1FAIpQLScQqRjKg6boS7fI3Mt1VJGX8i7kRaZWn2cqbNu_nP9bHEGHlQ/viewform?usp=dialog"
								width="100%"
								height="500"
								frameBorder="0"
								title="VR Booking Form"
							>
								Loading…
							</iframe>
						</div>
					</div>
				)}

				<a
					href="https://wa.me/919979683808"
					className="fixed bottom-5 right-5 px-4 py-2 rounded-full bg-green-500 text-white font-semibold text-sm shadow hover:bg-green-600 z-[999]"
					target="_blank"
					rel="noopener noreferrer"
				>
					📲 Chat with Us
				</a>
			</div>
		</PageLayout>
	);
};

export default VRServicePage;
