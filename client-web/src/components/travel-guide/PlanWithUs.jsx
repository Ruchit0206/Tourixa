// PlanWithUs.jsx using Tailwind CSS
import React, { useState, useEffect } from 'react';
import PageLayout from '../layouts/PageLayout';
import {
	FaRegHandshake,
	FaMapMarkedAlt,
	FaSmile,
	FaCheckCircle,
	FaChevronDown,
	FaChevronUp,
	FaCalculator,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PlanWithUs() {
	const [showFAQ, setShowFAQ] = useState(null);
	const [budget, setBudget] = useState(0);
	const [people, setPeople] = useState(1);
	const [days, setDays] = useState(1);

	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	const toggleFAQ = (index) => {
		setShowFAQ(showFAQ === index ? null : index);
	};

	const calculateBudget = () => {
		const basePerPerson = 2000;
		const total = basePerPerson * people * days;
		setBudget(total);
		if (total > 0) {
			confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
		}
	};

	return (
		<PageLayout>
			<div className="px-6 py-10 bg-gray-100 text-gray-800 mt-2">
				<motion.h1
					className="text-4xl font-bold text-center mb-2"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
				>
					Plan Your Perfect Journey With Us ✈️
				</motion.h1>

				<motion.p
					className="text-lg text-center text-gray-500 mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					Let’s create unforgettable memories together.
				</motion.p>

				<motion.div
					className="bg-yellow-100 text-yellow-700 px-6 py-2 rounded-lg text-center font-semibold w-fit mx-auto mb-10"
					animate={{ scale: [1, 1.05, 1] }}
					transition={{ repeat: Infinity, duration: 2 }}
				>
					🎉 Get 10% OFF on early bookings! Offer ends in 3 days.
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{[
						{
							icon: <FaMapMarkedAlt />,
							title: 'Choose Destination',
							desc: 'Explore top destinations or tell us your dream location.',
						},
						{
							icon: <FaRegHandshake />,
							title: 'Customize Your Package',
							desc: 'Select travel dates, hotels, and activities.',
						},
						{
							icon: <FaCheckCircle />,
							title: 'Confirm & Pack',
							desc: 'Get your full itinerary instantly after booking.',
						},
						{
							icon: <FaSmile />,
							title: 'Enjoy & Share',
							desc: 'Travel peacefully while we handle everything!',
						},
					].map((step, idx) => (
						<div
							key={idx}
							className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition-transform text-center"
							data-aos="fade-up"
						>
							<div className="text-3xl text-blue-600 mb-4">{step.icon}</div>
							<h3 className="text-lg font-semibold mb-2">{step.title}</h3>
							<p className="text-sm text-gray-600">{step.desc}</p>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<h2 className="text-2xl font-bold">Popular Plans</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
						{[
							{
								title: 'Budget Plan',
								price: '₹7,999',
								desc: 'Perfect for short getaways',
								features: [
									'2 Nights / 3 Days',
									'Standard Hotel',
									'Local Transport',
								],
							},
							{
								title: 'Comfort Plan',
								price: '₹14,999',
								desc: 'For relaxed vacations',
								features: ['4 Nights / 5 Days', 'Premium Hotel', 'City Tour'],
							},
							{
								title: 'Luxury Plan',
								price: '₹25,000+',
								desc: 'For a premium experience',
								features: ['6 Nights / 7 Days', '5-Star Hotel', 'All-inclusive'],
							},
						].map((card, i) => (
							<div
								key={i}
								className="bg-white p-6 rounded-2xl shadow text-center"
								data-aos="zoom-in"
							>
								<h3 className="text-xl font-semibold mb-1">{card.title}</h3>
								<p className="text-sm text-gray-500 mb-2">{card.desc}</p>
								<h4 className="text-xl font-bold text-green-600 mb-3">
									{card.price}
								</h4>
								<ul className="text-sm text-gray-600 space-y-1">
									{card.features.map((feat, j) => (
										<li key={j}>{feat}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				<div className="bg-white p-6 sm:p-10 rounded-2xl shadow max-w-xl mx-auto mt-16 text-center">
					<FaCalculator className="text-3xl text-blue-600 mx-auto mb-3" />
					<h2 className="text-xl font-semibold mb-4">Budget Estimator</h2>

					<div className="mb-4 text-left">
						<label className="block font-medium text-sm mb-1">
							👥 Number of People
						</label>
						<input
							type="number"
							className="w-full border rounded-md px-3 py-2"
							value={people}
							onChange={(e) => setPeople(e.target.value)}
						/>
					</div>

					<div className="mb-4 text-left">
						<label className="block font-medium text-sm mb-1">📆 Number of Days</label>
						<input
							type="number"
							className="w-full border rounded-md px-3 py-2"
							value={days}
							onChange={(e) => setDays(e.target.value)}
						/>
					</div>

					<button
						className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
						onClick={calculateBudget}
					>
						💰 Estimate Cost
					</button>

					{budget > 0 && (
						<p className="text-green-600 font-bold mt-4">Estimated Budget: ₹{budget}</p>
					)}
				</div>

				<div className="text-center mt-16">
					<h2 className="text-2xl font-bold">Ready to Get Started?</h2>
					<p className="text-sm text-gray-600 mt-1 mb-4">
						We’ll craft a travel plan that’s as unique as you are 💫
					</p>
					<button
						className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold"
						onClick={() => window.open('https://forms.gle/YOUR_FORM_ID', '_blank')}
					>
						Fill Planning Form
					</button>
				</div>

				<div className="mt-16 max-w-2xl mx-auto">
					<h2 className="text-2xl font-bold text-center mb-4">FAQs</h2>
					{[
						{
							q: 'Can I plan for international trips?',
							a: 'Yes! We support both domestic and international travel.',
						},
						{
							q: 'Is there a cancellation policy?',
							a: 'We offer flexible cancellation based on the agency terms.',
						},
						{
							q: 'Do you provide visa support?',
							a: 'Yes, we help with documentation and application guidance.',
						},
					].map((item, idx) => (
						<div
							key={idx}
							className="bg-white p-4 rounded-xl shadow mb-3 cursor-pointer"
						>
							<div
								className="flex justify-between items-center font-semibold"
								onClick={() => toggleFAQ(idx)}
							>
								{item.q} {showFAQ === idx ? <FaChevronUp /> : <FaChevronDown />}
							</div>
							{showFAQ === idx && (
								<div className="text-sm text-gray-600 mt-2">{item.a}</div>
							)}
						</div>
					))}
				</div>

				<a
					href="https://wa.me/917046726220"
					className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg z-50 font-semibold hover:bg-green-600"
					target="_blank"
					rel="noopener noreferrer"
				>
					📲 Chat with Us
				</a>
			</div>
		</PageLayout>
	);
}
