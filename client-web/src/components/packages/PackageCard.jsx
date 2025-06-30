import React, { useState } from 'react';
import sampleImage from '/logo.jpeg';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const PackageCard = ({
	title,
	location,
	rating,
	originalPrice,
	discountedPrice,
	vendor,
	features = [],
	isBestSeller = false,
	hashtags = [],
	imageUrl, // 👈 add this
}) => {
	const [liked, setLiked] = useState(false);
	const discountAmount = originalPrice - discountedPrice;

	return (
		<div className="w-full max-w-xs mx-auto my-4 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
			<div className="relative w-full h-52 overflow-hidden">
				<img
					src={imageUrl || sampleImage} // 👈 use imageUrl if available
					alt={title}
					className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
				/>
				<div
					title={liked ? 'Remove from Wishlist' : 'Add to Wishlist'}
					onClick={() => setLiked(!liked)}
					className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5 cursor-pointer transition-transform duration-200 hover:scale-110 z-10"
				>
					{liked ? (
						<FaHeart className="text-red-500 text-lg" />
					) : (
						<FaRegHeart className="text-black text-lg" />
					)}
				</div>
				{discountAmount > 10000 && (
					<div className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded z-10">
						Best Deal
					</div>
				)}
			</div>

			<div className="p-4">
				<h3 className="text-base font-semibold mb-2">{title}</h3>
				<div className="text-yellow-600 text-sm mb-1">
					{'⭐'.repeat(Math.floor(rating)) + '☆'} ({rating})
				</div>
				<p className="text-gray-600 text-sm mb-3">📍 {location}</p>

				<ul className="text-sm mb-3 list-none p-0">
					{features.map((item, index) => (
						<li key={index} className="mb-1">
							{item}
						</li>
					))}
				</ul>

				{isBestSeller && (
					<div className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full inline-block mb-2 font-semibold">
						🔥 Best Seller
					</div>
				)}

				<div className="flex flex-wrap gap-2 mb-3">
					{hashtags.map((tag, i) => (
						<span
							key={i}
							className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
						>
							{tag}
						</span>
					))}
				</div>

				<div className="text-sm font-medium mb-3">
					<span className="line-through text-red-500 mr-2">
						₹{originalPrice.toLocaleString('en-IN')}
					</span>
					<span className="text-green-600 font-bold">
						₹{discountedPrice.toLocaleString('en-IN')}
					</span>
				</div>
			</div>
		</div>
	);
};

export default PackageCard;
