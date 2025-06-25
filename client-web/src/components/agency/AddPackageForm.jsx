import React, { useState } from 'react';

export default function AddPackageForm({ onAdd }) {
	const [title, setTitle] = useState('');
	const [price, setPrice] = useState('');
	const [duration, setDuration] = useState('');
	const [description, setDescription] = useState('');
	const [packageType, setPackageType] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title || !price || !duration || !description || !packageType) {
			alert('Please fill in all fields.');
			return;
		}

		const newPackage = {
			title,
			price: parseFloat(price),
			duration,
			description,
			type: packageType,
		};

		onAdd(newPackage);

		setTitle('');
		setPrice('');
		setDuration('');
		setDescription('');
		setPackageType('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="border border-gray-300 p-6 rounded-lg bg-gray-50 mb-8 shadow-md"
		>
			<div className="flex flex-wrap gap-4 justify-between">
				<select
					name="packageType"
					className="w-full md:w-[48%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
					value={packageType}
					onChange={(e) => setPackageType(e.target.value)}
					required
				>
					<option value="">-- Select Package Type --</option>
					<option value="International">International</option>
					<option value="Domestic">Domestic</option>
					<option value="Group Tour">Group Tour</option>
					<option value="Solo Tour">Solo Tour</option>
					<option value="Nature & Tracking">Nature & Tracking</option>
					<option value="Maharaja Express">Maharaja Express</option>
					<option value="Honeymoon Package">Honeymoon Package</option>
					<option value="Senior Citizen">Senior Citizen</option>
					<option value="Business Packages">Business Packages</option>
					<option value="Children Places">Children Places</option>
				</select>

				<input
					type="text"
					placeholder="Package Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="w-full md:w-[48%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>

				<input
					type="number"
					placeholder="Price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					className="w-full md:w-[48%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>

				<input
					type="text"
					placeholder="Duration (e.g., 5 days)"
					value={duration}
					onChange={(e) => setDuration(e.target.value)}
					className="w-full md:w-[48%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
				/>

				<textarea
					placeholder="Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					rows={4}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y min-h-[90px]"
				/>

				<button
					type="submit"
					className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
				>
					Add Package
				</button>
			</div>
		</form>
	);
}
