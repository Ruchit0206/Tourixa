import React from 'react';
import { useParams } from 'react-router-dom';

export default function UnderDevelopment() {
  const { page } = useParams(); // get the page param from URL

  // Capitalize the first letter of page name for better display
  const pageName = page ? page.charAt(0).toUpperCase() + page.slice(1) : 'This';

  return (
    <div style={{ textAlign: "center", padding: "60px", marginTop: "50px"}}>
      <h2>🚧 {pageName} page is Under Development</h2>
      <p>We're working on this page. Please check back later.</p>
      <p>Come Back Soon</p>
    </div>
  );
}
