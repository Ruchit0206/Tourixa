import React, { useState, useEffect } from "react";
import logo from "/logo.jpeg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import {
	FaUser,
	FaGift,
	FaHome,
	FaGlobe,
	FaHiking,
	FaSuitcase,
	FaPlane,
	FaPeopleCarry,
	FaHeart,
	FaDharmachakra,
	FaBaby,
	FaBrain,
	FaVideo,
	FaCubes,
	FaSyncAlt,
	FaLandmark,
	FaUniversity,
	FaBusinessTime,
	FaUsers,
	FaTree,
	FaTrain,
} from "react-icons/fa";

// --- Dropdown Section Data ---
const dropdownSections = [
	{
		id: "second",
		label: "Tours",
		links: [
			{ to: "/international", text: <><FaGlobe className="inline mr-2" />International</> },
			{ to: "/Domestic", text: <><FaPlane className="inline mr-2" />Domestic</> },
			{ to: "/Group Tour", text: <><FaPeopleCarry className="inline mr-2" />Group Tour</> },
			{ to: "/Solo Tour", text: <><FaHiking className="inline mr-2" />Solo Tour</> },
			{ to: "/Nature and Tracking", text: <><FaTree className="inline mr-2" />Nature</> },
			{ to: "/Maharaja Express", text: <><FaTrain className="inline mr-2" />Maharaja Express</> },
			{ to: "/Honeymoon Package", text: <><FaHeart className="inline mr-2" />Honeymoon</> },
			{ to: "/Spiritual Places", text: <><FaDharmachakra className="inline mr-2" />Spiritual</> },
			{ to: "/Children Places", text: <><FaBaby className="inline mr-2" />Children Places</> },
		],
	},
	{
		id: "fourth",
		label: "Planning",
		links: [
			{ to: "/Ai Tour Planner", text: <><FaBrain className="inline mr-2" />AI Tour Planner</> },
			{ to: "/plan-with-us", text: <><FaSuitcase className="inline mr-2" />Plan With Us</> },
		],
	},
	{
		id: "fifth",
		label: "Media",
		links: [
			{ to: "/vr-service-page", text: <><FaGlobe className="inline mr-2" />VR Tour</> },
			{ to: "/Video", text: <><FaVideo className="inline mr-2" />Video</> },
			{ to: "/3D Model", text: <><FaCubes className="inline mr-2" />3D Model</> },
			{ to: "/360 Video", text: <><FaSyncAlt className="inline mr-2" />360 Video</> },
		],
	},
	{
		id: "six",
		label: "Heritage",
		links: [
			{ to: "/Heritage Tour", text: <><FaLandmark className="inline mr-2" />Heritage Tour</> },
			{ to: "/Museum", text: <><FaUniversity className="inline mr-2" />Museum</> },
			{ to: "/Video", text: <><FaVideo className="inline mr-2" />Forgotten Traditions</> },
			{ to: "/3D Model", text: <><FaCubes className="inline mr-2" />Festival Tours</> },
		],
	},
	{
		id: "corporate",
		label: "Corporate",
		links: [
			{ to: "/Corporate Packages", text: <><FaSuitcase className="inline mr-2" />Corporate Packages</> },
			{ to: "/Business Meetings", text: <><FaBusinessTime className="inline mr-2" />Business Meetings</> },
			{ to: "/Team Offsite", text: <><FaUsers className="inline mr-2" />Team Offsite</> },
			{ to: "/Executive Retreats", text: <><FaTree className="inline mr-2" />Executive Retreats</> },
		],
	},
];

