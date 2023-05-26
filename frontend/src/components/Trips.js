import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";
import {
	GiBinoculars,
	GiCampCookingPot,
	GiAirplaneDeparture,
	GiSupersonicBullet,
} from "react-icons/gi";
import { SiHotelsdotcom } from "react-icons/si";
import { GrFavorite } from "react-icons/gr";
import { IoRestaurantOutline } from "react-icons/io5";

import {
	BsArrowRightCircle,
	BsArrowLeftCircle,
	BsInfoCircleFill,
} from "react-icons/bs";

function Trips({ data, hotels, hotelRooms }) {
	const dataSlice = data.slice(3, 11);

	// const mergedData = hotels.map((hotel) => {
	// 	const hotelRoom = hotelRooms.find((room) => room.hotel_id === hotel.id);
	// 	return {
	// 	  ...hotel,
	// 	  room: hotelRoom || null,
	// 	  roomImage: hotelRoom ? hotelRoom.image : null,
	// 	};
	//   });

	const category = [
		{ title: "Refreshing Activities", icon: <GiBinoculars /> },
		{ title: "Explended Restaurants", icon: <IoRestaurantOutline /> },
		{ title: "Luxury Hotels", icon: <SiHotelsdotcom /> },
		{ title: "Traditional Food", icon: <GiCampCookingPot /> },
		{ title: "Tour Guides", icon: <GiSupersonicBullet /> },
		{ title: "Travel Means", icon: <GiAirplaneDeparture /> },
	];

	const scrollLeft = () => {
		const slider = document.getElementById("slider");
		const scrollAmount = slider.scrollLeft - window.innerWidth;
		slider.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	const scrollRight = () => {
		const slider = document.getElementById("slider");
		const scrollAmount = slider.scrollLeft + window.innerWidth;
		slider.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<div className='trips'>
			<nav class='navbar'>
				<div class='logo'>
					{" "}
					A<span>rdi travel</span>
				</div>
				<ul class='nav-links'>
					<li>
						<a href='#'>Restaurants</a>
					</li>
					<li>
						<a href='#'>Hotels</a>
					</li>
					<li>
						<a href='#'>Activities</a>
					</li>
				</ul>
				<div>
					<a href='/signin'>
						{" "}
						<button class='login-btn'>Login</button>{" "}
					</a>
					<a href='/signup'>
						{" "}
						<button class='signup-btn'>Sign Up</button>{" "}
					</a>
				</div>
			</nav>
			<div className='country-trips' id='slider'>
				{dataSlice.map((value) => (
					<div key={value._id} className='trip-item'>
						<div className='trip-image-container'>
							<img className='trip-image' src={value.image} alt='Trip' />
							<div className='trip-content'>
								<div className='trip-content-text'>
									<div className='horizontal-line'></div>
									<p>
										The variety of cities and destinations in Ethiopia that
										await for you
									</p>
								</div>
								<h1> {value.woreda} </h1>
								<div className='trip-content-second'>
									<div className='scroll-icons left-content'>
										<BsArrowLeftCircle
											className='scroll-trip scroll-icon-left'
											style={{
												fontSize: "40px",
												color: "white",
												marginRight: "20px",
											}}
											onClick={scrollLeft}
										/>
										<BsArrowRightCircle
											className='scroll-trip scroll-icon-right'
											style={{
												fontSize: "40px",
												color: "white",
												marginLeft: "10px",
											}}
											onClick={scrollRight}
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

			<div className='category'>
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
							onClick={scrollLeft}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={scrollRight}
						/>
					</div>
				</div>

				<div className='category-card' id='slider'>
					{category.map((item, index) => (
						<div className='card-list' key={index}>
							<div className='card-icon'>{item.icon}</div>
							<h1 className='card-title'>{item.title}</h1>
							<p className='card-phrase'>Begin your jounrney</p>
						</div>
					))}
				</div>
			</div>

			<div className='hotels-category'>
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
							onClick={scrollLeft}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={scrollRight}
						/>
					</div>
				</div>

				<div className='hotel-card-container'>
					<div className='hotel-card'>
						{hotels.map((hotel) => {

							return (
								<div key={hotel.id} className='card'>
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
										<h3 className='title'>{hotel.name}</h3>
										<GrFavorite className='favorite-icon' />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className='restaurants'>
				<div className='restaurant-one'>
					<div className='description'>
						<h2> Splended Restaurants </h2>
						<p> A jounrney is not fullfilled with out the foods </p>
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
							onClick={scrollLeft}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={scrollRight}
						/>
					</div>
				</div>

				<div className='restaurant-card'></div>
			</div>

			<div className='travel-means'>
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
							onClick={scrollLeft}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={scrollRight}
						/>
					</div>
				</div>

				<div className='travel-means-card'></div>
			</div>

			<div className='tour-guides'>
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
							onClick={scrollLeft}
						/>
						<FaChevronRight
							className='scroll-trip scroll-icon-right'
							style={{
								borderRadius: "50%",
								fontSize: "15px",
								color: "rgba(173, 172, 172, 0.788)",
								marginLeft: "10px",
							}}
							onClick={scrollRight}
						/>
					</div>
				</div>

				<div className='tour-guide-card'></div>
			</div>
		</div>
	);
}

export default Trips;
