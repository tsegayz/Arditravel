import { useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";

import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
	MdFavorite,
	MdFavoriteBorder,
	MdOutlineFavoriteBorder,
} from "react-icons/md";

function Location({ locations, activities, restaurants, hotels }) {
	const location = useLocation();
	const { itemData } = location.state;

	const containerRef = useRef(null);

	//////////////////b//////////
	const useFavoriteItems = (datasetName) => {
		const [isLoggedIn, setIsLoggedIn] = useState(false);
		const [likedItems, setLikedItems] = useState(new Set());
		const [showLoginModal, setShowLoginModal] = useState(false);

		const handleFavoriteClick = (itemId) => {
			if (isLoggedIn) {
				setLikedItems((prevLikedItems) => {
					const updatedLikedItems = new Set(prevLikedItems);
					if (updatedLikedItems.has(itemId)) {
						updatedLikedItems.delete(itemId);
					} else {
						updatedLikedItems.add(itemId);
					}
					const userLikedItemsKey = `likedItems_${getUserIdentifier()}`;
					localStorage.setItem(
						userLikedItemsKey,
						JSON.stringify([...updatedLikedItems])
					); // Store user-specific liked items in local storage
					return updatedLikedItems;
				});
			} else {
				setShowLoginModal(true);
			}
		};

		const getUserIdentifier = () => {
			const user = localStorage.getItem("user");
			if (user) {
				try {
					const parsedUser = JSON.parse(user);
					return parsedUser._id; // Assuming the user object has an "_id" property for the user ID
				} catch (error) {
					console.error("Error parsing user data:", error);
				}
			}
			return ""; // Return an empty string if the user identifier is not available
		};

		useEffect(() => {
			const storedUser = localStorage.getItem("user");
			if (storedUser) {
				try {
					const parsedUser = JSON.parse(storedUser);
					setUser(parsedUser);
					setIsLoggedIn(true);
				} catch (error) {
					console.error("Error parsing user data from local storage:", error);
				}
			}

			const userLikedItemsKey = `likedItems_${getUserIdentifier()}`;
			const storedLikedItems = localStorage.getItem(userLikedItemsKey);
			if (storedLikedItems) {
				try {
					const parsedLikedItems = JSON.parse(storedLikedItems);
					setLikedItems(new Set(parsedLikedItems));
				} catch (error) {
					console.error("Error parsing liked items from local storage:", error);
				}
			}
		}, [datasetName]);
		const handleLogin = () => {
			history.push(`/signin`);
			setShowLoginModal(false);
		};

		const closeModal = () => {
			setShowLoginModal(false);
			history.push(`/location/:itemId`);
		};
		return {
			isLoggedIn,
			likedItems,
			handleLogin,
			closeModal,
			handleFavoriteClick,
			showLoginModal,
			setShowLoginModal,
		};
	};

	const favorites = useFavoriteItems("favorites");
	const thingFavorites = useFavoriteItems("thingFavorites");
	const hotelFavorites = useFavoriteItems("hotelFavorites");
	const restaurantFavorites = useFavoriteItems("restaurantFavorites");

	//////////////////////////////////////////////
	const scrollLeft = (sliderId) => {
		const slider = document.getElementById(sliderId);
		const scrollAmount = slider.scrollLeft - 200; // Adjust the scroll amount as needed
		slider.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	const scrollRight = (sliderId) => {
		const slider = document.getElementById(sliderId);
		const scrollAmount = slider.scrollLeft + 200; // Adjust the scroll amount as needed
		slider.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	const history = useHistory();
	const handleRestaurantClick = (item) => {
		// Navigate to the restaurant page and pass the selected item's data
		history.push(`/restaurant/${item._id}`, { itemData: item });
	};

	const handleHotelClick = (item) => {
		// Navigate to the hotel page and pass the selected item's data
		history.push(`/eachhotel/${item._id}`, { itemData: item });
	};

	const cityLocationData = locations.filter(
		(item) => item.location_type_id === itemData._id
	);

	const cityActivityData = activities.filter(
		(item) => item.location_id === itemData._id
	);

	const cityHotelData = hotels.filter(
		(item) => item.location_id === itemData._id
	);

	const cityRestaurantData = restaurants.filter(
		(item) => item.locationtype_id === itemData._id
	);

	const hotelsSectionRef = useRef(null);
	const activitiesSectionRef = useRef(null);
	const restaurantsSectionRef = useRef(null);

	const handleHotelsClick = () => {
		hotelsSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleActivitiesClick = () => {
		activitiesSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleRestaurantsClick = () => {
		restaurantsSectionRef.current.scrollIntoView({ behavior: "smooth" });
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

	return (
		<div className='city'>
			<div className='city-nav'>
				<nav className='hotels-nav'>
					<h1> Ardi Travel </h1>
					<ul className='hotel-list'>
						<li className='hotel-nav'>
							<a href='/'> Home </a>
						</li>
						<li className='hotel-nav'>
							<a onClick={handleRestaurantsClick}>Restaurants</a>
						</li>
						<li className='hotel-nav'>
							<a onClick={handleHotelsClick}>Hotels</a>
						</li>
						<li className='hotel-nav'>
							<a onClick={handleActivitiesClick}>Activities</a>
						</li>
					</ul>
				</nav>
				<div
					className='city-homepage'
					style={{ backgroundImage: `url(${itemData.image})` }}
				>
					<div className='overlay'></div>
					<div className='city-name'>
						<div className='city-name-descr'>
							<h2>
								{itemData.zone}, {itemData.region}
							</h2>
							<p>Splendid weekend on splendid city</p>
						</div>
					</div>
					<div className='city-card-list-container'>
						<div className='city-card-list' ref={containerRef}>
							<div className='city-card-list-content' id='slider'>
								{cityLocationData.map((item) => (
									<div className='city-card-item'>
										<div
											className='city-card'
											key={item._id}
											style={{
												backgroundImage: `url(${item.image})`,
												borderRadius: "30px",
												boxShadow: "10px 10px 24px rgba(0, 0, 0, 0.4)", // Add the boxShadow property
											}}
										>
											<div className='city-card-attraction'>
												<div className='city-card-icon'>
													<button
														onClick={() =>
															favorites.handleFavoriteClick(item._id)
														}
													>
														{favorites.likedItems.has(item._id) ? (
															<MdFavorite style={{ color: "red" }} />
														) : (
															<MdFavoriteBorder style={{ color: "white" }} />
														)}
													</button>
													<Modal
														isOpen={favorites.showLoginModal}
														onRequestClose={favorites.closeModal}
														contentLabel='Login Modal'
														className='modal'
														overlayClassName='modal-overlay'
													>
														<div className='modal-content'>
															<h2>Login Required</h2>
															<p>Please log in to favorite this card.</p>
															<button
																className='modal-button'
																onClick={favorites.handleLogin}
															>
																Log In
															</button>
														</div>
													</Modal>
												</div>
												<div className='city-card-detail'>
													<ul className='city-attraction'>
														<li className='city-attraction-item'>
															<h2>{item.name}</h2>
														</li>
														<li className='city-attraction-item'>
															<div className='city-attraction-icon'>
																<AiOutlineLike style={{ fontSize: "23px" }} />
																<p>{item.review.rating} likes</p>
															</div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<button
								className='scroll-loca'
								style={{
									fontSize: "40px",
									color: "green",
									marginLeft: "10px",
									borderRadius: "50%",
								}}
								onClick={() => scrollLeft("slider")}
							>
								<FiChevronLeft
									style={{ fontSize: "40px", paddingTop: "5px" }}
								/>
							</button>
							<button
								className='scroll-loca'
								style={{
									fontSize: "40px",
									color: "green",
									marginLeft: "10px",
									borderRadius: "50%",
								}}
								onClick={() => scrollRight("slider")}
							>
								<FiChevronRight
									style={{ fontSize: "40px", paddingTop: "5px" }}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='about-city'>
				<div>
					<h2> About </h2>
					<h3>
						{itemData.zone}, {itemData.region}
					</h3>
				</div>
				<p>{itemData.description}</p>
			</div>
			<div
				className='city-things-container'
				ref={activitiesSectionRef}
				id='activities'
			>
				<h2>Things to do</h2>

				<div className='city-things-list' id='slider2'>
					<div className='city-things-content'>
						{cityActivityData.map((newData) => (
							<div
								key={newData._id}
								className='city-things-card'
								style={{ backgroundImage: `url(${newData.image})` }}
							>
								<button
									onClick={() =>
										thingFavorites.handleFavoriteClick(newData._id)
									}
								>
									{thingFavorites.likedItems.has(newData._id) ? (
										<MdFavorite style={{ color: "red" }} />
									) : (
										<MdFavoriteBorder style={{ color: "white" }} />
									)}
								</button>
								<Modal
									isOpen={thingFavorites.showLoginModal}
									onRequestClose={thingFavorites.closeModal}
									contentLabel='Login Modal'
									className='modal'
									overlayClassName='modal-overlay'
								>
									<div className='modal-content'>
										<h2>Login Required</h2>
										<p>Please log in to favorite this card.</p>
										<button
											className='modal-button'
											onClick={thingFavorites.handleLogin}
										>
											Log In
										</button>
									</div>
								</Modal>
								<ul className='city-things-desc'>
									<h2 className='city-things-item'>{newData.name}</h2>
									<h3 className='city-things-item'>Price: $ {newData.price}</h3>
									<h3 className='city-things-item'>
										<AiOutlineLike
											fontSize={25}
											style={{ marginRight: "8px" }}
										/>
										{newData.rating} likes
									</h3>
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='city-hotels-container' ref={hotelsSectionRef} id='hotels'>
				<h2> Hotels </h2>
				<h3> home of luxury </h3>
				<div className='city-hotels-list' id='slider3'>
					<ul className='city-hotels-content'>
						{cityHotelData.map((hotel) => (
							<div
								className='city-hotels-card'
								style={{ backgroundImage: `url(${hotel.image})` }}
							>
								<button
									onClick={() => hotelFavorites.handleFavoriteClick(hotel._id)}
								>
									{hotelFavorites.likedItems.has(hotel._id) ? (
										<MdFavorite style={{ color: "red" }} />
									) : (
										<MdFavoriteBorder style={{ color: "white" }} />
									)}
								</button>
								<Modal
									isOpen={hotelFavorites.showLoginModal}
									onRequestClose={thingFavorites.closeModal}
									contentLabel='Login Modal'
									className='modal'
									overlayClassName='modal-overlay'
								>
									<div className='modal-content'>
										<h2>Login Required</h2>
										<p>Please log in to favorite this card.</p>
										<button
											className='modal-button'
											onClick={hotelFavorites.handleLogin}
										>
											Log In
										</button>
									</div>
								</Modal>
								<a key={hotel._id} onClick={() => handleHotelClick(hotel)}>
									<ul className='city-hotels-desc'>
										<h2 className='city-hotels-item'> {hotel.name} </h2>
										<h3 className='city-hotels-item'>
											<AiOutlineLike
												fontSize={25}
												style={{ marginRight: "8px" }}
											/>{" "}
											{hotel.rating} likes
										</h3>
									</ul>
								</a>
							</div>
						))}
					</ul>
				</div>
			</div>

			<div
				className='city-restaurants-container'
				ref={restaurantsSectionRef}
				id='restaurants'
			>
				<h2> Resturants </h2>
				<h3> Enjoy your meals </h3>
				<div className='city-restaurants-list' id='slider4'>
					<ul className='city-restaurants-content'>
						{cityRestaurantData.map((item) => (
							<div
								className='city-restaurants-card'
								style={{ backgroundImage: `url(${item.image})` }}
							>
								<button
									onClick={() =>
										restaurantFavorites.handleFavoriteClick(item._id)
									}
								>
									{restaurantFavorites.likedItems.has(item._id) ? (
										<MdFavorite style={{ color: "red" }} />
									) : (
										<MdFavoriteBorder style={{ color: "white" }} />
									)}
								</button>
								<Modal
									isOpen={restaurantFavorites.showLoginModal}
									onRequestClose={thingFavorites.closeModal}
									contentLabel='Login Modal'
									className='modal'
									overlayClassName='modal-overlay'
								>
									<div className='modal-content'>
										<h2>Login Required</h2>
										<p>Please log in to favorite this card.</p>
										<button
											className='modal-button'
											onClick={restaurantFavorites.handleLogin}
										>
											Log In
										</button>
									</div>
								</Modal>
								<a key={item._id} onClick={() => handleRestaurantClick(item)}>
									<ul className='city-restaurants-desc'>
										<h2 className='city-restaurants-item'>{item.name}</h2>
									</ul>
								</a>
							</div>
						))}
					</ul>
				</div>
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
	);
}

export default Location;
