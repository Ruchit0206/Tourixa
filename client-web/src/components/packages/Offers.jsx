import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageLayout from '../layouts/PageLayout';
// import solotour from "/images/solotour.jpg"

const offers = [
	{
		title: 'Summer Special: 30% Off',
		description: 'Enjoy your summer vacation with an amazing 30% discount on select packages.',
		imageUrl:
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
	},
	{
		title: 'Family Package: Kids Travel Free',
		description:
			'Bring your family along and kids travel absolutely free on all domestic tours.',
		imageUrl:
			'https://static7.depositphotos.com/1006188/693/v/950/depositphotos_6936820-stock-illustration-family-holidays-under-palm-trees.jpg',
	},
	{
		title: 'Early Bird Offer',
		description: 'Book your tour 3 months in advance and get exclusive perks & gifts.',
		imageUrl:
			'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
	},
	{
		title: 'Solo Tour : Student Special 40% Off',
		description: 'Embark on your solo adventure with our Student Special: Enjoy 40% Off',
		imageUrl:
			'https://medellin-tours.com/wp-content/uploads/2023/09/why-tourism-can-be-bad-for-a-city.jpg',
				},
	{
		title: 'Group Tour : Upto 60%  ',
		description: 'Adventure Together: Group Tours at 40 % Off – Because the More, the Merrier!',
		imageUrl:
			'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsrkxFCyoehU0cyLZep-rvSYmNbcaTEB3tA-XgzsXiKuV0xX1DEBiFw9Vz3bRdzMPJD3ccj6ipGiu1XCjovYF-_gx5LjWe93kmSoWrDPVyKmdzp6tq3dQDP806X6iUNnsT5L4pXg83MF8C/w625-h351/photo-1529156069898-49953e39b3ac.jpg',
				},
];

const GiftClaimForm = ({ onSubmit, onCancel }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const firstInputRef = useRef(null);

	useEffect(() => {
		if (firstInputRef.current) firstInputRef.current.focus();
		const esc = (e) => e.key === 'Escape' && onCancel();
		window.addEventListener('keydown', esc);
		return () => window.removeEventListener('keydown', esc);
	}, [onCancel]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const phoneRegex = /^[6-9]\d{9}$/;

		if (!name || !email || !phone) return alert('Fill all fields.');
		if (!emailRegex.test(email)) return alert('Enter valid email.');
		if (!phoneRegex.test(phone)) return alert('Enter valid 10-digit phone.');

		setSubmitting(true);

		emailjs
			.send(
				'service_lr9tfn8',
				'template_es04yxe',
				{
					from_name: name,
					from_email: email,
					from_phone: phone,
					message: `Gift claim request from ${name}`,
				},
				'rysnNr2iULZpL1x7V'
			)
			.then(
				() => {
					setSubmitting(false);
					onSubmit();
					setName('');
					setEmail('');
					setPhone('');
				},
				(error) => {
					setSubmitting(false);
					alert('Something went wrong. Try again.');
					console.error('EmailJS Error:', error);
				}
			);
	};

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
			onClick={onCancel}
		>
			<div
				className="bg-white rounded-lg shadow-xl p-6 w-80"
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="text-yellow-600 font-semibold text-xl text-center mb-4">
					Please Fill Your Details
				</h2>
				<form className="flex flex-col gap-3" onSubmit={handleSubmit}>
					<input
						ref={firstInputRef}
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Full Name"
						className="border-2 border-yellow-300 rounded px-3 py-2 focus:outline-yellow-500"
						required
					/>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email Address"
						type="email"
						className="border-2 border-yellow-300 rounded px-3 py-2 focus:outline-yellow-500"
						required
					/>
					<input
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						placeholder="Phone Number"
						type="tel"
						inputMode="numeric"
						pattern="[0-9]*"
						onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
						className="border-2 border-yellow-300 rounded px-3 py-2 focus:outline-yellow-500"
						required
					/>
					<button
						type="submit"
						disabled={submitting}
						className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 font-bold rounded transition"
					>
						{submitting ? 'Submitting...' : 'Submit'}
					</button>
					<button
						type="button"
						onClick={onCancel}
						className="mt-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded"
					>
						Cancel
					</button>
				</form>
			</div>
		</div>
	);
};

const SuccessMessage = ({ onClose }) => {
	useEffect(() => {
		const esc = (e) => e.key === 'Escape' && onClose();
		window.addEventListener('keydown', esc);
		return () => window.removeEventListener('keydown', esc);
	}, [onClose]);

	return (
		<div
			className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-lg shadow-xl p-6 w-80 text-center"
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="text-yellow-600 text-xl font-semibold mb-2">Congratulations!</h2>
				<p className="text-gray-700 mb-4">
					You have successfully claimed your exclusive travel kit. Our team will contact
					you soon!
				</p>
				<button
					className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded"
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default function Offers() {
	const [showFormModal, setShowFormModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const handleClaimClick = () => setShowFormModal(true);
	const handleFormSubmit = () => {
		setShowFormModal(false);
		setShowSuccessModal(true);
	};

	return (
		<PageLayout>
			<div className="max-w-5xl mx-auto p-4 text-gray-800">
				<h1 className="text-center text-3xl font-bold text-blue-800 mb-6">
					Exclusive Offers
				</h1>

				{/* Carousel */}
				<div className="flex overflow-x-auto gap-4 pb-2 snap-x">
					{offers.map((offer, index) => (
						<div
							key={index}
							className="min-w-[280px] bg-white rounded-lg shadow-md snap-start overflow-hidden"
						>
							<img
								src={offer.imageUrl}
								alt={offer.title}
								className="h-40 w-full object-cover"
							/>
							<div className="p-4">
								<h2 className="text-xl font-semibold text-blue-800 mb-2">
									{offer.title}
								</h2>
								<p className="text-sm text-gray-600">{offer.description}</p>
							</div>
						</div>
					))}
				</div>

				{/* Gift Section */}
				<section className="mt-8 bg-yellow-50 rounded-xl p-6 shadow-lg text-center relative animate-pulse">
					<div className="text-4xl mb-3">🎁</div>
					<h3 className="text-2xl font-bold text-yellow-700 mb-3">
						Special Gift & Package Offer
					</h3>
					<p className="text-yellow-900 text-lg mb-4">
						Book any package with <strong>Tourixaa</strong> and receive an exclusive
						travel kit with premium items.
					</p>
					<div className="text-left max-w-md mx-auto mb-5">
						<h4 className="text-lg font-semibold mb-2 text-yellow-700">
							What You'll Get:
						</h4>
						<ul className="list-disc list-inside space-y-1 text-yellow-800">
							<li>🥤 Branded Water Bottle</li>
							<li>☕ Premium Coffee Packet</li>
							<li>🪥 Travel Comb</li>
							<li>🍳 Kitchen Item</li>
							<li>🖊️ Quality Pen</li>
							<li>📒 Diary for memorable moments</li>
							<li>And many more...</li>
						</ul>
					</div>
					<button
						onClick={handleClaimClick}
						className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition transform hover:scale-105"
					>
						Claim Your Gift 🎁
					</button>
				</section>

				{/* Modals */}
				{showFormModal && (
					<GiftClaimForm
						onSubmit={handleFormSubmit}
						onCancel={() => setShowFormModal(false)}
					/>
				)}
				{showSuccessModal && <SuccessMessage onClose={() => setShowSuccessModal(false)} />}
			</div>
		</PageLayout>
	);
}
