import { useLocation } from "react-router-dom";

import {
	RiFacebookFill,
	RiLinkedinFill,
	RiInstagramFill,
} from "react-icons/ri";
import { SiTwitter } from "react-icons/si";

function HotelEach({ items, hotelRooms }) {
	const location = useLocation();
	const { itemData } = location.state;

	const hotelRoomData = hotelRooms.filter(
		(item) => item.hotel_id === itemData._id
	);
	return (
		<div
			className='each-hotel'
			style={{ backgroundImage: `url(${itemData.image})` }}
		>
			<nav className='hotels-nav'>
				<h1> Ardi Travel </h1>
				<ul className='hotel-list'>
					<li className='hotel-nav'>
						<a> Contact us</a>{" "}
					</li>
					<li className='hotel-nav'>
						<a> Room </a>{" "}
					</li>
					<li className='hotel-nav'>
						<a> Gallery </a>
					</li>
				</ul>
			</nav>

			<div className='hotel-descr'>
				<div className='hotel-descr-item'>
					<h4> {itemData.name} </h4>
					<h4> One of the top hotel in the city </h4>
				</div>
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
						<p> Room Type </p>
						<input placeholder='Executive' />
					</li>

					<li className='hotel-book'>
						<button> Book Now </button>
					</li>
				</ul>
			</form>

			<div className='sidebar'>
				<h2> Choose the Rooms of your choice </h2>
				<ul className='container-list'>
					{hotelRoomData.map((item) => (
						<li className='container'>
							<div className='sidebar-box'>
								<div className='sidebar-img'>
									<img src={item.image} alt='' className='img-fluid' />
								</div>
							</div>
							<h3> Room type : {item.type}</h3>
							<p> Price: ${item.price} </p>
						</li>
					))}
				</ul>
			</div>
			<div>
				<ul className='footer-nav-socials'>
					<li class='hotel-social'>
						<a href='#in'>
							<i>
								{" "}
								<RiFacebookFill style={{ color: "white" }} />{" "}
							</i>{" "}
						</a>
					</li>
					<li class='hotel-social'>
						<a href='#in'>
							<SiTwitter style={{ color: "white" }} />
						</a>
					</li>
					<li class='hotel-social'>
						<a href='#in'>
							<RiLinkedinFill style={{ color: "white" }} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default HotelEach;
