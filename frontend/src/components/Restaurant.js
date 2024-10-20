import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

import image from "../assets/restaurantback.jpg";

function Restaurants({ meals }) {
	const location = useLocation();
	const history = useHistory();
	const [checkin, setCheckin] = useState("");
	const [checkout, setCheckout] = useState("");
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [phonenumber, setPhonenumber] = useState("");

	const [responseMessage, setResponseMessage] = useState("");
	const [showModal, setShowModal] = useState(false);
	const { itemData } = location.state;
	const { _id: restaurant_id } = itemData;

	const mealsData = meals.filter(
		(item) => item.restaurant_id === restaurant_id
	);

	const submit = async (e) => {
		e.preventDefault();

		// Basic validation
		if (!checkin || !checkout || !name || !date || !phonenumber) {
			setResponseMessage("Please fill in all the fields");
			return;
		}
		// console.log(location.state.itemData);
		try {
			const user_id = localStorage.getItem("user_id");
			const token = localStorage.getItem("token"); // Retrieve the token from local storage

			// console.log(user_id);
			// const restaurant_id = location.state.itemData._id; // Assuming there's only one room available for the specified criteria

			const axiosConfig = {
				headers: {
					Authorization: `Bearer ${token}`, // Include the token in the Authorization header
				},
			};

			const response = await axios.post(
				"http://localhost:5000/api/v1/restaurantBooking",
				{
					restaurant_id: location.state.itemData._id,
					user_id: user_id,
					name: name,
					date: date,
					phonenumber,
					checkin: checkin,
					checkout: checkout,
				},
				axiosConfig // Pass the axiosConfig object as the third parameter
			);
			console.log(response);

			setResponseMessage(response.data);
			setShowModal(true);
		} catch (error) {
			console.log(error);
			setResponseMessage("An error occurred");
		}
	};

	const closeModal = () => {
		setShowModal(false);
		history.push(`/trips`); // Redirect to the home page after the modal is closed
	};

	const daysOfWeek = [
		{ day: "Monday", hours: "Closed" },
		{ day: "Tuesday", hours: "10 AM - 11 PM" },
		{ day: "Wednesday", hours: "10 AM - 11 PM" },
		{ day: "Thursday", hours: "10 AM - 11 PM" },
		{ day: "Friday", hours: "10 AM - 11 PM" },
		{ day: "Saturday", hours: "10 AM - 11 PM" },
		{ day: "Sunday", hours: "10 AM - 11 PM" },
	];

	return (
		<div className='restaurants'>
			<nav className='hotels-nav'>
				<h1> Ardi Travel </h1>
				<ul className='hotel-list'>
					<li>
						<a> About us</a>
					</li>
					<li>
						<a> Meals </a>
					</li>
					<button> Reservation </button>
				</ul>
			</nav>
			<div className='restaurant-home'>
				<img src={itemData.image} alt='' className='img-fluid' />
				<div>
					<h2>{itemData.name}</h2>
					<h3>Your number one choices</h3>
				</div>
			</div>

			<div className='restaurant-foods'>
				<div className='restaurant-title' style={{ textAlign: "center" }}>
					<h2> Fresh & Delicious </h2>
					<p>
						"Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel
						milit tempor aliquam eget eget enim. Proin cursus eleifend pretium.
						Aliquam cursus "
					</p>
				</div>

				<div className='restaurant-card-container'>
					<div className='card-scroll-wrapper'>
						{mealsData.map((value, index) => (
							<div key={index} className='restaurant-card'>
								<img
									src={value.image}
									alt={value.name}
									className='card-image'
								/>
								<div className='restaurant-card-content'>
									<h3>{value.name}</h3>
									<p>{value.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='reservation'>
				<div className='reserve-one'>
					<h2> Make a reservation </h2>
					<p>
						"Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel
						mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend
						pretium. Aliquam cursus "
					</p>
					<img
						src={itemData.image}
						alt='Footer Image'
						className='reserve-image'
					/>
				</div>
				<div className='reserve-two'>
					<h2> RESERVATION </h2>
					<p> for futrher support please call </p>
					<p className='number'> +1 (555) 123-4567 </p>
					<div className='input-container one'>
						<label> Date :</label>
						<input
							type='date'
							className='checkin'
							id='date-input'
							autoComplete='off'
							onChange={(e) => {
								setDate(e.target.value);
							}}
						/>
					</div>
					<div className='input-container two'>
						<label className='checkin-label'> Time: Checkin </label>
						<input
							type='time'
							className='checkin'
							id='date-input'
							autoComplete='off'
							onChange={(e) => {
								setCheckin(e.target.value);
							}}
						/>
						<label className='checkout-label'> Checkout:</label>
						<input
							className='checkout'
							id='date-input'
							type='time'
							autoComplete='off'
							onChange={(e) => {
								setCheckout(e.target.value);
							}}
						/>
					</div>
					<div className='input-container one'>
						<label> Name :</label>
						<input
							type='text'
							placeholder='Full Name'
							id='name-input'
							autoComplete='off'
							onChange={(e) => {
								setName(e.target.value); // Update the roomtype state instead of checkout
							}}
						/>
					</div>
					<div className='input-container one'>
						<label> Phone Number :</label>
						<input
							type='text'
							placeholder='+1 (555) 123-4567'
							id='number-input'
							autoComplete='off'
							onChange={(e) => {
								setPhonenumber(e.target.value); // Update the roomtype state instead of checkout
							}}
						/>
					</div>
					<button type='submit' onClick={submit}>
						Book Now
					</button>
				</div>
			</div>

			<div className='restaurant-footer'>
				<div className='image-overlay'>
					<img src={image} alt='Footer Image' className='footer-image' />
					<div className='overlay'></div>
				</div>
				<div className='main-container'>
					<div className='container-one'>
						<div className='container-about'>
							<h3>Know About our restaurant</h3>
							<p>
								"Lorem dolor sit amet, consectetur adipiscing Aliquam cursus
								elit. Pellentesque vel mi ut elit tempor aliquam eget eget enim.
								Proin cursus eleifend pretium."
							</p>
						</div>
						<div className='name'>
							<h2>{itemData.name}</h2>
						</div>
					</div>
					<div className='container-two'>
						<div className='open-hours'>
							<h3>Opening Hours</h3>
							<p>"Lorem dolor sit amet, "Lorem dolor Aliquam cursus "</p>
						</div>
						<div className='weeks'>
							{daysOfWeek.map((value) => (
								<div className='day-hours'>
									<div className='day'>{value.day}</div>
									<div className='hours'>{value.hours}</div>
								</div>
							))}
						</div>
					</div>
					<div className='container-three'>
						<div className='contact-one'>
							<h3>Find us on:</h3>
							<div className='first'>
								<h4>Address</h4>
								<p>dolor sit amet, "Lorem dolor Aliquam cursus</p>
							</div>
							<div className='second'>
								<h4>Phone</h4>
								<p>+1 (555) 123-4567</p>
							</div>
							<div className='third'>
								<h4>Email</h4>
								<p>resto67@gmail.com</p>
							</div>
						</div>
						<div className='contact-two'>
							<h2>Get in Touch</h2>
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
				<div className='footer-links'>
					<ul>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>Reservation</a>
						</li>
						<li>
							<a href='#'>Menu</a>
						</li>
						<li>
							<a href='#'>Blog</a>
						</li>
						<li>
							<a href='#'>Shop</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
					<p className='copyright'>
						Copyright &copy; Web Coding Pro. All Rights Reserved
					</p>
				</div>
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
					<p>You have a reservation under your name.</p>
					<button className='modal-button' onClick={closeModal}>
						Close
					</button>
				</div>
			</Modal>
		</div>
	);
}

export default Restaurants;
