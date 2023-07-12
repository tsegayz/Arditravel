import { useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";

import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

function Location({ locations, activities, restaurants, hotels }) {
	const location = useLocation();
	const { itemData } = location.state;

	const containerRef = useRef(null);

	//////////////////b//////////
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);

	const handleFavoriteClick = () => {
		if (isLoggedIn) {
			setIsFavorite((prevIsFavorite) => !prevIsFavorite);
		} else {
			setShowLoginModal(true);
		}
	};

	const handleLogin = () => {
		history.push(`/signin`);
		setShowLoginModal(false);
	};

	const closeModal = () => {
		setShowLoginModal(false);
		history.push(`/location/:itemId`); // Redirect to the home page after the modal is closed
	};
	// //////////////////////////////////////////////
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
											style={{
												backgroundImage: `url(${item.image})`,
												borderRadius: "30px",
											}}
										>
											<div className='city-card-attraction'>
												<div className='city-card-icon'>
													<button onClick={handleFavoriteClick}>
														{isFavorite ? (
															<MdFavorite style={{ color: "red" }} />
														) : (
															<MdFavoriteBorder style={{ color: "white" }} />
														)}
													</button>
													<Modal
														isOpen={showLoginModal}
														onRequestClose={closeModal}
														contentLabel='Login Modal'
														className='modal'
														overlayClassName='modal-overlay'
													>
														<div className='modal-content'>
															<h2>Login Required</h2>
															<p>Please log in to favorite this card.</p>
															<button
																className='modal-button'
																onClick={handleLogin}
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
								<button>
									<MdOutlineFavoriteBorder style={{ color: "white" }} />
								</button>
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
						{cityHotelData.map((item) => (
							<a key={item._id} onClick={() => handleHotelClick(item)}>
								<div
									className='city-hotels-card'
									style={{ backgroundImage: `url(${item.image})` }}
								>
									<button>
										<MdOutlineFavoriteBorder style={{ color: "white" }} />
									</button>
									<ul className='city-hotels-desc'>
										<h2 className='city-hotels-item'> {item.name} </h2>
										<h3 className='city-hotels-item'>
											<AiOutlineLike
												fontSize={25}
												style={{ marginRight: "8px" }}
											/>{" "}
											{item.rating} likes
										</h3>
									</ul>
								</div>
							</a>
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
							<a key={item._id} onClick={() => handleRestaurantClick(item)}>
								<div
									className='city-restaurants-card'
									style={{ backgroundImage: `url(${item.image})` }}
								>
									<button>
										<MdOutlineFavoriteBorder style={{ color: "white" }} />
									</button>
									<ul className='city-restaurants-desc'>
										<h2 className='city-restaurants-item'>{item.name}</h2>
									</ul>
								</div>
							</a>
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
