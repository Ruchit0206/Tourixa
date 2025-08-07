import React from 'react';

const PackageList = ({ packages, onEdit, onDelete, loading, onSort, sortKey, sortOrder }) => {
	if (loading) {
		return <div>Loading packages...</div>;
	}

	if (!packages || packages.length === 0) {
		return <div>No packages found.</div>;
	}

	return (
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white border border-gray-300">
				<thead>
					<tr className="bg-gray-100">
						<th
							className="px-4 py-2 border cursor-pointer"
							onClick={() => onSort('title')}
						>
							Title {sortKey === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}
						</th>
						<th
							className="px-4 py-2 border cursor-pointer"
							onClick={() => onSort('price')}
						>
							Price {sortKey === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
						</th>
						<th className="px-4 py-2 border">Duration</th>
						<th className="px-4 py-2 border">Description</th>
						<th className="px-4 py-2 border">Type</th>
						<th className="px-4 py-2 border">From</th> {/* Add this */}
						<th className="px-4 py-2 border">To</th> {/* Add this */}
						<th className="px-4 py-2 border">Photo</th>
						<th className="px-4 py-2 border">Actions</th>
					</tr>
				</thead>
				<tbody>
					{packages.map((pkg, index) => (
						<tr key={index} className="hover:bg-gray-50">
							<td className="px-4 py-2 border">{pkg.title}</td>
							<td className="px-4 py-2 border">{pkg.price}</td>
							<td className="px-4 py-2 border">{pkg.duration}</td>
							<td className="px-4 py-2 border">{pkg.description}</td>
							<td className="px-4 py-2 border">{pkg.packageType}</td>
							<td className="px-4 py-2 border">{pkg.from || 'N/A'}</td>{' '}
							{/* Add this */}
							<td className="px-4 py-2 border">{pkg.to || 'N/A'}</td> {/* Add this */}
							<td className="px-4 py-2 border">
								{pkg.photo ? (
									<img
										src={
											typeof pkg.photo === 'string'
												? pkg.photo
												: URL.createObjectURL(pkg.photo)
										}
										alt={pkg.title}
										className="w-16 h-16 object-cover"
									/>
								) : (
									'No photo'
								)}
							</td>
							<td className="px-4 py-2 border">
								<button
									onClick={() => onEdit(index, pkg)}
									className="text-blue-600 hover:underline mr-2"
								>
									Edit
								</button>
								<button
									onClick={() => onDelete(index)}
									className="text-red-600 hover:underline"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PackageList;
