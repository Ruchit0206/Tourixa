import React, { useState, useEffect } from "react";
import logo from "/logo.jpeg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import {
	FaGift,
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

// ---------------------- Dropdown Menu Data ----------------------
const dropdownSections = [
	
	{
		id: "fourth",
		label: "Travel Guide",
		links: [
			{ to: "/aitour", text: <><FaBrain className="inline mr-2" />AI Tour Planner</> },
			{ to: "/plan-with-us", text: <><FaSuitcase className="inline mr-2" />Plan With Us</> },
		],
	},
	{
		id: "fifth",
		label: "Feature",
		links: [
			{ to: "/vr-service-page", text: <><FaGlobe className="inline mr-2" />VR Tour</> },
			{ to: "/videopage", text: <><FaVideo className="inline mr-2" />Video</> },
			{ to: "/3dmodel", text: <><FaCubes className="inline mr-2" />3D Model</> },
			
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

// ---------------------- Dropdown Component ----------------------
const DropdownMenu = ({ section, dropdownOpen, handleDropdownToggle, handleNavClick, isMobile }) => {
	if (!isMobile) {
		return (
			<li className="relative group">
				<div className="cursor-pointer hover:text-cyan-400 transition flex items-center">{section.label}</div>
				<div className="absolute left-0 top-full mt-2 z-[1001] invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
					<ul className="bg-white text-black rounded-md shadow-lg w-56 pointer-events-auto">
						{section.links.map((link, idx) => (
							<li key={idx}>
								<Link to={link.to} onClick={handleNavClick} className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap">{link.text}</Link>
							</li>
						))}
					</ul>
				</div>
			</li>
		);
	} else {
		return (
			<li className="relative">
				<div className="cursor-pointer hover:text-cyan-400 transition flex justify-between items-center" onClick={() => handleDropdownToggle(section.id)}>
					{section.label}
					<span className="ml-2">{dropdownOpen === section.id ? "▲" : "▼"}</span>
				</div>
				<ul className={`mt-2 bg-white text-black rounded-md shadow-lg z-[1001] w-full transition-all duration-200 ${dropdownOpen === section.id ? "block" : "hidden"}`}>
					{section.links.map((link, idx) => (
						<li key={idx}>
							<Link to={link.to} onClick={handleNavClick} className="block px-4 py-2 hover:bg-gray-100">{link.text}</Link>
						</li>
					))}
				</ul>
			</li>
		);
	}
};

// ---------------------- NavLinkItem ----------------------
const NavLinkItem = ({ to, label, onClick, className = "", ...rest }) => (
	<li>
		<Link to={to} onClick={onClick} className={`hover:text-cyan-400 flex items-center gap-1 ${className}`} {...rest}>{label}</Link>
	</li>
);

// ---------------------- Main Navbar ----------------------
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
	const handleDropdownToggle = (id) => setDropdownOpen((prev) => (prev === id ? null : id));
	const handleNavClick = () => {
		setIsOpen(false);
		setDropdownOpen(null);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav className="fixed top-0 w-full z-[1000] bg-black/80 text-white text-lg shadow-md">
		<div className="w-full flex items-center justify-between py-4 px-4 relative">

				<div className="pl-[4px]">
					<Link to="/" onClick={handleNavClick}>
						<img src={logo} alt="Tourixaa Logo" className="h-14 w-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-200" />
					</Link>
				</div>

				{/* Hamburger */}
				<button className="lg:hidden flex flex-col justify-center items-center w-9 h-9" onClick={toggleNavbar}>
					<span className={`bg-white h-[2px] w-6 my-[3px] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
					<span className={`bg-white h-[2px] w-6 my-[3px] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
					<span className={`bg-white h-[2px] w-6 my-[3px] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
				</button>

				{/* Center Menu */}
				<div className="hidden lg:flex items-center w-full">
					<ul className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6 text-[18px] font-medium tracking-wide">
						<NavLinkItem to="/" label={props.first} onClick={handleNavClick} />
						<NavLinkItem to="/packages" label="Packages" onClick={handleNavClick} />
						{dropdownSections.map((section) => (
							<DropdownMenu key={section.id} section={section} dropdownOpen={dropdownOpen} handleDropdownToggle={handleDropdownToggle} handleNavClick={handleNavClick} isMobile={false} />
						))}
						<NavLinkItem to="/community" label="Community" onClick={handleNavClick} />
						<NavLinkItem to="/Offers" label={<><FaGift className="inline mr-1" />Offers</>} onClick={() => { handleNavClick(); handleConfetti(); }} />
					</ul>

					{/* Right Side */}
					<ul className="ml-auto flex items-center gap-4 pr-[4px]">
						<Link
	to="/dashboard"
	onClick={handleNavClick}
	className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-cyan-500 hover:text-white transition font-semibold"
>
	Add Package
</Link>
	</ul>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-[999] pt-20 px-6 overflow-auto">
					<button onClick={toggleNavbar} className="text-white text-3xl font-bold absolute top-5 right-5">&times;</button>
					<ul className="flex flex-col gap-4 text-lg font-medium">
	<NavLinkItem to="/" label={props.first} onClick={handleNavClick} />
	<NavLinkItem to="/packages" label="Packages" onClick={handleNavClick} />
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
		label={<><FaGift className="inline mr-2" />Offers</>}
		onClick={() => {
			handleNavClick();
			handleConfetti();
		}}
		className="hover:text-cyan-400 transition"
	/>
	<Link
	to="/login"
	onClick={handleNavClick}
	className="bg-white text-black text-center px-4 py-2 rounded-md shadow hover:bg-cyan-500 hover:text-white transition font-semibold"
>
	Add Package
</Link>

</ul>

				</div>
			)}
		</nav>
	);
}

Navbar.propTypes = {
	first: PropTypes.string.isRequired,
};
