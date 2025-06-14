import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';

export default function TripPlanner({ onSearch, onClear }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');
  const [packageType, setPackageType] = useState('');
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  const handleAutocomplete = async (query, setSuggestions) => {
    if (query.length < 2) return setSuggestions([]);
    const res = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`);
    const data = await res.json();
    const suggestions = data.features.map(f => `${f.properties.name}${f.properties.country ? ', ' + f.properties.country : ''}`);
    setSuggestions(suggestions);
  };

  const handleClickOutside = (e) => {
    if (!fromRef.current?.contains(e.target)) setFromSuggestions([]);
    if (!toRef.current?.contains(e.target)) setToSuggestions([]);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const searchTrip = () => {
    if (onSearch) {
      onSearch({ from, to, date, guests, packageType });
    }
  };

  const clearTrip = () => {
    setFrom('');
    setTo('');
    setDate(new Date().toISOString().split('T')[0]);
    setGuests('2');
    setPackageType('');
    if (onClear) onClear();
  };

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <main className="trip-form-container">
      
      <form className="trip-form" onSubmit={(e) => e.preventDefault()} autoComplete="off">
        <div className="form-group" ref={fromRef}>
          <label htmlFor="from">From</label>
          <input
            id="from"
            type="text"
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
              handleAutocomplete(e.target.value, setFromSuggestions);
            }}
            placeholder="Starting Location"
          />
          {fromSuggestions.length > 0 && (
            <div className="autocomplete-suggestions">
              {fromSuggestions.map((suggestion, i) => (
                <div key={i} onClick={() => {
                  setFrom(suggestion);
                  setFromSuggestions([]);
                }}>
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="button" className="swap-btn" title="Swap" onClick={swapLocations}>
          &#8646;
        </button>

        <div className="form-group" ref={toRef}>
          <label htmlFor="to">To</label>
          <input
            id="to"
            type="text"
            value={to}
            onChange={(e) => {
              setTo(e.target.value);
              handleAutocomplete(e.target.value, setToSuggestions);
            }}
            placeholder="Destination"
          />
          {toSuggestions.length > 0 && (
            <div className="autocomplete-suggestions">
              {toSuggestions.map((suggestion, i) => (
                <div key={i} onClick={() => {
                  setTo(suggestion);
                  setToSuggestions([]);
                }}>
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="date">Select Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="5">5 Adults</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="packageType">Package Type</label>
          <select id="packageType" value={packageType} onChange={(e) => setPackageType(e.target.value)}>
            <option value="">All</option>
            <option value="Domestic">Domestic</option>
            <option value="International">International</option>
            <option value="Nature">Nature</option>
            <option value="Trekking">Trekking</option>
          </select>
        </div>

        <button type="submit" className="search-btn" onClick={searchTrip}>
          Search
        </button>
        <button type="button" className="clear-btn" onClick={clearTrip} style={{ marginLeft: '10px', backgroundColor: '#ccc' }}>
          Clear
        </button>
      </form>
    </main>
  );
}
