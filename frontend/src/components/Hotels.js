import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import { RiSearch2Line, RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Hotels({ hotels, hotelRooms }) {
	const hotelsSlice = hotels.slice(1, 8);

	const footerSectionRef = useRef(null);
	const roomSectionRef = useRef(null);
	const history = useHistory();

	const handleHotelClick = (item) => {
		history.push(`/eachhotel/${item._id}`, { itemData: item });
	};
	const handleFooterClick = () => {
		footerSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const handleRoomClick = () => {
		roomSectionRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const [filteredHotels, setfilteredHotels] = useState([]);
	const filterHandler = (e) => {
		const searchWord = e.target.value;
		const newFilter = hotels.filter((value) => {
			return value.name.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setfilteredHotels([]);
		} else {
			setfilteredHotels(newFilter);
		}
	};

	const handleItemClick = (item) => {
		// Navigate to the location page and pass the selected item's data
		history.push(`/eachhotel/${item._id}`, { itemData: item });
	};

	return (
		<div className='hotels'>
			<nav className='hotels-nav'>
				<h1> Ardi Travel </h1>
				<ul className='hotel-list'>
					<li className='hotel-nav'>
						<a onClick={handleRoomClick}> Rooms </a>
					</li>
					<li className='hotel-nav'>
						<a onClick={handleFooterClick}>About </a>
					</li>
					<li className='hotel-nav'>
						<a onClick={handleFooterClick}> Contact us </a>
					</li>
				</ul>
			</nav>
			<div className="hotel-background">
				<div className='hotel-descr'>
					<div className='hotel-descr-item'>
						<h6> All your needs in one place </h6>
						<p> All of the top hotel in the city </p>
					</div>
				</div>
				<div className='search-bar'>
					<input
						className='input-field'
						type='text'
						placeholder='Search for hotels ....'
						onChange={filterHandler}
					/>
					<button className='search-icon'>
						<RiSearch2Line style={{ color: "#16494b", fontSize: "25px" }} />
					</button>
				</div>

				<div>
					{filteredHotels.length !== 0 && (
						<div className='search-results'>
							{filteredHotels.map((value) => {
								return (
									<a
										className='search-item'
										target=''
										key={value._id}
										onClick={() => handleItemClick(value)} // Call the handleItemClick function when the item is clicked
									>
										{value.name}
									</a>
								);
							})}
						</div>
					)}
				</div>
			</div>
			<h5> Explore the hotels of your choice</h5>
			<div className='hotel-card-wrapper' ref={roomSectionRef}>
				{hotelsSlice.map((hotel, index) => (
					<a
						className='hotel-card'
						key={hotel._id}
						onClick={() => handleHotelClick(hotel)}
					>
						<div
							className={`hotel-details ${index % 2 === 0 ? "reverse" : ""}`}
						>
							<div className='image-container'>
								<img src={hotel.image} alt={hotel.name} />
							</div>
							<div className='hotel-details-name'>
								<h2 className='hotel-name'>{hotel.name}</h2>
								<p>
									{hotel.description} "Lorem dolor sit amet, consectetur
									adipiscing elit. Pellentesque vel mi ut elit tempor aliquam
									eget eget enim. Proin cursus eleifend pretium. Aliquam cursus
									"Lorem dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>
						<h2 className='h2arrow'>
							{" "}
							The Splended rooms of the hotels{" "}
							<span className='arrow'>&rarr;</span>
						</h2>
						<div className='hotel-rooms'>
							<div className='rooms-container'>
								{hotelRooms
									.filter((room) => room.hotel_id === hotel._id)
									.map((room) => (
										<div className='room-card' key={room._id}>
											<div className='room-card-scroll'>
												<img src={room.image} alt={room.type} />
												<p>{room.type} Room </p>
											</div>
										</div>
									))}
							</div>
						</div>
					</a>
				))}
			</div>

			<footer className='hotels-footer' ref={footerSectionRef}>
				<div className='hotels-footer-one'>
					<h2> Welcome services</h2>
					<p className='footer-title'> All your need </p>
					<div className='hotels-search'></div>
					<div class='hotel-container'>
						<p class='footer-para'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam
						</p>
					</div>
					<div className='contact'>
						<h2>Get in Touch</h2>
						<div className='input-container'>
							<input type='text' placeholder='Your message' />
							<button type='submit'>Submit</button>
						</div>
					</div>
				</div>
				<div className='hotels-footer-two'>
					<h2> Contact </h2>
					<div className='contact-one'>
						<h3>Find us on:</h3>
						<div className='first'>
							<h3>Address</h3>
							<p>"Lorem dolor Aliquam cursus</p>
						</div>
						<div className='second'>
							<h3>Phone</h3>
							<p>+1 (555) 123-4567</p>
						</div>
						<div className='third'>
							<h3>Email</h3>
							<p>resto67@gmail.com</p>
						</div>
					</div>
					<div>
						<ul className='footer-nav-socials'>
							<li class='hotel-social'>
								<a href='#in'>
									<i>
										<RiFacebookFill style={{ color: "white" }} />
									</i>
								</a>
							</li>
							<li class='hotel-social'>
								<a href='#in'>
									<SiTwitter style={{ color: "white" }} />
								</a>
							</li>
							<li class='hotel-social'>
								<a href='#in'>
									<RiInstagramFill style={{ color: "white" }} />
								</a>
							</li>
							<li class='hotel-social'>
								<a href='#in'>
									<MdEmail style={{ color: "white" }} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Hotels;
