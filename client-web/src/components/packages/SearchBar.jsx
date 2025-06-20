import React, { useState, useEffect, useRef } from 'react';

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
		const res = await fetch(
			`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`
		);
		const data = await res.json();
		const suggestions = data.features.map(
			(f) => `${f.properties.name}${f.properties.country ? ', ' + f.properties.country : ''}`
		);
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
		<main className="bg-[linear-gradient(120deg,_rgba(34,34,34,0.95)_60%,_rgba(211,47,47,0.15))] bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-center bg-cover py-8 flex justify-center items-center min-h-[180px] w-full">
			<form
				className="bg-black/90 rounded-[18px] p-4 flex flex-wrap gap-3 items-center max-w-[1100px] w-[98vw] shadow-xl mx-auto"
				onSubmit={(e) => e.preventDefault()}
				autoComplete="off"
			>
				<div className="flex flex-col min-w-[120px] flex-1 relative" ref={fromRef}>
					<label className="text-white font-medium text-sm mb-1">From</label>
					<input
						type="text"
						value={from}
						onChange={(e) => {
							setFrom(e.target.value);
							handleAutocomplete(e.target.value, setFromSuggestions);
						}}
						placeholder="Starting Location"
						className="p-2 rounded bg-zinc-800 text-white shadow-sm text-sm focus:bg-zinc-900 focus:shadow-md outline-none"
					/>
					{fromSuggestions.length > 0 && (
						<div className="absolute top-full left-0 right-0 bg-white z-50 max-h-40 overflow-y-auto rounded shadow-md text-black text-sm">
							{fromSuggestions.map((suggestion, i) => (
								<div
									key={i}
									className="px-3 py-2 cursor-pointer hover:bg-gray-200"
									onClick={() => {
										setFrom(suggestion);
										setFromSuggestions([]);
									}}
								>
									{suggestion}
								</div>
							))}
						</div>
					)}
				</div>

				<button
					type="button"
					title="Swap"
					onClick={swapLocations}
					className="bg-gray-700 text-white w-9 h-9 rounded-full text-lg flex items-center justify-center transition-transform hover:bg-red-700 hover:rotate-180"
				>
					&#8646;
				</button>

				<div className="flex flex-col min-w-[120px] flex-1 relative" ref={toRef}>
					<label className="text-white font-medium text-sm mb-1">To</label>
					<input
						type="text"
						value={to}
						onChange={(e) => {
							setTo(e.target.value);
							handleAutocomplete(e.target.value, setToSuggestions);
						}}
						placeholder="Destination"
						className="p-2 rounded bg-zinc-800 text-white shadow-sm text-sm focus:bg-zinc-900 focus:shadow-md outline-none"
					/>
					{toSuggestions.length > 0 && (
						<div className="absolute top-full left-0 right-0 bg-white z-50 max-h-40 overflow-y-auto rounded shadow-md text-black text-sm">
							{toSuggestions.map((suggestion, i) => (
								<div
									key={i}
									className="px-3 py-2 cursor-pointer hover:bg-gray-200"
									onClick={() => {
										setTo(suggestion);
										setToSuggestions([]);
									}}
								>
									{suggestion}
								</div>
							))}
						</div>
					)}
				</div>

				<div className="flex flex-col min-w-[120px] flex-1">
					<label className="text-white font-medium text-sm mb-1">Select Date</label>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						min={new Date().toISOString().split('T')[0]}
						className="p-2 rounded bg-zinc-800 text-white shadow-sm text-sm focus:bg-zinc-900 focus:shadow-md outline-none"
					/>
				</div>

				<div className="flex flex-col min-w-[120px] flex-1">
					<label className="text-white font-medium text-sm mb-1">Guests</label>
					<select
						value={guests}
						onChange={(e) => setGuests(e.target.value)}
						className="p-2 rounded bg-zinc-800 text-white shadow-sm text-sm focus:bg-zinc-900 focus:shadow-md outline-none"
					>
						{[1, 2, 3, 4, 5].map((n) => (
							<option key={n} value={n}>
								{n} Adult{n > 1 ? 's' : ''}
							</option>
						))}
					</select>
				</div>

				<div className="flex flex-col min-w-[120px] flex-1">
					<label className="text-white font-medium text-sm mb-1">Package Type</label>
					<select
						value={packageType}
						onChange={(e) => setPackageType(e.target.value)}
						className="p-2 rounded bg-zinc-800 text-white shadow-sm text-sm focus:bg-zinc-900 focus:shadow-md outline-none"
					>
						{['All', 'Domestic', 'International', 'Nature', 'Trekking'].map(
							(type, i) => (
								<option key={i} value={type === 'All' ? '' : type}>
									{type}
								</option>
							)
						)}
					</select>
				</div>

				<button
					type="submit"
					onClick={searchTrip}
					className="bg-red-600 text-white px-4 py-2 rounded font-medium hover:bg-red-800 transition w-full sm:w-auto"
				>
					Search
				</button>

				<button
					type="button"
					onClick={clearTrip}
					className="bg-gray-400 text-white px-4 py-2 rounded font-medium hover:bg-gray-600 transition w-full sm:w-auto"
				>
					Clear
				</button>
			</form>
		</main>
	);
}
