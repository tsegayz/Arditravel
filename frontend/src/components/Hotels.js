import { useState } from "react";
import {
	RiSearch2Line,
	RiFacebookFill,
	RiLinkedinFill,
	RiInstagramFill,
} from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { MdFavorite, MdEmail } from "react-icons/md";

function Hotels({ hotels, hotelRooms }) {

	const hotelsSlice = hotels.slice(1, 8);
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
	return (
		<div className='hotels'>
			<nav className='hotels-nav'>
				<h1> Ardi Travel </h1>
				<ul className='hotel-list'>
					<li className='hotel-nav'>
						{" "}
						<a> Contact us</a>{" "}
					</li>
					<li className='hotel-nav'>
						{" "}
						<a> Rooms </a>{" "}
					</li>
					<button> Book Now </button>
				</ul>
			</nav>

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
					{" "}
					<RiSearch2Line style={{ color: "#16494b", fontSize: "37px" }} />
				</button>
			</div>

			<div>
				{filteredHotels.length !== 0 && (
					<div className='search-results'>
						{filteredHotels.map((value) => {
							return (
								<a className='search-item' target='' key={value.id} href='/eachhotel'>
									{value.name}
								</a>
							);
						})}
					</div>
				)}
			</div>

			<form className='hotel-form'>
				<ul className='hotel-book-form'>
					<li className='hotel-book'>
						<p> Check-in date </p>
						<input placeholder='01/01/2000' />
					</li>
					<li className='hotel-book'>
						<p> Check-out date </p>
						<input placeholder='01/01/2000' />
					</li>
					<li className='hotel-book'>
						<button> Book Now </button>
					</li>
				</ul>
			</form>

			<div className='hotel-card-wrapper'>
				{hotelsSlice.map((hotel) => (
					<div className='hotel-card' key={hotel._id}>
						<div className='hotel-details'>
							<div className='image-contaienr'>
								<img src={hotel.image} alt={hotel.name} />
							</div>
							<div className='hotel-details-name'>
								<h2 className='hotel-name'>{hotel.name}</h2>
								<p>
									{hotel.description} "Lorem dolor sit amet, consectetur
									adipiscing elit. Pellentesque vel mi ut elit tempor aliquam
									eget eget enim. Proin cursus eleifend pretium. Aliquam cursus
									"Lorem dolor sit amet, consectetur adipiscing elit.
									Pellentesque vel mi ut elit tempor aliquam eget eget enim.
									Proin cursus eleifend pretium. Aliquam cursus lorem
								</p>
							</div>
						</div>
						<p> The Splended rooms of the hotels </p>
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
					</div>
				))}
			</div>

			<footer className='hotels-footer'>
				<div className='hotels-footer-one'>
					<h2> Welcome Home</h2>
					<p className='footer-title'> All your need </p>
					<div className='hotels-search'></div>
					<div>
						<ul className='footer-nav-socials'>
							<li class='hotel-social'>
								<a href='#in'>
									<i>
										{" "}
										<RiFacebookFill style={{ color: "rgb(32, 32, 73)" }} />{" "}
									</i>{" "}
								</a>
							</li>
							<li class='hotel-social'>
								<a href='#in'>
									<SiTwitter style={{ color: "rgb(32, 32, 73)" }} />
								</a>
							</li>
							<li class='hotel-social'>
								<a href='#in'>
									<RiLinkedinFill style={{ color: "rgb(32, 32, 73)" }} />
								</a>
							</li>
							<li class='hotel-social'>
								<a href='#in'>
									<RiInstagramFill style={{ color: "rgb(32, 32, 73)" }} />
								</a>
							</li>
							<li class='hotel-social'>
								<a href='#in'>
									<MdEmail style={{ color: "rgb(32, 32, 73)" }} />
								</a>
							</li>
						</ul>
					</div>
					<div class='hotel-container'>
						<p class='footer-para'>
							{" "}
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Hotels;
