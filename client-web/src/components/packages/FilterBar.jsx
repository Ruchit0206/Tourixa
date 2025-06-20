import React from 'react';

const FilterBar = () => {
	return (
		<div className="flex flex-wrap justify-center gap-4 px-5 py-4 bg-gray-100 max-[600px]:flex-col max-[600px]:items-stretch">
			{['Duration', 'Hotel Rating', 'Transportation', 'Theme', 'Sort by'].map(
				(label, index) => (
					<div
						key={index}
						className="flex items-center gap-2 transition-transform duration-300 hover:scale-105 w-auto max-[600px]:w-full"
					>
						<select className="px-4 py-2 rounded border border-gray-300 min-w-[150px] w-full hover:shadow-[0_0_5px_rgba(0,123,255,0.4)] transition-shadow">
							<option>{label}</option>
						</select>
					</div>
				)
			)}
		</div>
	);
};

export default FilterBar;
