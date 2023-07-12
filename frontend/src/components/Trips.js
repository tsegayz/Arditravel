import { FaChevronLeft, FaChevronRight, FaBed, FaHotel, FaChevronDown } from "react-icons/fa";
import {
	GiBinoculars,
	GiCampCookingPot,
	GiAirplaneDeparture,
	GiSupersonicBullet,
} from "react-icons/gi";
import { SiHotelsdotcom } from "react-icons/si";
import { GrFavorite, GrLike } from "react-icons/gr";
import { IoRestaurantOutline } from "react-icons/io5";
import {
	BsArrowRightCircle,
	BsArrowLeftCircle,
	BsInfoCircleFill,
} from "react-icons/bs";

import { RiSearch2Line } from "react-icons/ri";
import { useRef } from "react";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Trips({ data, hotels, hotelRooms, restaurants, travels, tourGuides }) {
	const dataSlice = data.slice(3, 11);
	const topHotel = hotels.filter((item) => item.rating > 4.6);
	const [filteredRestaurants, setfilteredRestaurants] = useState([]);

	const filterHandler = (e) => {
		const searchWord = e.target.value;
		const newFilter = restaurants.filter((value) => {
			return value.name.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setfilteredRestaurants([]);
		} else {
			setfilteredRestaurants(newFilter);
		}
	};

	const history = useHistory();

	const handleLocationClick = (item) => {
		// Navigate to the location page and pass the selected item's data
		history.push(`/location/${item._id}`, { itemData: item });
	};
	const handleRestaurantClick = (item) => {
		// Navigate to the restaurant page and pass the selected item's data
		history.push(`/restaurant/${item._id}`, { itemData: item });
	};

	const handleHotelClick = (item) => {
		// Navigate to the hotel page and pass the selected item's data
		history.push(`/eachhotel/${item._id}`, { itemData: item });
	};
	const hotelsSectionRef = useRef(null);
	const activitiesSectionRef = useRef(null);
	const restaurantsSectionRef = useRef(null);
	const tourGuidesSectionRef = useRef(null);
	const travelMeansSectionRef = useRef(null);

	const handleHotelsClick = () => {
		hotelsSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleActivitiesClick = () => {
		activitiesSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleTourGuidesClick = () => {
		tourGuidesSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleRestaurantsClick = () => {
		restaurantsSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleTravelMeansClick = () => {
		travelMeansSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const columnsData = [
		{
			title: "Things to Do",
			rows: [
				"Explore Local Attractions",
				"Discover Hidden Gems",
				"Experience Adventure Sports",
				"Indulge in Local Cuisine",
				"Relax on Beautiful Beaches",
			],
		},
		{
			title: "Popular Destinations",
			rows: [
				"Paris, France",
				"Bali, Indonesia",
				"New York City, USA",
				"Rome, Italy",
				"Tokyo, Japan",
			],
		},
		{
			title: "Travel Tips",
			rows: [
				"Packing Essentials",
				"Safety Precautions",
				"Budget Planning",
				"Local Customs and Etiquette",
				"Language Basics",
			],
		},
	];

	const category = [
		{
			title: "Refreshing Activities",
			icon: <GiBinoculars />,
			ref: handleActivitiesClick,
		},
		{
			title: "Explended Restaurants",
			icon: <IoRestaurantOutline />,
			ref: handleRestaurantsClick,
		},
		{
			title: "Luxury Hotels",
			icon: <SiHotelsdotcom />,
			ref: handleHotelsClick,
		},
		{
			title: "Tour Guides",
			icon: <GiSupersonicBullet />,
			ref: handleTourGuidesClick,
		},
		{
			title: "Travel Means",
			icon: <GiAirplaneDeparture />,
			ref: handleTravelMeansClick,
		},
		{ title: "Traditions", icon: <GiCampCookingPot /> },
	];

	const scrollLeft = (sliderId) => {
		const slider = document.getElementById(sliderId);
		const scrollAmount = slider.scrollLeft - window.innerWidth;
		slider.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	const scrollRight = (sliderId) => {
		const slider = document.getElementById(sliderId);
		const scrollAmount = slider.scrollLeft + window.innerWidth;
		slider.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [user, setUser] = useState(null);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	return (
		<div className='trips'>
			<nav class='navbar'>
				<div class='logo'>
					A<span>rdi travel</span>
				</div>
				<ul class='nav-links'>
					<li>
						<a onClick={handleRestaurantsClick}>Restaurants</a>
					</li>
					<li>
						<a href='/hotels'>Hotels</a>
					</li>
					<li>
						<a href='/'>Home</a>
					</li>
				</ul>
				{user ? (
					<div className='dropdown'>
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
					</div>
				) : (
					<div>
						<a href='/signin'>
							<button class='login-btn'>Login</button>
						</a>
						<a href='/signup'>
							<button class='signup-btn'>Sign Up</button>
						</a>
					</div>
				)}
			</nav>
			<div className='country-trips' id='slider'>
				{dataSlice.map((value) => (
					<div key={value._id} className='trip-item'>
						<div className='trip-image-container'>
							<img className='trip-image' src={value.image} alt='Trip' />
							<div className='trip-content'>
								<a onClick={() => handleLocationClick(value)}>
									<div className='trip-content-text'>
										<div className='horizontal-line'></div>
										<p>
											The variety of cities and destinations in Ethiopia that
											await for you
										</p>
									</div>
									<h1> {value.zone} </h1>
									{/* <h1> {value.woreda} </h1> */}
								</a>

								<div className='trip-content-second'>
									<div className='scroll-icons left-content'>
										<BsArrowLeftCircle
											className='scroll-trip scroll-icon-left'
											style={{
												fontSize: "40px",
												color: "white",
												marginRight: "20px",
											}}
											onClick={() => scrollLeft("slider")}
										/>
										<BsArrowRightCircle
											className='scroll-trip scroll-icon-right'
											style={{
												fontSize: "40px",
												color: "white",
												marginLeft: "10px",
											}}
											onClick={() => scrollRight("slider")}
										/>
									</div>
									<div className='right-content'>
										<BsInfoCircleFill
											style={{
												fontSize: "120px",
												color: "white",
												marginLeft: "10px",
											}}
										/>
										<p>{value.description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='category' id='slider2'>
				<div className='category-one'>
					<div className='description'>
						<h2> Select Category</h2>
						<p> Make your first step by making your jounrney unending fun</p>
					</div>
					<div className='category-scroll'>
						<FaChevronLeft
							className='scroll-trip scroll-icon-left'
							style={{
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								borderRadius: "50%",
								marginRight: "8px",
							}}
							onClick={() => scrollLeft("slider2")}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={() => scrollRight("slider2")}
						/>
					</div>
				</div>

				<div className='category-card'>
					{category.map((item, index) => (
						<a className='card-list' onClick={item.ref}>
							<div className='card-icon'>{item.icon}</div>
							<h1 className='card-title'>{item.title}</h1>
							<p className='card-phrase'>Begin your jounrney</p>
						</a>
					))}
				</div>
			</div>

			<div className='hotels-category' id='slider3' ref={hotelsSectionRef}>
				<div className='hotel-one'>
					<div className='description'>
						<h2> Top luxury hotels </h2>
						<p> Make your first step by making your jounrney unending fun</p>
					</div>
					<div className='hotel-scroll'>
						<FaChevronLeft
							className='scroll-trip scroll-icon-left'
							style={{
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								borderRadius: "50%",
								marginRight: "8px",
							}}
							onClick={() => scrollLeft("slider3")}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={() => scrollRight("slider3")}
						/>
					</div>
				</div>

				<div className='hotel-card-container'>
					<div className='hotel-card'>
						{topHotel.map((hotel) => {
							const hotelRoom = hotelRooms.filter(
								(room) => room.hotel_id === hotel._id
							);
							return (
								<a
									key={hotel._id}
									className='card'
									onClick={() => handleHotelClick(hotel)}
								>
									<div className='image-container'>
										<img
											src={hotel.image}
											alt={hotel.name}
											className='hotel-image'
										/>
										<div className='label-icon'>
											<span className='label'>Label</span>
										</div>
									</div>
									<div className='title-container'>
										<h3 className='title'>{hotel.name} </h3>
										<GrFavorite className='favorite-icon' />
									</div>
									{hotelRoom.length > 0 && (
										<div className='room-info'>
											<div className='room-info-one'>
												<div>
													<p>Room type: {hotelRoom[0].type}</p>
													<h4>${hotelRoom[0].price}.00</h4>
												</div>
												<p className='room-info-p'>
													<GrLike
														style={{
															fontSize: "22px",
															marginRight: "4px",
														}}
													/>
													{hotel.rating} likes
												</p>
											</div>
											<div className='room-number'>
												<FaBed
													style={{
														color: "#3ba0a3",
														fontSize: "18px",
														marginTop: "15px",
													}}
												/>{" "}
												<p> {hotelRoom.length} Rooms </p>
											</div>
											<div className='room-bottom'>
												<FaHotel
													style={{
														color: "#3ba0a3",
														fontSize: "18px",
														marginTop: "15px",
													}}
												/>
												<p>Luxury hotels to enjoy</p>
											</div>
										</div>
									)}
								</a>
							);
						})}
					</div>
				</div>
			</div>

			<div className='restaurants' id='slider4' ref={restaurantsSectionRef}>
				<div className='restaurant-one'>
					<div className='description'>
						<h2> Splended Restaurants </h2>
						<p> A jounrney is not fullfilled with out the foods </p>
					</div>
					<div className='search-bar'>
						<input
							className='input-field'
							type='text'
							placeholder='Search for hotels ....'
							onChange={filterHandler}
						/>
						<button className='search-icon'>
							<RiSearch2Line style={{ color: "#16494b", fontSize: "37px" }} />
						</button>
					</div>

					<div>
						{filteredRestaurants.length !== 0 && (
							<div className='search-results'>
								{filteredRestaurants.map((value) => {
									return (
										<a
											className='search-item'
											target=''
											key={value._id}
											onClick={() => handleRestaurantClick(value)} // Call the handleRestaurantClick function when the item is clicked
										>
											{value.name}
										</a>
									);
								})}
							</div>
						)}
					</div>
					<div className='restaurant-scroll'>
						<FaChevronLeft
							className='scroll-trip scroll-icon-left'
							style={{
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								borderRadius: "50%",
								marginRight: "8px",
							}}
							onClick={() => scrollLeft("slider4")}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={() => scrollRight("slider4")}
						/>
					</div>
				</div>
				<div className='scrollable-container'>
					{restaurants.map((restaurant, index) => {
						if (index % 6 === 0) {
							return (
								<a
									className='single-column-container'
									key={restaurant._id}
									onClick={() => handleRestaurantClick(restaurant)}
								>
									<div className='restaurant-card'>
										<div className='label'>Label</div>
										<img src={restaurant.image} alt={restaurant.name} />
										<p>{restaurant.name}</p>
									</div>
									{restaurants[index + 1] && (
										<div className='restaurant-card'>
											<div className='label'>Label</div>
											<img
												src={restaurants[index + 1].image}
												alt={restaurants[index + 1].name}
											/>
											<p>{restaurants[index + 1].name}</p>
										</div>
									)}
								</a>
							);
						} else if (index % 6 === 2) {
							return (
								<a
									className='column-container'
									key={restaurant._id}
									onClick={() => handleRestaurantClick(restaurant)}
								>
									<div className='restaurant-card third-card'>
										<div className='label'>Label</div>
										<img src={restaurant.image} alt={restaurant.name} />
										<p>{restaurant.name}</p>
									</div>
								</a>
							);
						} else if (index % 6 === 5) {
							return (
								<a
									className='column-container'
									key={restaurant._id}
									onClick={() => handleRestaurantClick(restaurant)}
								>
									<div className='restaurant-card fourth-card'>
										<div className='label'>Label</div>
										<img src={restaurant.image} alt={restaurant.name} />
										<p>{restaurant.name}</p>
									</div>
									{restaurants[index - 2] && restaurants[index - 1] && (
										<div className='row-container'>
											<div className='restaurant-card'>
												<div className='label'>Label</div>
												<img
													src={restaurants[index - 2].image}
													alt={restaurants[index - 2].name}
												/>
												<p>{restaurants[index - 2].name}</p>
											</div>
											<div className='restaurant-card'>
												<div className='label'>Label</div>
												<img
													src={restaurants[index - 1].image}
													alt={restaurants[index - 1].name}
												/>
												<p>{restaurants[index - 1].name}</p>
											</div>
										</div>
									)}
								</a>
							);
						} else {
							return null;
						}
					})}
				</div>
			</div>

			<div className='travel-means' id='slider5' ref={travelMeansSectionRef}>
				<div className='travel-means-one'>
					<div className='description'>
						<h2> Travel with </h2>
						<p> Moving from place to place with all your need </p>
					</div>
					<div className='travel-means-scroll'>
						<FaChevronLeft
							className='scroll-trip scroll-icon-left'
							style={{
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								borderRadius: "50%",
								marginRight: "8px",
							}}
							onClick={() => scrollLeft("slider5")}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={() => scrollRight("slider5")}
						/>
					</div>
				</div>

				<div className='travelmeans-container'>
					{travels.map((mean) => (
						<div className='travel-means-card' key={mean.id}>
							<div className='card-image'>
								<img src={mean.image} alt={mean.name} />
								<div className='price'> ${mean.price}</div>
							</div>
							<div className='content'>
								<h3>{mean.type}</h3>
								<p>{mean.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='tour-guides' id='slider6' ref={tourGuidesSectionRef}>
				<div className='tour-guide-one'>
					<div className='description'>
						<h2> Tour Guides </h2>
						<p> Company is avaliable if needed </p>
					</div>
					<div className='tour-guide-scroll'>
						<FaChevronLeft
							className='scroll-trip scroll-icon-left'
							style={{
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								borderRadius: "50%",
								marginRight: "8px",
							}}
							onClick={() => scrollLeft("slider6")}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={() => scrollRight("slider6")}
						/>
					</div>
				</div>

				<div className='tour-guide-container'>
					{tourGuides.map((guide, index) => (
						<div
							className={`tour-guide-card ${index % 2 === 0 ? "reverse" : ""}`}
							key={guide.id}
						>
							<div className='content'>
								<h3>{guide.name}</h3>
								<p>{guide.featuring}</p>
								<span>
									{" "}
									<GrLike /> Rating {guide.rating}
								</span>
							</div>
							<div className='image'>
								<img src={guide.image} alt={guide.name} />
							</div>
						</div>
					))}
				</div>

				<div className='trips-footer'>
					<div className='footer-title'>
						<h3>Adventure Calling You Guys!</h3>
						<hr className='title-line' />
					</div>

					<div className='footer-columns'>
						{columnsData.map((column, index) => (
							<div className='footer-column' key={index}>
								<h4>{column.title}</h4>
								<ul>
									{column.rows.map((row, rowIndex) => (
										<li key={rowIndex}>{row}</li>
									))}
								</ul>
							</div>
						))}
						<div className='footer-column contact-column'>
							<h4>Get in Touch</h4>
							<p>
								Let's talk <span className='arrow'>&rarr;</span>
							</p>
							<div className='input-container'>
								<input type='text' placeholder='Your message' />
								<button type='submit'>Submit</button>
							</div>
						</div>
					</div>
				</div>
				<div class='center-text'>
					Copyright &copy; Web Coding Pro. All Rights Reserved
				</div>
			</div>
		</div>
	);
}

export default Trips;
