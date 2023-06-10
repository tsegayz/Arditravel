import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";

function HotelEach({ hotelRooms }) {
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

			console.log(location.state.itemData._id);
			const room_id = filteredRooms[0]._id; // Assuming there's only one room available for the specified criteria

			const axiosConfig = {
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the Authorization header
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
				axiosConfig // Pass the axiosConfig object as the third parameter
			);

			setResponseMessage(response.data);
			setShowModal(true);
		} catch (error) {
			console.log(error);
			setResponseMessage("An error occurred");
		}
	};

	const closeModal = () => {
		setShowModal(false);
		history.push(`/hotels`); // Redirect to the home page after the modal is closed
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
								setRoomtype(e.target.value); // Update the roomtype state instead of checkout
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

			<div className='sidebar'>
				<h2>Choose the Rooms of your choice</h2>
				<ul className='container-list'>
					{hotelRoomData.map((item) => (
						<li className='container' key={item._id}>
							<div className='sidebar-box'>
								<div className='sidebar-img'>
									<img src={item.image} alt='' className='img-fluid' />
								</div>
							</div>
							<h3>Room type: {item.type}</h3>
							<p>Price: ${item.price}</p>
						</li>
					))}
				</ul>
			</div>
			<div>
				<ul className='footer-nav-socials'>
					<li className='hotel-social'>
						<a href='#in'>
							<i>
								<RiFacebookFill style={{ color: "white" }} />{" "}
							</i>{" "}
						</a>
					</li>
					<li className='hotel-social'>
						<a href='#in'>
							<SiTwitter style={{ color: "white" }} />
						</a>
					</li>
					<li className='hotel-social'>
						<a href='#in'>
							<RiLinkedinFill style={{ color: "white" }} />
						</a>
					</li>
				</ul>
			</div>

			<Modal
				isOpen={showModal}
				onRequestClose={closeModal}
				contentLabel='Booking Confirmation'
				className='modal'
				overlayClassName='modal-overlay'
			>
				<div className='modal-content'>
					<h2>Booking Confirmation</h2>
					<p>You have booked a room.</p>
					<button className='modal-button' onClick={closeModal}>
						Close
					</button>
				</div>
			</Modal>
		</div>
	);
}

export default HotelEach;
