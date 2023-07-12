import React, { useEffect, useState } from "react";

function ProfilePage() {
	const handleLogout = () => {
		localStorage.removeItem("user");
		window.location.href = "/";
	  };
	

	const [user, setUser] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	return (
		<div className='profile-page'>
			<div className='profile-card'>
				<div className='profile-image'></div>
				{user ? (
					<div>
						<h1 className='profile-name'> {user.name} </h1>
						<p className='profile-email'> {user.email} </p>
						<button className='logout-button' onClick={handleLogout}>
							Logout
						</button>
					</div>
				) : (
					<h1> please login</h1>
				)}
			</div>
		</div>
	);
}

export default ProfilePage;
