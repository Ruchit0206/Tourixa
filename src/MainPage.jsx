import React from 'react';
import SearchBar from './components/MainPackage/searchBar';
import FilterBar from './components/MainPackage/FilterBar';
import PackageCard from './components/MainPackage/PackageCard';
import Advertisement from './components/MainPackage/Advertisement';
import './MainPage.css';



const MainPage = () => {
  return (
    <section className="main-container">
<div className='ruchit patel'>
      <SearchBar />
      <FilterBar />
      <div className="packages-list">
        {[...Array(3)].map((_, i) => (
          <PackageCard key={i} />
        ))}
      </div>
      <Advertisement />
      </div>
    </section>
  );
};

export default MainPage;

