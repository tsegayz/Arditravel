import React, { useEffect, useState } from "react";

function Trips() {
	const [imageUrl, setImageUrl] = useState("");

	useEffect(() => {
		// Fetch the image URL from the backend
		// Replace 'your-backend-endpoint' with the actual endpoint URL
		fetch("your-backend-endpoint")
			.then((response) => response.json())
			.then((data) => {
				setImageUrl(data.imageUrl);
			})
			.catch((error) => {
				console.error("Error fetching image:", error);
			});
	}, []);

	// Your navigation links
	const navLinks = ["Home", "About", "Services", "Contact"];

	return (
		<div>
			<div className='navbar'>
				<div className='logo'>Logo</div>
				<ul className='nav-links'>
					{navLinks.map((link, index) => (
						<li key={index}>{link}</li>
					))}
				</ul>
			</div>
			<div className='image-container'>
				{imageUrl ? (
					<img src={imageUrl} alt='Dynamic Image' className='dynamic-image' />
				) : (
					<p>Loading image...</p>
				)}
			</div>
		</div>
	);
}

export default Trips;
