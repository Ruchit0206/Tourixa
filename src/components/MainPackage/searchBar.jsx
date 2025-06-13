import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.css';

export default function TripPlanner() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('₹10000 - ₹200000');
  const [customBudget, setCustomBudget] = useState('');
  const [guests, setGuests] = useState('2');
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

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const searchTrip = () => {
    const finalBudget = budget === 'Other' ? customBudget : budget;
    alert(`From: ${from}\nTo: ${to}\nDate: ${date}\nBudget: ${finalBudget}\nGuests: ${guests}`);
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
            required
          />
          {fromSuggestions.length > 0 && (
  <div className="autocomplete-suggestions">
    {fromSuggestions.map((suggestion, i) => (
      <div
        key={i}
        onClick={() => {
          setFrom(suggestion);
          setFromSuggestions([]); // Hide suggestions
        }}
      >
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
            required
          />
         {toSuggestions.length > 0 && (
  <div className="autocomplete-suggestions">
    {toSuggestions.map((suggestion, i) => (
      <div
        key={i}
        onClick={() => {
          setTo(suggestion);
          setToSuggestions([]); // Hide suggestions
        }}
      >
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
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget Per Person</label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="₹5000 - ₹10000">₹5,000 - ₹10,000</option>
            <option value="₹10000 - ₹20000">₹10,000 - ₹20,000</option>
            <option value="₹20000 - ₹50000">₹20,000 - ₹50,000</option>
            <option value="₹50000 - ₹100000">₹50,000 - ₹1,00,000</option>
            <option value="₹100000 - ₹200000">₹1,00,000 - ₹2,00,000</option>
            <option value="Other">Other</option>
          </select>

          {budget === 'Other' && (
            <input
              type="text"
              placeholder="Enter custom budget (e.g. ₹15000 - ₹25000)"
              value={customBudget}
              onChange={(e) => setCustomBudget(e.target.value)}
              style={{ marginTop: '10px', padding: '8px', borderRadius: '8px' }}
            />
          )}
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

        <button type="submit" className="search-btn" onClick={searchTrip}>
          Search
        </button>
      </form>
    </main>
  );
}
