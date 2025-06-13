import React, { useState, useEffect } from 'react';
import SearchBar from './components/MainPackage/searchBar';
import FilterBar from './components/MainPackage/FilterBar';
import PackageCard from './components/MainPackage/PackageCard';
import Advertisement from './components/MainPackage/Advertisement';
import './MainPage.css';

const MainPage = () => {
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
        maxGuests: 4
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
        maxGuests: 5
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
        maxGuests: 6
      },
      {
        title: 'Rajasthan Heritage Tour',
        from: 'Ahmedabad',
        location: 'Jaipur',
        rating: 4.3,
        originalPrice: 28000,
        discountedPrice: 21000,
        vendor: 'Royal Rajasthan Rides',
        features: ['City Palace', 'Camel Safari', '2 Nights Stay'],
        availableDates: ['2025-06-17', '2025-06-23', '2025-06-30'],
        maxGuests: 4
      },
      {
        title: 'Sikkim Scenic Views',
        from: 'Kolkata',
        location: 'Gangtok',
        rating: 4.7,
        originalPrice: 35000,
        discountedPrice: 27000,
        vendor: 'Eastern Peaks Tours',
        features: ['3 Nights', 'Monastery Visit', 'Cable Car Ride'],
        availableDates: ['2025-06-20', '2025-06-25', '2025-06-28'],
        maxGuests: 3
      }
    ];

    setPackages(mockData);
    setFilteredPackages(mockData);
  }, []);

  const cleanInput = (text) => {
    return text?.split(',')[0].trim().toLowerCase(); // e.g. 'Delhi, India' -> 'delhi'
  };

  const handleSearch = ({ from, to, date, guests }) => {
    const filtered = packages.filter(pkg => {
      const matchesFrom = from ? cleanInput(pkg.from) === cleanInput(from) : true;
      const matchesTo = to ? cleanInput(pkg.location) === cleanInput(to) : true;
      const matchesDate = date ? pkg.availableDates?.includes(date) : true;
      const matchesGuests = guests && pkg.maxGuests ? parseInt(guests) <= pkg.maxGuests : true;

      return matchesFrom && matchesTo && matchesDate && matchesGuests;
    });

    setFilteredPackages(filtered);

    const summaryText = `Showing results from ${from || 'anywhere'} to ${to || 'anywhere'} on ${date || 'any date'} for ${guests || 'any'} guests`;
    setSearchSummary(summaryText);
  };
  const handleClearSearch = () => {
  setFilteredPackages(packages);
  setSearchSummary('');
};


  return (
    <section className="main-container">
      <div className='ruchitpatel'>
        <SearchBar onSearch={handleSearch} />
        <FilterBar />
        

        {searchSummary && (
          <p className="search-summary" style={{ textAlign: 'center', margin: '1rem', fontWeight: 'bold' }}>
            {searchSummary}
          </p>
        )}

        <div className="packages-list">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg, i) => (
              <PackageCard key={i} {...pkg} />
            ))
          ) : (
            <p style={{ textAlign: 'center', margin: '2rem', fontWeight: 'bold' }}>
              No packages found.
            </p>
          )}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <button
    onClick={handleClearSearch}
    style={{
      backgroundColor: '#f44336',
      color: '#fff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }}
  >
    Clear Search
  </button>
</div>


        <Advertisement />
      </div>
    </section>
  );
};

export default MainPage;
