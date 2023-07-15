import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

import { RiFacebookFill, RiLinkedinFill, RiWifiFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
function Destination({ data }) {
	const location = useLocation();
	const { itemData } = location.state;

	const locationData = data.find((location) => location._id === itemData._id);
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
		<div className='destionation'>
			<nav className='hotels-nav'>
				<h1> Ardi Travel </h1>
				<ul className='menu'>
					<li>
						<a href='/'>Home</a>
					</li>
					<li>
						<a href='/trips'>Trips</a>
					</li>
					{user ? (
						<div className='dropdown'>
							<button
								className='dropdown-toggle'
								onClick={toggleDropdown}
								style={{ display: "flex", alignItems: "center" }}
							>
								<div
									style={{
										width: "50px",
										height: "50px",
										borderRadius: "50%",
										background: "#1e3942",
										marginRight: "8px",
										marginLeft: "10px",
										marginTop: "10px",
										padding: "20px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<span
										style={{
											fontWeight: "bold",
											fontSize: "30px",
											color: "white",
										}}
									>
										{user.name.charAt(0)}
									</span>
								</div>
								<FaChevronDown
									style={{ marginTop: "15px", fontSize: "20px" }}
								/>
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
						</div>
					) : (
						<li>
							<a href='/signin'>
								<span> Signin </span>
							</a>
						</li>
					)}
				</ul>
			</nav>

			<div class='main-content'>
				<p class='title'>A Beautiful Destination</p>
				<h2 class='subtitle'>Discover a Beautiful place with us</h2>
				<div class='content-container'>
					<div class='item-info'>
						<h2>{itemData.name}</h2>
						<p>
							{itemData.description} "Lorem dolor sit amet, consectetur
							adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget
							eget enim. Proin cursus eleifend pretium. Aliquam cursus "
						</p>
					</div>
					<div class='image-container'>
						<img
							src={locationData.image}
							alt='Location'
							class='location-image'
						/>
						<img src={itemData.image} alt='Location' class='item-image' />
					</div>
				</div>
			</div>

			<footer>
				<div class='line'></div>
				<div class='socials'>
					<ul>
						<li class='social-items'>
							<a href='#in'>
								{" "}
								<RiFacebookFill />
							</a>
						</li>
						<li class='social-items'>
							<a href='#in'>
								<SiTwitter />
							</a>
						</li>
						<li class='social-items'>
							<a href='#in'>
								<RiLinkedinFill />
							</a>
						</li>
						<li class='social-items'>
							<a href='#in'>
								<RiWifiFill />
							</a>
						</li>
						<li class='social-items'>
							<a href='#in'>
								<IoShieldCheckmarkSharp />
							</a>
						</li>
					</ul>
				</div>
				<div class='center-text'>
					Copyright &copy; Web Coding Pro. All Rights Reserved
				</div>
			</footer>
		</div>
	);
}

export default Destination;
