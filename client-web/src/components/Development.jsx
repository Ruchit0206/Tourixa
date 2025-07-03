import React from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';

export default function UnderDevelopment() {
	const location = useLocation();

	// Get the last segment from the pathname
	const pathSegments = location.pathname.split('/');
	const lastSegment = pathSegments[pathSegments.length - 1];

	// Decode URI and capitalize nicely
	const decoded = decodeURIComponent(lastSegment || 'This');
	const pageName = decoded
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');

	return (
		<PageLayout>
			<div style={{ textAlign: 'center', padding: '5px', marginTop: '66px' , fontSize:" 1.3rem" }}>
				<h2>🚧 {pageName} page is Under Development</h2>
				<p>We're working on this page.</p>
				<p>Come Back Soon</p>
			</div>
		</PageLayout>
	);
}
