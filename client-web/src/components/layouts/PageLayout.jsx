import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children }) {
	return (
		<>
			<Navbar
				first="Home"
				second="Packages"
				third="Offers"
				fourth="Travel Guide"
				fifth="Feature"
				six="Cultural Journeys"
				seven="Corporate Getaways"
			/>
			<main className="pt-16 md:pt-20">

				{children}
			</main>
			<Footer />
		</>
	);
}
