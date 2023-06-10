import { useLocation } from "react-router-dom";
import { useRef } from "react";

import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function Location({ locations, activities, restaurants, hotels }) {
	const location = useLocation();
	const { itemData } = location.state;

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
						<div className='city-card-list'>
							<ul className='city-card-list-content'>
								{cityLocationData.map((item) => (
									<li className='city-card-item'>
										<div
											className='city-card'
											style={{
												backgroundImage: `url(${item.image})`,
												borderRadius: "30px",
											}}
										>
											<div className='city-card-attraction'>
												<div className='city-card-icon'>
													<a>
														<FiBookmark />
													</a>
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
									</li>
								))}
							</ul>
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
				<div className='city-things-list'>
					<ul className='city-things-content'>
						{cityActivityData.map((newData) => (
							<li key={newData._id}>
								<div
									className='city-things-card'
									style={{ backgroundImage: `url(${newData.image})` }}
								>
									<button>
										<MdOutlineFavoriteBorder style={{ color: "white" }} />
									</button>
									<ul className='city-things-desc'>
										<h2 className='city-things-item'>{newData.name}</h2>
										<h3 className='city-things-item'>
											Price: $ {newData.price}
										</h3>
										<h3 className='city-things-item'>
											<AiOutlineLike
												fontSize={25}
												style={{ marginRight: "8px" }}
											/>
											{newData.rating} likes
										</h3>
									</ul>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='city-hotels-container' ref={hotelsSectionRef} id='hotels'>
				<h2> Hotels </h2>
				<h3> home of luxury </h3>
				<div className='city-hotels-list'>
					<ul className='city-hotels-content'>
						{cityHotelData.map((item) => (
							<li key={item._id}>
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
							</li>
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
				<div className='city-restaurants-list'>
					<ul className='city-restaurants-content'>
						{cityRestaurantData.map((item) => (
							<li key={item._id}>
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
							</li>
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
