import React, { useState } from 'react';
import logo from '/logo.jpeg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export default function Navbar(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(null);

	const handleConfetti = () => {
		confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
	};

	const toggleNavbar = () => setIsOpen(!isOpen);

	const handleDropdownToggle = (id) => {
		setDropdownOpen(dropdownOpen === id ? null : id);
	};

	const handleMouseEnter = (id) => {
		if (window.innerWidth > 991) setDropdownOpen(id);
	};

	const handleMouseLeave = () => {
		if (window.innerWidth > 991) setDropdownOpen(null);
	};

	const handleNavClick = () => {
		setIsOpen(false);
		setDropdownOpen(null);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<nav
			className="fixed top-0 w-full z-[1000] bg-black/80 text-white text-lg"
			onMouseLeave={handleMouseLeave}
		>
			<div className="flex justify-between items-center px-4 py-2">
				<div className="flex items-center">
					<Link to="/" onClick={handleNavClick} className="mr-4">
						<img src={logo} alt="Tourixaa Logo" className="h-12 w-auto" />
					</Link>
					<button
						className={`flex flex-col justify-center w-9 h-9 z-[1100] ml-auto lg:hidden ${
							isOpen ? 'open' : ''
						}`}
						onClick={toggleNavbar}
					>
						<span
							className={`bg-white h-[3px] w-6 my-[2px] transition-all ${
								isOpen ? 'rotate-45 translate-y-[5px]' : ''
							}`}
						></span>
						<span
							className={`bg-white h-[3px] w-6 my-[2px] transition-all ${
								isOpen ? 'opacity-0' : ''
							}`}
						></span>
						<span
							className={`bg-white h-[3px] w-6 my-[2px] transition-all ${
								isOpen ? '-rotate-45 -translate-y-[6px]' : ''
							}`}
						></span>
					</button>
				</div>

				<div
					className={`${
						isOpen
							? 'fixed top-0 left-0 w-full h-screen bg-black pt-20 z-[1000]'
							: 'hidden lg:flex'
					} lg:items-center lg:space-x-6`}
				>
					<ul className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-3 px-4 lg:px-0">
						<li>
							<Link
								to="/"
								onClick={handleNavClick}
								className="hover:text-cyan-400 py-2"
							>
								<span className="text-lg">{props.first}</span>
							</Link>
						</li>

						{[
							{
								id: 'second',
								label: props.second,
								links: [
									{ to: '/international', text: '🌐 International' },
									{ to: '/underde/domestic', text: '🇮🇳 Domestic' },
									{ to: '/underde/group Tour', text: '👥 Group Tour' },
									{ to: '/underde/Solo Tour', text: '🥾 Solo Tour' },
									{ to: '/underde/Nature and Tracking', text: '🌲 Nature' },
									{
										to: '/underde/Maharaja Express',
										text: '🚆 Maharaja Express',
									},
									{ to: '/underde/Honeymoon Package', text: '🏖️ Honeymoon' },
									{ to: '/underde/Spiritual Places', text: '🧘‍♂️ Spiritual' },
									{ to: '/offers', text: '👶 Children Places' },
								],
							},
							{
								id: 'fourth',
								label: props.fourth,
								links: [
									{ to: '/underde/Ai Tour Planner', text: '🤖 AI Tour Planner' },
									{ to: '/plan-with-us', text: '📝 Plan With Us' },
								],
							},
							{
								id: 'fifth',
								label: props.fifth,
								links: [
									{ to: '/vr-service-page', text: '🕶️ VR Tour' },
									{ to: '/underde/Video', text: '🎥 Video' },
									{ to: '/underde/3D Model', text: '📦 3D Model' },
									{ to: '/underde/360 Video', text: '🔄 360 Video' },
								],
							},
							{
								id: 'six',
								label: props.six,
								links: [
									{ to: '/underde/Museum', text: '🏛️ Heritage Tour' },
									{ to: '/underde/Museum', text: '🏛️ Museum' },
									{ to: '/underde/Video', text: '🎥 Forgotten Traditions' },
									{
										to: '/underde/3D Model',
										text: '📦 Festival Experience Tours',
									},
								],
							},
							{
								id: 'corporate',
								label: props.seven,
								links: [
									{
										to: '/underde/Corporate Packages',
										text: '💼 Corporate Packages',
									},
									{
										to: '/underde/Business Meetings',
										text: '🏢 Business Meetings & Events',
									},
									{
										to: '/underde/Team Offsite',
										text: '👨‍💼 Team Offsite Packages',
									},
									{
										to: '/underde/Executive Retreats',
										text: '🌴 Executive Retreats',
									},
								],
							},
						].map((item) => (
							<li
								key={item.id}
								className="relative group"
								onMouseEnter={() => handleMouseEnter(item.id)}
							>
								<div
									className="py-2 cursor-pointer"
									onClick={() => handleDropdownToggle(item.id)}
								>
									<span className="text-lg">{item.label}</span>
									<span className="ml-1 text-sm lg:hidden">▼</span>
								</div>
								<ul
									className={`absolute left-0 mt-1 bg-black border border-gray-700 rounded-md shadow-lg transition-all duration-300 w-48 z-[1001] ${
										dropdownOpen === item.id ? 'block' : 'hidden'
									}`}
								>
									{item.links.map((link, index) => (
										<li key={index}>
											<Link
												to={link.to}
												onClick={handleNavClick}
												className="block px-4 py-2 hover:bg-gray-800 text-white"
											>
												{link.text}
											</Link>
										</li>
									))}
								</ul>
							</li>
						))}

						<li>
							<Link
								to="/Offers"
								onMouseEnter={handleConfetti}
								onClick={handleNavClick}
								className="bg-gradient-to-r from-pink-600 to-yellow-400 text-white py-2 px-4 rounded-lg font-bold shadow-md animate-pulse"
							>
								<span className="text-lg">🎁 Offers</span>
							</Link>
						</li>

						<li>
							<Link
								to="/Profile"
								onClick={handleNavClick}
								className="bg-blue-600 text-white py-2 px-4 rounded-lg"
							>
								<span className="text-lg">Profile</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	first: PropTypes.string.isRequired,
	second: PropTypes.string.isRequired,
	third: PropTypes.string.isRequired,
	fourth: PropTypes.string.isRequired,
	fifth: PropTypes.string.isRequired,
	six: PropTypes.string.isRequired,
	seven: PropTypes.string.isRequired,
};