// --- Reusable DropdownMenu Component ---
const DropdownMenu = ({ section, dropdownOpen, handleDropdownToggle, handleNavClick, isMobile }) => {
	if (!isMobile) {
		return (
			<li className="relative group">
				<div className="cursor-pointer hover:text-cyan-400 transition flex items-center">
					{section.label}
				</div>
				<div className="absolute left-0 top-full mt-2 z-[1001] invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
					<ul className="bg-white text-black rounded-md shadow-lg w-56 pointer-events-auto">
						{section.links.map((link, idx) => (
							<li key={idx}>
								<Link
									to={link.to}
									onClick={handleNavClick}
									className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
								>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</li>
		);
	} else {
		return (
			<li className="relative">
				<div
					className="cursor-pointer hover:text-cyan-400 transition flex justify-between items-center"
					onClick={() => handleDropdownToggle(section.id)}
				>
					{section.label}
					<span className="ml-2">{dropdownOpen === section.id ? "▲" : "▼"}</span>
				</div>
				<ul
					className={`mt-2 bg-white text-black rounded-md shadow-lg z-[1001] w-full transition-all duration-200 ${dropdownOpen === section.id ? "block" : "hidden"
						}`}
				>
					{section.links.map((link, idx) => (
						<li key={idx}>
							<Link
								to={link.to}
								onClick={handleNavClick}
								className="block px-4 py-2 hover:bg-gray-100"
							>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</li>
		);
	}
};

// --- NavLinkItem Component ---
const NavLinkItem = ({ to, label, onClick, className = "" }) => (
	<li>
		<Link
			to={to}
			onClick={onClick}
			className={`hover:text-cyan-400 flex items-center gap-1 ${className}`}
		>
			{label}
		</Link>
	</li>
);

// --- Navbar Main Component ---
export default function Navbar(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(null);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 991);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleConfetti = () => {
		confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
	};

	const toggleNavbar = () => setIsOpen((prev) => !prev);

	const handleDropdownToggle = (id) => {
		setDropdownOpen((prev) => (prev === id ? null : id));
	};

	const handleNavClick = () => {
		setIsOpen(false);
		setDropdownOpen(null);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav className="fixed top-0 w-full z-[1000] bg-black/80 text-white text-lg shadow-md">
			<div className="max-w-[1280px] mx-auto flex justify-between items-center px-4 lg:px-6 py-4">
				{/* Logo and Toggle */}
				<div className="flex items-center gap-4">
					<Link to="/" onClick={handleNavClick}>
						<img
							src={logo}
							alt="Tourixaa Logo"
							className="h-14 w-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
						/>
					</Link>
					<button
						className="lg:hidden flex flex-col justify-center items-center w-9 h-9"
						onClick={toggleNavbar}
						aria-label={isOpen ? "Close Menu" : "Open Menu"}
						aria-expanded={isOpen}
					>
						<span
							className={`bg-white h-[2px] w-6 my-[3px] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""
								}`}
						/>
						<span
							className={`bg-white h-[2px] w-6 my-[3px] transition-all duration-300 ${isOpen ? "opacity-0" : ""
								}`}
						/>
						<span
							className={`bg-white h-[2px] w-6 my-[3px] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""
								}`}
						/>
					</button>
				</div>

				{/* Desktop Menu */}
				<div className="hidden lg:flex items-center space-x-6">
					<ul className="flex items-center gap-5 text-[20px] font-medium tracking-wide">
						<NavLinkItem to="/" label={props.first} onClick={handleNavClick} />
						{dropdownSections.map((section) => (
							<DropdownMenu
								key={section.id}
								section={section}
								dropdownOpen={dropdownOpen}
								handleDropdownToggle={handleDropdownToggle}
								handleNavClick={handleNavClick}
								isMobile={false}
							/>
						))}
						<NavLinkItem to="/community" label="Community" onClick={handleNavClick} />
						<NavLinkItem
							to="/Offers"
							label="Offers"
							onClick={handleNavClick}
							className="bg-gradient-to-r from-pink-600 to-yellow-400 text-white px-4 py-1.5 rounded-md font-bold shadow hover:scale-105 transition"
							onMouseEnter={handleConfetti}
						/>
						<NavLinkItem
							to="/Profile"
							label="Profile"
							onClick={handleNavClick}
							className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md font-semibold transition"
						/>
					</ul>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-[999] pt-20 px-6 overflow-auto">
					<button
						onClick={toggleNavbar}
						className="text-white text-3xl font-bold absolute top-5 right-5"
						aria-label="Close Menu"
					>
						&times;
					</button>
					<ul className="flex flex-col gap-4 text-lg font-medium">
						<NavLinkItem to="/" label={props.first} onClick={handleNavClick} />
						{dropdownSections.map((section) => (
							<DropdownMenu
								key={section.id}
								section={section}
								dropdownOpen={dropdownOpen}
								handleDropdownToggle={handleDropdownToggle}
								handleNavClick={handleNavClick}
								isMobile={true}
							/>
						))}
						<NavLinkItem to="/community" label="Community" onClick={handleNavClick} />
						<NavLinkItem
							to="/Offers"
							label="Offers"
							onClick={handleNavClick}
							className="bg-gradient-to-r from-pink-600 to-yellow-400 text-white px-4 py-2 rounded-md font-bold mt-4"
							onMouseEnter={handleConfetti}
						/>
						<NavLinkItem
							to="/Profile"
							label="Profile"
							onClick={handleNavClick}
							className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold mt-2"
						/>
					</ul>
				</div>
			)}
		</nav>
	);
}

Navbar.propTypes = {
	first: PropTypes.string.isRequired,
	second: PropTypes.string,
	third: PropTypes.string,
	fourth: PropTypes.string,
	fifth: PropTypes.string,
	six: PropTypes.string,
	seven: PropTypes.string,
};
