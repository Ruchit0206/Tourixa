import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
// import FilterBar from './components/MainPackage/FilterBar';
import PackageCard from './PackageCard';
import Advertisement from './Advertisement';
import PageLayout from '../layouts/PageLayout';

const International = () => {
	const [packages, setPackages] = useState([]);
	const [filteredPackages, setFilteredPackages] = useState([]);
	const [searchSummary, setSearchSummary] = useState('');

	useEffect(() => {
		const mockData = [
			{
				title: 'Goa Getaway',
				from: 'Ahmedabad',
				location: 'Goa',
				rating: 4.2,
				originalPrice: 30000,
				discountedPrice: 22000,
				vendor: 'Sunny Travels',
				features: ['3 Nights', 'Beach Resort', 'Free Water Sports'],
				availableDates: ['2025-06-14', '2025-06-18', '2025-06-25'],
				maxGuests: 4,
				packageType: 'Domestic',
			},
			{
				title: 'Manali Adventure',
				from: 'Delhi',
				location: 'Manali',
				rating: 4.5,
				originalPrice: 25000,
				discountedPrice: 19000,
				vendor: 'Himalaya Holidays',
				features: ['2 Nights', 'Snow Trekking', 'Campfire Dinner'],
				availableDates: ['2025-06-15', '2025-06-20', '2025-06-30'],
				maxGuests: 5,
				packageType: 'Trekking',
			},
			{
				title: 'Kerala Backwaters',
				from: 'Mumbai',
				location: 'Alleppey',
				rating: 4.8,
				originalPrice: 40000,
				discountedPrice: 32000,
				vendor: 'South India Travels',
				features: ['Houseboat', '2 Nights', 'Traditional Meals'],
				availableDates: ['2025-06-14', '2025-06-22', '2025-06-29'],
				maxGuests: 6,
				packageType: 'Nature',
			},
			{
				title: 'Paris Explorer',
				from: 'Mumbai',
				location: 'Paris',
				rating: 4.9,
				originalPrice: 120000,
				discountedPrice: 95000,
				vendor: 'Global Tours',
				features: ['Eiffel Tower', 'Cruise Dinner', '4 Nights'],
				availableDates: ['2025-06-25', '2025-07-01'],
				maxGuests: 2,
				packageType: 'International',
			},
		];

		setPackages(mockData);
		setFilteredPackages(mockData);
	}, []);

	const handleSearch = ({ from, to, date, guests, packageType }) => {
		const trimPlace = (place = '') => place.split(',')[0].trim().toLowerCase();

		const filtered = packages.filter((pkg) => {
			const matchesFrom = from ? pkg.from?.toLowerCase().includes(trimPlace(from)) : true;
			const matchesTo = to ? pkg.location?.toLowerCase().includes(trimPlace(to)) : true;
			const matchesDate = date ? pkg.availableDates?.includes(date) : true;
			const matchesGuests = guests ? parseInt(guests) <= pkg.maxGuests : true;
			const matchesType = packageType ? pkg.packageType === packageType : true;

			return matchesFrom && matchesTo && matchesDate && matchesGuests && matchesType;
		});

		setFilteredPackages(filtered);

		const summaryText = `Showing results from ${from || 'anywhere'} to ${to || 'anywhere'} on ${
			date || 'any date'
		} for ${guests || 'any'} guests ${packageType ? '(' + packageType + ')' : ''}`;
		setSearchSummary(summaryText);
	};

	const handleClearSearch = () => {
		setFilteredPackages(packages);
		setSearchSummary('');
	};

	return (
		<PageLayout>
			<section className="bg-gray-50">
				<div className="mt-[66px]">
					<SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
					{/* <FilterBar /> */}
					{searchSummary && <p className="text-center my-4 font-bold">{searchSummary}</p>}
					<div className="flex flex-wrap justify-center gap-5 p-5">
						{filteredPackages.length > 0 ? (
							filteredPackages.map((pkg, i) => <PackageCard key={i} {...pkg} />)
						) : (
							<p className="text-center my-8 font-bold">No packages found.</p>
						)}
					</div>
					<Advertisement />
				</div>
			</section>
		</PageLayout>
	);
};

export default International;
