import image from "../assets/restaurantback.jpg";

function Restaurants({ restaurants, meals }) {
	// function scrollContainer(direction) {
	// 	const container = document.querySelector(".restaurant-card-container");
	// 	const scrollAmount = 300; // Adjust the scroll amount as desired

	// 	container.scrollBy({
	// 		left: direction * scrollAmount,
	// 		behavior: "smooth",
	// 	});
	// }

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
				<img src={image} alt='' className='img-fluid' />
				<div>
					<h2>Restaurante</h2>
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
					{/* <div className='scroll-button-container'>
						<button
							className='scroll-button scroll-left'
							onClick={() => scrollContainer(-1)}
						>
							&lt;
						</button>
					</div> */}
					<div className='card-scroll-wrapper'>
						{meals.map((value, index) => (
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
					{/* <div className='scroll-button-container'>
						<button
							className='scroll-button scroll-right'
							onClick={() => scrollContainer(1)}
						>
							&gt;
						</button>
					</div> */}
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
					<img src={image} alt='Footer Image' className='reserve-image' />
				</div>
				<div className='reserve-two'>
					<h2> RESERVATION </h2>
					<p> for futrher support please call </p>
					<p className="number"> +1 (555) 123-4567 </p>
					<div className='input-container one'>
						<label> Date :</label>
						<input type='text' placeholder='12 Decemner 2022' />
					</div>
					<div className='input-container two'>
						<label> Time :</label>
						<input type='text' placeholder='11:00' />
						<label className="person-label"> Persons :</label>
						<input type='text' placeholder='12'  className="person"/>
					</div>
					<div className='input-container one'>
						<label> Name :</label>
						<input type='text' placeholder='Full Name' />
					</div>
					<div className='input-container one'>
						<label> Phone Number :</label>
						<input type='text' placeholder='+1 (555) 123-4567' />
					</div>
					<button type='submit'> Book Now </button>
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
							<h2>Restaurante</h2>
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
		</div>
	);
}

export default Restaurants;
