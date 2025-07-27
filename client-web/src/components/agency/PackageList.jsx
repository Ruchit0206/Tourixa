import React, { useState } from 'react';

export default function PackageList({
	packages,
	onEdit,
	onDelete,
	loading,
	onSort,
	sortKey,
	sortOrder,
}) {
	const [editingIndex, setEditingIndex] = useState(null);
	const [editFormData, setEditFormData] = useState({
		title: '',
		price: 0,
		duration: '',
		description: '',
		type: '',
		from: '',
		to: '',
	});

	const getSortClass = (key) => {
		if (sortKey !== key) return '';
		return sortOrder === 'asc' ? "after:content-['▲']" : "after:content-['▼']";
	};

	const startEdit = (index) => {
		setEditingIndex(index);
		setEditFormData({ ...packages[index] });
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditFormData((prev) => ({
			...prev,
			[name]: name === 'price' ? parseFloat(value) || 0 : value,
		}));
	};

	const handleSave = (e) => {
		e.preventDefault();
		onEdit(editingIndex, editFormData);
		setEditingIndex(null);
	};

	const handleCancel = () => {
		setEditingIndex(null);
	};

	if (loading) return <p className="text-center">Loading...</p>;
	if (packages.length === 0) return <p className="text-center">No packages found.</p>;

	return (
		<div className="overflow-x-auto mt-6">
			<table className="w-full text-sm border border-gray-200 shadow-md rounded-md bg-white">
				<thead>
					<tr className="bg-gray-100 text-left text-gray-700 font-semibold">
						<th onClick={() => onSort('title')} className={`p-3 cursor-pointer ${getSortClass('title')}`}>Title</th>
						<th onClick={() => onSort('price')} className={`p-3 cursor-pointer ${getSortClass('price')}`}>Price (₹)</th>
						<th onClick={() => onSort('duration')} className={`p-3 cursor-pointer ${getSortClass('duration')}`}>Duration</th>
						<th className="p-3">Description</th>
						<th onClick={() => onSort('type')} className={`p-3 cursor-pointer ${getSortClass('type')}`}>Type</th>
						<th className="p-3">From</th>
						<th className="p-3">To</th>
						<th className="p-3">Actions</th>
					</tr>
				</thead>
				<tbody>
					{packages.map((pkg, index) =>
						editingIndex === index ? (
							<tr key={index} className="border-t">
								<td className="p-2">
									<input type="text" name="title" value={editFormData.title} onChange={handleChange} required className="w-full p-2 border rounded" />
								</td>
								<td className="p-2">
									<input type="number" name="price" value={editFormData.price} onChange={handleChange} required className="w-full p-2 border rounded" />
								</td>
								<td className="p-2">
									<input type="text" name="duration" value={editFormData.duration} onChange={handleChange} required className="w-full p-2 border rounded" />
								</td>
								<td className="p-2">
									<textarea name="description" value={editFormData.description} onChange={handleChange} rows={2} className="w-full p-2 border rounded resize-y min-h-[80px]" />
								</td>
								<td className="p-2">
									<select name="type" value={editFormData.type} onChange={handleChange} required className="w-full p-2 border rounded">
										<option value="">Select Type</option>
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
								</td>
								<td className="p-2">
									<input type="text" name="from" value={editFormData.from} onChange={handleChange} required className="w-full p-2 border rounded" />
								</td>
								<td className="p-2">
									<input type="text" name="to" value={editFormData.to} onChange={handleChange} required className="w-full p-2 border rounded" />
								</td>
								<td className="p-2 flex gap-2 flex-wrap">
									<button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm" onClick={handleSave}>Save</button>
									<button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm" onClick={handleCancel}>Cancel</button>
								</td>
							</tr>
						) : (
							<tr key={index} className="border-t">
								<td className="p-3">{pkg.title}</td>
								<td className="p-3">₹{pkg.price.toFixed(2)}</td>
								<td className="p-3">{pkg.duration}</td>
								<td className="p-3">{pkg.description}</td>
								<td className="p-3">{pkg.type}</td>
								<td className="p-3">{pkg.from}</td>
								<td className="p-3">{pkg.to}</td>
								<td className="p-3 flex gap-2 flex-wrap">
									<button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm" onClick={() => startEdit(index)}>Edit</button>
									<button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm" onClick={() => { if (window.confirm(`Delete "${pkg.title}"?`)) onDelete(index); }}>Delete</button>
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	);
}
