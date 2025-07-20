import React, { useState, useEffect } from 'react';
import AddPackageForm from '../../components/agency/AddPackageForm';
import PackageList from '../../components/agency/PackageList';
import { fetchPost } from '../../utils/fetch.utils';

export default function DashboardPage() {
	const [packages, setPackages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [selectedType, setSelectedType] = useState('All');
	const [searchTerm, setSearchTerm] = useState('');
	const [sortKey, setSortKey] = useState(null);
	const [sortOrder, setSortOrder] = useState('asc');
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	useEffect(() => {
		const fetchPackages = async () => {
			setLoading(true);
			try {
				const response = await fetch(import.meta.env.VITE_URL + 'agency/getAllPackages', {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
				});

				const data = await response.json();
				if (!data.success) throw new Error(data.message || 'Failed to fetch packages');

				setPackages(data.data); // Assuming the array is in data.data
			} catch (error) {
				console.error('Error fetching packages:', error);
				alert('Failed to load packages.');
			} finally {
				setLoading(false);
			}
		};

		fetchPackages();
	}, []);

	const simulateLoading = (callback) => {
		setLoading(true);
		setTimeout(() => {
			callback();
			setLoading(false);
		}, 700);
	};

	const addPackage = async (newPkg) => {
		setLoading(true);
		try {
			console.log('Adding package:', newPkg);

			// Use FormData to send text + file together
			const formData = new FormData();
			formData.append('title', newPkg.title);
			formData.append('price', newPkg.price);
			formData.append('duration', newPkg.duration);
			formData.append('description', newPkg.description);
			formData.append('packageType', newPkg.packageType);
			formData.append('photo', newPkg.photo); // this must be a File object

			const response = await fetch(import.meta.env.VITE_URL + 'agency/addPackage', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`, // 🔐 Token header only
					// DO NOT set Content-Type manually when using FormData
				},
				body: formData,
			});

			const data = await response.json();
			if (!response.ok) throw new Error(data.message || 'Something went wrong');

			setPackages((prev) => [...prev, data.data]);
		} catch (error) {
			console.error('Error adding package:', error);
			alert('Failed to add package.');
		} finally {
			setLoading(false);
		}
	};

	const updatePackage = (index, updatedPkg) => {
		simulateLoading(() => {
			const newList = [...packages];
			newList[index] = updatedPkg;
			setPackages(newList);
		});
	};

	const deletePackage = (index) => {
		simulateLoading(() => {
			const newList = packages.filter((_, i) => i !== index);
			setPackages(newList);
		});
	};

	const filteredPackages = packages.filter((pkg) => {
		if (!pkg || !pkg.title || !pkg.packageType) return false;
		const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesType = selectedType === 'All' || pkg.packageType === selectedType;
		return matchesSearch && matchesType;
	});

	const sortedPackages = [...filteredPackages].sort((a, b) => {
		if (!sortKey) return 0;
		return sortOrder === 'asc'
			? a[sortKey] > b[sortKey]
				? 1
				: -1
			: a[sortKey] < b[sortKey]
			? 1
			: -1;
	});

	const totalPages = Math.ceil(sortedPackages.length / itemsPerPage);
	const paginatedPackages = sortedPackages.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	const handleSort = (key) => {
		if (sortKey === key) {
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
		} else {
			setSortKey(key);
			setSortOrder('asc');
		}
	};

	return (
		<div className="max-w-5xl mx-auto mt-10 bg-white p-8 shadow-md rounded-xl">
			<div className="flex justify-between items-center mb-8 flex-wrap gap-4">
				<h1 className="text-2xl font-bold text-blue-600">🌍 Tourixaa Admin Dashboard</h1>
				<div className="flex items-center gap-3 font-semibold text-gray-700">
					<img
						src="https://i.pravatar.cc/40"
						alt="Admin Avatar"
						className="w-10 h-10 rounded-full border-2 border-blue-600"
					/>
					<span>Welcome, Admin</span>
				</div>
			</div>

			<div className="flex flex-wrap gap-4 items-center justify-between mb-6">
				<input
					type="text"
					placeholder="🔍 Search packages by name..."
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						setCurrentPage(1);
					}}
					className="flex-1 min-w-[180px] px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-600"
				/>
				<select
					className="min-w-[220px] px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-600"
					value={selectedType}
					onChange={(e) => {
						setSelectedType(e.target.value);
						setCurrentPage(1);
					}}
				>
					<option value="All">All Types</option>
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
			</div>

			<AddPackageForm onAdd={addPackage} />

			<PackageList
				packages={paginatedPackages}
				onEdit={updatePackage}
				onDelete={deletePackage}
				loading={loading}
				onSort={handleSort}
				sortKey={sortKey}
				sortOrder={sortOrder}
			/>

			{totalPages > 1 && (
				<div className="flex justify-center items-center gap-4 mt-6">
					<button
						disabled={currentPage === 1}
						onClick={() => setCurrentPage((p) => p - 1)}
						className="px-5 py-2 bg-blue-600 text-white font-semibold rounded disabled:bg-blue-300 hover:bg-blue-700 disabled:cursor-not-allowed"
					>
						◀ Prev
					</button>
					<span className="font-semibold text-gray-700">
						Page {currentPage} of {totalPages}
					</span>
					<button
						disabled={currentPage === totalPages}
						onClick={() => setCurrentPage((p) => p + 1)}
						className="px-5 py-2 bg-blue-600 text-white font-semibold rounded disabled:bg-blue-300 hover:bg-blue-700 disabled:cursor-not-allowed"
					>
						Next ▶
					</button>
				</div>
			)}
		</div>
	);
}
