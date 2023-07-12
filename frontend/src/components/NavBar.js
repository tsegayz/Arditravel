import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

function NavBar({ userName }) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [user, setUser] = useState(null);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			try {
				const parsedUser = JSON.parse(storedUser);
				setUser(parsedUser);
			} catch (error) {
				console.error("Error parsing user data from local storage:", error);
   			}
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("user");
		window.location.href = "/";
	  };
	  

	return (
		<div className='navbar'>
			<div className='logo'>
				<h1>
					A<span>rdi travel</span>
				</h1>
			</div>
			<div>
				<ul className='menu'>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/trips'>Trips</a>
					</li>
					{user ? (
						<li className='dropdown'>
							<button className='dropdown-toggle' onClick={toggleDropdown}>
								{user.name} <FaChevronDown style={{ paddingLeft: "8px" }} />
							</button>
							{isDropdownOpen && (
								<ul className='dropdown-menu'>
									<li>
										<a href='/profile'>Profile</a>
									</li>
									<li>
										<button onClick={handleLogout}>Logout</button>
									</li>
								</ul>
							)}
						</li>
					) : (
						<li>
							<a href='/signin'>
								<span> Signin </span>
							</a>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default NavBar;
