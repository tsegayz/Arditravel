import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import { RiFacebookFill, RiLinkedinFill, RiWifiFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

function HotelEach({ hotelRooms, footer }) {
	const location = useLocation();
	const history = useHistory();
	const [checkin, setCheckin] = useState("");
	const [checkout, setCheckout] = useState("");
	const [roomtype, setRoomtype] = useState("");
	const [responseMessage, setResponseMessage] = useState("");
	const [showModal, setShowModal] = useState(false);
	const { itemData } = location.state;
	const { _id: hotel_id } = itemData; // Access the hotel ID from itemData

	const hotelRoomData = hotelRooms.filter((item) => item.hotel_id === hotel_id);

	const submit = async (e) => {
		e.preventDefault();

		// Basic validation
		if (!checkin || !checkout || !roomtype) {
			setResponseMessage("Please fill in all the fields");
			return;
		}

		try {
			const user_id = localStorage.getItem("user_id");
			const token = localStorage.getItem("token"); // Retrieve the token from local storage

			// Filter the rooms based on the specified room_type
			const filteredRooms = hotelRoomData.filter(
				(item) => item.type === roomtype
			);
			if (filteredRooms.length === 0) {
				setResponseMessage("No rooms available for the specified criteria");
				return;
			}

			// console.log(location.state.itemData._id);
			const room_id = filteredRooms[0]._id;

			const axiosConfig = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			const response = await axios.post(
				"http://localhost:5000/api/v1/hotelBooking",
				{
					hotel_id: location.state.itemData._id,
					user_id: user_id,
					room_id: room_id,
					checkin_date: checkin,
					checkout_date: checkout,
				},
				axiosConfig
			);

			console.log("Response:", response.data); // Log the response data to the console

			setResponseMessage(response.data); // Set the response message
			setShowModal(true); // Show the modal
		} catch (error) {
			console.log(error);
			setResponseMessage("An error occurred");
		}
	};

	const closeModal = () => {
		setShowModal(false);
		history.push(`/hotels`);
	};

	return (
		<div
			className='each-hotel'
			style={{ backgroundImage: `url(${itemData.image})` }}
		>
			<nav className='hotels-nav'>
				<h1>Ardi Travel</h1>
				<ul className='hotel-list'>
					<li className='hotel-nav-list'>
						<a>Contact us</a>
					</li>
					<li className='hotel-nav-list'>
						<a>Room</a>
					</li>
					<li className='hotel-nav-list'>
						<a>Gallery</a>
					</li>
				</ul>
			</nav>

			<div className='hotel-descr'>
				<div className='hotel-descr-item'>
					<h4>{itemData.name}</h4>
					<h4>One of the top hotels in the city</h4>
				</div>
			</div>

			<div className='room-list'>
				<div>
					<h2> List of avaliable rooms </h2>
					<p>
						"Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel
					</p>
				</div>
				<div className='rooms'>
					{hotelRooms.slice(1, 6).map((item, index) => (
						<div className='hotel-card' key={item._id}>
							<div key={index} className='room-container'>
								<div className='room-img'>
									<img src={item.image} alt='' className='img-fluid' />
								</div>
								<div className='detail'>
									<h3>Room type: {item.type}</h3>
									<p>Price: ${item.price}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<form className='hotel-form'>
				<ul className='hotel-book-form'>
					<li className='hotel-book'>
						<p>Check-in date</p>
						<input
							id='date-input'
							type='date'
							autoComplete='off'
							onChange={(e) => {
								setCheckin(e.target.value);
							}}
						/>
					</li>
					<li className='hotel-book'>
						<p>Check-out date</p>
						<input
							id='date-input'
							type='date'
							autoComplete='off'
							onChange={(e) => {
								setCheckout(e.target.value);
							}}
						/>
					</li>

					<li className='hotel-book'>
						<p>Room Type</p>
						<input
							id='name-input'
							type='text'
							autoComplete='off'
							placeholder='Executive'
							onChange={(e) => {
								setRoomtype(e.target.value);
							}}
						/>
					</li>

					<li className='hotel-book'>
						<button type='submit' onClick={submit}>
							Book Now
						</button>
					</li>
				</ul>
			</form>
			<footer>
				<div className='logo-bottom'>
					<div className='logo-bottom-one'>
						<h1>
							A<span>rdi travel</span>
						</h1>
						<p> Land of origin, Ethiopia </p>
					</div>
				</div>
				<div class='line'></div>
				<div class='socials'>
					<ul>
						<li class='social-items'>
							<a href='#in'>
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

export default HotelEach;
