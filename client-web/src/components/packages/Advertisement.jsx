import React from 'react';

const Advertisement = () => {
	return (
		<div className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white p-8 my-8 mx-auto rounded-xl text-center shadow-md">
			<div>
				<h2 className="text-3xl font-semibold mb-2">🔥 Limited Time Offer!</h2>
				<p className="text-lg mb-4">
					Book your dream vacation now and get up to{' '}
					<span className="font-bold text-xl">25% OFF</span> on selected packages!
				</p>
				<button className="bg-white text-orange-600 font-bold px-5 py-2 rounded-lg hover:bg-orange-100 transition duration-300">
					Explore Deals
				</button>
			</div>
		</div>
	);
};

export default Advertisement;
