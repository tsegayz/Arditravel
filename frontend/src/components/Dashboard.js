import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { IoIosBook, IoIosSettings, IoIosNotifications } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

function Dashboard({
	locations,
	activities,
	hotels,
	hotelRooms,
	restaurants,
	meals,
	travels,
	guides,
	users,
	roomBookings,
	restBookings,
}) {
	const [user, setUser] = useState(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [activeItem, setActiveItem] = useState("Destinations");
	const [activelink, setActivelink] = useState("Location");

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	// console.log(locations)
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

	const handleSidebarItemClick = (item) => {
		setActiveItem(item);
	};

	const handleItemClick = (item) => {
		setActivelink(item);
	};

	return (
		<div className='dashboard'>
			<nav className='navbar'>
				<div className='search-bar'>
					<input type='text' placeholder='Search...' />
				</div>
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
							<h5> {user.name}</h5>
							<FaChevronDown style={{ marginTop: "8px", fontSize: "20px" }} />
						</button>
						{isDropdownOpen && (
							<ul className='dropdown-menu'>
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
			</nav>
			<div className='sidebar'>
				<div className='logo'> Ardi Travel </div>
				<ul className='sidebar-items'>
					<li
						className={`sidebar-item ${
							activeItem === "Destinations" ? "active" : ""
						}`}
						onClick={() => handleSidebarItemClick("Destinations")}
					>
						<FaMapMarkerAlt style={{ marginRight: "10px", fontSize: "32px" }} />{" "}
						Destinations
						<span className='arrow-icon'></span>
					</li>
					<li
						className={`sidebar-item ${
							activeItem === "Booking" ? "active" : ""
						}`}
						onClick={() => handleSidebarItemClick("Booking")}
					>
						<IoIosBook style={{ marginRight: "10px", fontSize: "32px" }} />{" "}
						Booking
						<span className='arrow-icon'></span>
					</li>
					<li
						className={`sidebar-item ${activeItem === "Users" ? "active" : ""}`}
						onClick={() => handleSidebarItemClick("Users")}
					>
						<BsPersonCircle style={{ marginRight: "10px", fontSize: "32px" }} />{" "}
						Account
						<span className='arrow-icon'></span>
					</li>
					<li
						className={`sidebar-item ${
							activeItem === "Setting" ? "active" : ""
						}`}
						onClick={() => handleSidebarItemClick("Setting")}
					>
						<IoIosSettings style={{ marginRight: "10px", fontSize: "32px" }} />{" "}
						Setting
						<span className='arrow-icon'></span>
					</li>
					<li
						className={`sidebar-item ${
							activeItem === "Notification" ? "active" : ""
						}`}
						onClick={() => handleSidebarItemClick("Notification")}
					>
						<IoIosNotifications
							style={{ marginRight: "10px", fontSize: "32px" }}
						/>{" "}
						Notification
						<span className='arrow-icon'></span>
					</li>
				</ul>
			</div>
			<div className='main-content'>
				<h2>{activeItem}</h2>
				{activeItem === "Destinations" ? (
					<div>
						<ul className='listed-items'>
							<li
								className={`listed-item ${
									activelink === "Location" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Location")}
							>
								Location
							</li>
							<li
								className={`listed-item ${
									activelink === "Activity" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Activity")}
							>
								Activity
							</li>
							<li
								className={`listed-item ${
									activelink === "Hotel" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Hotel")}
							>
								Hotel
							</li>
							<li
								className={`listed-item ${
									activelink === "Hotel room" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Hotel room")}
							>
								Hotel Room
							</li>
							<li
								className={`listed-item ${
									activelink === "Restaurant" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Restaurant")}
							>
								Restaurant
							</li>
							<li
								className={`listed-item ${
									activelink === "Meals" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Meals")}
							>
								Meals
							</li>
							<li
								className={`listed-item ${
									activelink === "Travel" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Travel")}
							>
								Travel Means
							</li>
							<li
								className={`listed-item ${
									activelink === "guide" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Guide")}
							>
								Tour Guide
							</li>
						</ul>
						{activelink === "Location" ? (
							<div>
								<ul className='listed-next location'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> Name </li>
									<li className='listed-item-nexthi'> description </li>
									<li className='listed-item-nextfor'> latitude </li>
									<li className='listed-item-nextfiv'> longtiude </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{locations.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.name} </li>
											<li className='listed-item-nexthi'>
												{" "}
												{item.description}{" "}
											</li>
											<li className='listed-item-nextfor'> {item.latitude} </li>
											<li className='listed-item-nextfiv'>
												{" "}
												{item.longitude}{" "}
											</li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />{" "}
											</li>
										</ul>
									);
								})}
							</div>
						) : activelink === "Activity" ? (
							<div>
								<ul className='listed-next activity'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> Name </li>
									<li className='listed-item-nexthi'> description </li>
									<li className='listed-item-nextfor'> location_id </li>
									<li className='listed-item-nextfiv'> price </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{activities.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.name} </li>
											<li className='listed-item-nexthi'>
												{" "}
												{item.description}{" "}
											</li>
											<li className='listed-item-nextfor'>
												{" "}
												{item.location_id}{" "}
											</li>
											<li className='listed-item-nextfiv'> {item.price} </li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />{" "}
											</li>
										</ul>
									);
								})}
							</div>
						) : activelink === "Hotel" ? (
							<div>
								<ul className='listed-next hotel'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> Name </li>
									<li className='listed-item-nexthi'> description </li>
									<li className='listed-item-nextfor'> location_id </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{hotels.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.name} </li>
											<li className='listed-item-nexthi'>
												{" "}
												{item.description}{" "}
											</li>
											<li className='listed-item-nextfor'>
												{" "}
												{item.location_id}{" "}
											</li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />{" "}
											</li>
										</ul>
									);
								})}
							</div>
						) : activelink === "Hotel room" ? (
							<div>
								<ul className='listed-next hotel'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> type </li>
									<li className='listed-item-nexthi'> price </li>
									<li className='listed-item-nextfor'> hotel_id </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{hotelRooms.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.type} </li>
											<li className='listed-item-nexthi'> {item.price} </li>
											<li className='listed-item-nextfor'> {item.hotel_id} </li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />{" "}
											</li>
										</ul>
									);
								})}
							</div>
						) : activelink === "Restaurant" ? (
							<div>
								<ul className='listed-next restaurant'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> Name </li>
									<li className='listed-item-nexthi'> description </li>
									<li className='listed-item-nextfor'> location_id </li>
									<li className='listed-item-nextfiv'> latitude </li>
									<li className='listed-item-nextfiv'> longtiude </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{restaurants.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.name} </li>
											<li className='listed-item-nexthi'>
												{" "}
												{item.description}{" "}
											</li>
											<li className='listed-item-nextfor'>
												{" "}
												{item.locationtype_id}{" "}
											</li>
											<li className='listed-item-nextfiv'> {item.latitude} </li>
											<li className='listed-item-nextfiv'>
												{" "}
												{item.longitude}{" "}
											</li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />{" "}
											</li>
										</ul>
									);
								})}
							</div>
						) : activelink === "Meals" ? (
							<div>
								<ul className='listed-next meal'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> Name </li>
									<li className='listed-item-nexthi'> description </li>
									<li className='listed-item-nextfor'> restaurant_id </li>
									<li className='listed-item-nextfiv'> price </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{meals.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.name} </li>
											<li className='listed-item-nexthi'>
												{" "}
												{item.description}{" "}
											</li>
											<li className='listed-item-nextfor'>
												{" "}
												{item.restaurant_id}{" "}
											</li>
											<li className='listed-item-nextfiv'> {item.price} </li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />{" "}
											</li>
										</ul>
									);
								})}
							</div>
						) : activelink === "Travel" ? (
							<div>
								<ul className='listed-next guide'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> type </li>
									<li className='listed-item-nexthi'> description </li>
									<li className='listed-item-nextfor'> location_id </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{travels.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.type} </li>
											<li className='listed-item-nexthi'>
												{" "}
												{item.description}{" "}
											</li>
											<li className='listed-item-nextfor'>
												{" "}
												{item.location_id}{" "}
											</li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />{" "}
											</li>
										</ul>
									);
								})}
							</div>
						) : activelink === "Guide" ? (
							<div>
								<ul className='listed-next travel'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> Name </li>
									<li className='listed-item-nexthi'> featuring </li>
									<li className='listed-item-nextfor'> location_id </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{guides.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.name} </li>
											<li className='listed-item-nexthi'> {item.featuring} </li>
											<li className='listed-item-nextfor'>
												{" "}
												{item.location_id}{" "}
											</li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />{" "}
											</li>
										</ul>
									);
								})}
							</div>
						) : (
							<div> </div>
						)}
					</div>
				) : activeItem === "Booking" ? (
					<div>
						<ul className='booking'>
							<li
								className={`listed-item ${
									activelink === "Hotel book" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Hotel book")}
							>
								Hotel Room booking
							</li>
							<li
								className={`listed-item ${
									activelink === "Restaurant book" ? "active-two" : ""
								}`}
								onClick={() => handleItemClick("Restaurant book")}
							>
								Restaurant bookings
							</li>
						</ul>
						{activelink === "Hotel book" ? (
							<div>
								<ul className='listed-next hotel'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> User id </li>
									<li className='listed-item-nextsec'> Hotel id </li>
									<li className='listed-item-nextsec'> Room id </li>
									<li className='listed-item-nextsec'> checkin date </li>
									<li className='listed-item-nextsec'> checkout date </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{roomBookings.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.user_id} </li>
											<li className='listed-item-nextsec'> {item.hotel_id} </li>
											<li className='listed-item-nextsec'> {item.room_id} </li>
											<li className='listed-item-nextsec'>
												{" "}
												{item.checkin_date}{" "}
											</li>
											<li className='listed-item-nextsec'>
												{" "}
												{item.checkout_date}{" "}
											</li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />
											</li>
										</ul>
									);
								})}
							</div>
						) : activelink === "Restaurant book" ? (
							<div>
								<ul className='listed-next restaurant'>
									<li className='listed-item-next'> Id </li>
									<li className='listed-item-nextsec'> User id </li>
									<li className='listed-item-nexthi'> Restaurant id </li>
									<li className='listed-item-nextsec'> checkin date </li>
									<li className='listed-item-nextsec'> checkout date </li>
									<li className='listed-item-nextsix'> actions </li>
								</ul>
								{restBookings.map((item) => {
									return (
										<ul className='listed-next location' key={item._id}>
											<li className='listed-item-next'> {item._id} </li>
											<li className='listed-item-nextsec'> {item.user_id} </li>
											<li className='listed-item-nexthi'>
												{" "}
												{item.restaurant_id}{" "}
											</li>
											<li className='listed-item-nextsec'>
												{" "}
												{item.checkin_date}{" "}
											</li>
											<li className='listed-item-nextsec'>
												{" "}
												{item.checkout_date}{" "}
											</li>
											<li className='listed-item-nextsix'>
												<FaChevronRight />{" "}
											</li>
										</ul>
									);
								})}
							</div>
						) : (
							" "
						)}
					</div>
				) : activeItem === "Users" ? (
					<div>
						<ul className='listed-next hotel'>
							<li className='listed-item-next'> Id </li>
							<li className='listed-item-nextsec'> Name</li>
							<li className='listed-item-nexthi'> Role id </li>
							<li className='listed-item-nextsec'> email </li>
							<li className='listed-item-nextsix'> actions </li>
						</ul>
						{users.map((item) => {
							return (
								<ul className='listed-next location' key={item._id}>
									<li className='listed-item-next'> {item._id} </li>
									<li className='listed-item-nextsec'> {item.name} </li>
									<li className='listed-item-nexthi'> {item.role_id} </li>
									<li className='listed-item-nextsec'> {item.email} </li>
									<li className='listed-item-nextsix'>
										<FaChevronRight />
									</li>
								</ul>
							);
						})}
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Dashboard;

// <div className='main-content'>
// 				<h2>{activeItem}</h2>
// 				<div className='listed-destination'>
// 					<ul>
// 						<li> Location </li>
// 						<li> Activity </li>
// 						<li> Hotel </li>
// 						<li> Restaurant </li>
// 						<li> Meals </li>
// 						<li> Travel Means </li>
// 						<li> Tour Guide </li>
// 					</ul>
// 				</div>
// 			</div>

// all the above contents are visible when the acitive item is destination only and when the acitive item is booking then only hotel and restaurant is visible but for the rest of the acitive item s nothing is shouwn from the list
