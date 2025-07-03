import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SearchBar from './components/MainPackage/searchBar';
import PackageCard from './components/MainPackage/PackageCard';
import Advertisement from './components/MainPackage/Advertisement';
import './MainPage.css';
import './ChildrenPage.css';

const ChildrenPage = () => {
	const [packages, setPackages] = useState([]);
	const [filteredPackages, setFilteredPackages] = useState([]);
	const [searchSummary, setSearchSummary] = useState('');

	useEffect(() => {
		const childrenData = [
			// International Packages
			{
				title: 'Disneyland Paris Adventure',
				from: 'Delhi',
				location: 'Paris',
				rating: 4.9,
				originalPrice: 85000,
				discountedPrice: 69000,
				vendor: 'Kids World Tours',
				features: [
					'4 Nights',
					'Theme Park Tickets',
					'Child-friendly Meals',
					'Meet Disney Characters',
					'Parade Show',
				],
				availableDates: ['2025-07-10', '2025-07-20'],
				maxGuests: 4,
				packageType: 'International',
				tags: ['Best Seller', 'Family', 'Kids'],
				image: 'https://www.bing.com/images/search?view=detailV2&ccid=LwD91BXh&id=1A7A3BAA181A642F0501FC8B480365BE313FC8C1&thid=OIP.LwD91BXhIB4EVYACiyrK2QHaE7&mediaurl=https%3a%2f%2fcdn.sortiraparis.com%2fimages%2f1001%2f87950%2f484856-visuels-disneyland-paris.jpg&exph=549&expw=824&q=disneyland+paris+images+open+souce&simid=607987282285504769&FORM=IRPRST&ck=6F133CDA84A4CDBC7D2B397B77071F73&selectedIndex=81&itb=0',
			},
			{
				title: 'Singapore Universal Studios',
				from: 'Mumbai',
				location: 'Singapore',
				rating: 4.8,
				originalPrice: 78000,
				discountedPrice: 62000,
				vendor: 'FunTime Holidays',
				features: [
					'3 Nights',
					'Universal Studios',
					'Sentosa Island',
					'SEA Aquarium',
					'KidZania',
				],
				availableDates: ['2025-08-05', '2025-08-15'],
				maxGuests: 5,
				packageType: 'International',
				tags: ['Theme Park', 'Adventure', 'Kids'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Universal_Studios_Singapore_globe.jpg',
			},
			{
				title: 'Legoland Malaysia',
				from: 'Bangalore',
				location: 'Johor Bahru',
				rating: 4.7,
				originalPrice: 72000,
				discountedPrice: 58000,
				vendor: 'Happy Trails',
				features: [
					'3 Nights',
					'Legoland Tickets',
					'Water Park',
					'LEGO Workshop',
					'Mini Land',
				],
				availableDates: ['2025-09-01', '2025-09-10'],
				maxGuests: 4,
				packageType: 'International',
				tags: ['Water Park', 'Family', 'Kids'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Legoland_Malaysia_entrance.jpg',
			},
			{
				title: "Dubai Kid's Dream",
				from: 'Chennai',
				location: 'Dubai',
				rating: 4.6,
				originalPrice: 90000,
				discountedPrice: 75000,
				vendor: 'Desert Kids Tours',
				features: [
					'4 Nights',
					'Aquarium',
					'Desert Safari',
					'KidZania',
					'IMG Worlds of Adventure',
				],
				availableDates: ['2025-10-01', '2025-10-15'],
				maxGuests: 6,
				packageType: 'International',
				tags: ['Adventure', 'Family', 'Kids'],
				image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
			},
			// Indian Historic & Museum Packages
			{
				title: 'Indian Museum Discovery',
				from: 'Kolkata',
				location: 'Kolkata',
				rating: 4.8,
				originalPrice: 16000,
				discountedPrice: 12999,
				vendor: 'Heritage Tours',
				features: [
					'2 Nights',
					'Indian Museum Entry',
					'Dinosaur Gallery',
					'Ancient Artefacts',
					'Guided History Walk',
					'Free Entry for Teachers',
				],
				availableDates: ['2025-09-10', '2025-09-20'],
				maxGuests: 40,
				packageType: 'Historic',
				tags: ['Museum', 'History', 'School Group'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Indian_Museum_Kolkata.jpg',
			},
			{
				title: 'National Rail Museum & Nehru Planetarium',
				from: 'Delhi',
				location: 'Delhi',
				rating: 4.7,
				originalPrice: 15000,
				discountedPrice: 11999,
				vendor: 'EduRail India',
				features: [
					'Day Trip',
					'Rail Museum Visit',
					'Toy Train Ride',
					'Nehru Planetarium Show',
					'Space Quiz',
					'Photo Memory Book',
				],
				availableDates: ['2025-08-15', '2025-08-30'],
				maxGuests: 50,
				packageType: 'Museum',
				tags: ['Museum', 'Science', 'Fun'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/National_Rail_Museum_Delhi.jpg',
			},
			{
				title: 'Chhatrapati Shivaji Maharaj Vastu Sangrahalaya',
				from: 'Mumbai',
				location: 'Mumbai',
				rating: 4.8,
				originalPrice: 17000,
				discountedPrice: 13999,
				vendor: 'Mumbai Heritage',
				features: [
					'2 Nights',
					'Museum Entry',
					'Art & History Tour',
					'Interactive Workshop',
					'Student Art Competition',
					'Participation Certificate',
				],
				availableDates: ['2025-10-05', '2025-10-15'],
				maxGuests: 35,
				packageType: 'Historic',
				tags: ['Museum', 'Art', 'History'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Chhatrapati_Shivaji_Maharaj_Vastu_Sangrahalaya.jpg',
			},
			// Indian Packages (existing)
			{
				title: 'Science City School Tour',
				from: 'Ahmedabad',
				location: 'Kolkata',
				rating: 4.8,
				originalPrice: 18000,
				discountedPrice: 14500,
				vendor: 'EduTours India',
				features: [
					'2 Nights',
					'Science City Entry',
					'Interactive Science Shows',
					'Robotics Workshop',
					'Special Student Discount',
					'Certified Guide',
				],
				availableDates: ['2025-08-10', '2025-08-20'],
				maxGuests: 40,
				packageType: 'Educational',
				tags: ['School Group', 'STEM', 'Student Discount'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Science_City_Kolkata_Main_Building.jpg',
			},
			{
				title: 'Ranthambore Wildlife Camp',
				from: 'Jaipur',
				location: 'Ranthambore',
				rating: 4.7,
				originalPrice: 22000,
				discountedPrice: 17500,
				vendor: 'Wildlife India',
				features: [
					'3 Nights',
					'Jungle Safari',
					'Nature Walks',
					'Campfire & Storytelling',
					'Bird Watching',
					'Free Learning Kit',
				],
				availableDates: ['2025-11-05', '2025-11-15'],
				maxGuests: 30,
				packageType: 'Adventure',
				tags: ['Nature', 'Wildlife', 'School Camp'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Tiger_Ranthambhore.jpg',
			},
			{
				title: 'ISRO Space Center Visit',
				from: 'Bangalore',
				location: 'Sriharikota',
				rating: 4.9,
				originalPrice: 25000,
				discountedPrice: 19999,
				vendor: 'Space Explorers',
				features: [
					'2 Nights',
					'ISRO Center Tour',
					'Rocket Launch Demo',
					'Space Science Workshop',
					'STEM Certificate',
					'Teacher Travels Free',
				],
				availableDates: ['2025-09-10', '2025-09-20'],
				maxGuests: 35,
				packageType: 'Educational',
				tags: ['Space', 'STEM', 'School Group'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/PSLV-C37_Launch_-_Satish_Dhawan_Space_Centre_-_Sriharikota_%282%29.jpg',
			},
			{
				title: 'KidZania Mumbai Experience',
				from: 'Pune',
				location: 'Mumbai',
				rating: 4.6,
				originalPrice: 16000,
				discountedPrice: 12999,
				vendor: 'FunTime India',
				features: [
					'Day Trip',
					'KidZania Entry',
					'Role Play Activities',
					'Healthy Meals',
					'Photo Memories',
					'Special Group Offer',
				],
				availableDates: ['2025-07-15', '2025-07-30'],
				maxGuests: 50,
				packageType: 'Theme Park',
				tags: ['Kids', 'Role Play', 'School Group'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/KidZania_Mumbai_Entrance.jpg',
			},
			{
				title: 'Manali Adventure Camp',
				from: 'Delhi',
				location: 'Manali',
				rating: 4.7,
				originalPrice: 20000,
				discountedPrice: 15500,
				vendor: 'Himalaya Camps',
				features: [
					'4 Nights',
					'Trekking',
					'Rope Activities',
					'Bonfire & Music',
					'Certified Instructors',
					'Student Safety Insurance',
				],
				availableDates: ['2025-06-10', '2025-06-20'],
				maxGuests: 40,
				packageType: 'Adventure',
				tags: ['Adventure', 'School Camp', 'Safety'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Manali_Camp.jpg',
			},
			// New Indian Packages (different categories)
			{
				title: 'Kaziranga Eco Camp',
				from: 'Guwahati',
				location: 'Kaziranga',
				rating: 4.9,
				originalPrice: 21000,
				discountedPrice: 16999,
				vendor: 'Eco India',
				features: [
					'3 Nights',
					'Jeep Safari',
					'Eco Warrior Badge',
					'Nature Conservation Workshop',
					'Bird Watching',
					'Plant a Tree Activity',
				],
				availableDates: ['2025-12-01', '2025-12-10'],
				maxGuests: 30,
				packageType: 'Eco Camp',
				tags: ['Eco', 'Wildlife', 'School Group'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Kaziranga_National_Park_Jeep_Safari.jpg',
			},
			{
				title: 'Goa Beach Language Camp',
				from: 'Mumbai',
				location: 'Goa',
				rating: 4.8,
				originalPrice: 23000,
				discountedPrice: 18500,
				vendor: 'LangCamp India',
				features: [
					'5 Nights',
					'English & French Lessons',
					'Beach Sports',
					'Cultural Exchange',
					'Language Certificate',
					'Evening Bonfire',
				],
				availableDates: ['2025-05-15', '2025-05-25'],
				maxGuests: 25,
				packageType: 'Language Camp',
				tags: ['Language', 'Beach', 'Student Exchange'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Baga_Beach_Goa.jpg',
			},
			{
				title: 'Jim Corbett Nature Explorers',
				from: 'Lucknow',
				location: 'Jim Corbett',
				rating: 4.7,
				originalPrice: 19500,
				discountedPrice: 15999,
				vendor: 'Nature India',
				features: [
					'3 Nights',
					'Jungle Safari',
					'River Crossing',
					'Wildlife Documentary',
					'Campfire Stories',
					'Photo Memory Book',
				],
				availableDates: ['2025-09-15', '2025-09-25'],
				maxGuests: 35,
				packageType: 'Nature',
				tags: ['Nature', 'Wildlife', 'Adventure'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Jim_Corbett_National_Park.jpg',
			},
			{
				title: 'Pune Robotics & Coding Bootcamp',
				from: 'Nagpur',
				location: 'Pune',
				rating: 4.9,
				originalPrice: 24000,
				discountedPrice: 19999,
				vendor: 'STEM India',
				features: [
					'4 Nights',
					'Robotics Workshop',
					'Coding Classes',
					'Project Competition',
					'STEM Certificate',
					'Free Arduino Kit',
				],
				availableDates: ['2025-06-20', '2025-06-30'],
				maxGuests: 40,
				packageType: 'STEM',
				tags: ['STEM', 'Robotics', 'Coding'],
				image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Robotics_Workshop.jpg',
			},
		];
		setPackages(childrenData);
		setFilteredPackages(childrenData);
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

		const summaryText = `🎈 Showing children packages from ${from || 'anywhere'} to ${
			to || 'anywhere'
		} on ${date || 'any date'} for ${guests || 'any'} guests ${
			packageType ? '(' + packageType + ')' : ''
		}`;
		setSearchSummary(summaryText);
	};

	const handleClearSearch = () => {
		setFilteredPackages(packages);
		setSearchSummary('');
	};

	return (
		<div>
			<Navbar />
			<div className="children-searchbar-wrapper">
				<SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
			</div>
			{searchSummary && (
				<p
					className="search-summary animated-summary"
					style={{
						textAlign: 'center',
						margin: '1rem',
						fontWeight: 'bold',
						color: '#ff7e5f',
					}}
				>
					{searchSummary}
				</p>
			)}
			<div className="children-grid-bg">
				<div className="children-grid-container children-grid-container--small">
					{filteredPackages.length > 0 ? (
						filteredPackages.map((pkg, idx) => (
							<div
								className="children-grid-item children-grid-item--small animated-card"
								key={idx}
								style={{
									animationDelay: `${idx * 0.08}s`,
									animationName: 'fadeInUp',
									animationDuration: '0.7s',
									animationFillMode: 'both',
								}}
							>
								<PackageCard {...pkg} />
							</div>
						))
					) : (
						<div className="empty-state">
							<img
								src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
								alt="No Results"
								style={{
									width: 120,
									margin: '2rem auto',
									display: 'block',
									opacity: 0.7,
								}}
							/>
							<p style={{ textAlign: 'center', fontWeight: 'bold', color: '#888' }}>
								No children packages found. Try changing your search!
							</p>
						</div>
					)}
				</div>
			</div>
			<Advertisement />
			{/* <Footer /> */}
		</div>
	);
};

export default ChildrenPage;
