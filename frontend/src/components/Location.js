import { useState } from "react";
import { FiBookmark, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { MdFavorite, MdEmail } from "react-icons/md";

import img from "../assets/hotelo.png";

function City({ items }) {
	const [fav, setFav] = useState(5);
	const [isFav, setIsFav] = useState(false);

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
							<a> Restaurants</a>
						</li>
						<li className='hotel-nav'>
							<a> Hotels </a>
						</li>
						<li className='hotel-nav'>
							<a> Activities </a>
						</li>
					</ul>
				</nav>

				<div className='city-homepage'>
					<div className='city-name'>
						<div className='city-name-descr'>
							<h2> Addis Ababa </h2>
							<p> Splendid weekend on splendid city </p>
						</div>
					</div>

					<div className='city-card-list-container'>
						<div className='city-card-list'>
							<ul className='city-card-list-content'>
								{items.map((item) => (
									<li className='city-card-item'>
										<div className='city-card'>
											<div className='city-card-attraction'>
												<div className='city-card-icon'>
													<a>
														<FiBookmark />
													</a>
												</div>

												<div className='city-card-detail'>
													<ul className='city-attraction'>
														<li className='city-attraction-item'>
															{" "}
															<h2> {item.name}</h2>{" "}
														</li>
														<li className='city-attraction-item'>
															<div className='city-attraction-icon'>
																<HiLocationMarker
																	style={{ fontSize: "23px" }}
																/>
																<p> {item.location} </p>
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
					<h3> Addis Ababa</h3>
				</div>
				<p>
					Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi
					ut elit tempor aliquam eget eget enim. Proin cursus eleifend pretium.
					Aliquam cursus. Lorem dolor sit amet, consectetur adipiscing elit.
					Pellentesque vel mi ut elit tempor aliquam eget eget enim. Proin
					cursus eleifend pretium. Aliquam cursus "Lorem dolor sit amet,
					consectetur adipiscing elit. Pellentesque vel mi ut velit tempor
					aliquam eget eget enim. Proin cursus eleifend pretium. Aliquam cursus
				</p>
			</div>

			<div className='city-things-container'>
				<h2> Things to do </h2>
				<div className='city-things-list'>
					<ul className='city-things-content'>
						{items.map((item) => (
							<li>
								<div className='city-things-card'>
									<button>
										<MdFavorite style={{ color: "rgb(247, 23, 2)" }} />
									</button>
									<ul className='city-things-desc'>
										<li className='city-things-item'> {item.name} </li>
										<li className='city-things-item'>
											{item.location}
											<HiLocationMarker
												style={{ fontSize: "20px", color: "grey" }}
											/>
										</li>
										<li className='city-things-item'> {item.review} </li>
									</ul>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='city-hotels-container'>
				<h2> Hotels </h2>
				<h3> home of luxury </h3>
				<div className='city-hotels-list'>
					<ul className='city-hotels-content'>
						{items.map((item) => (
							<li>
								<div className='city-hotels-card'>
									<button>
										<MdFavorite style={{ color: "rgb(247, 23, 2)" }} />
									</button>
									<ul className='city-hotels-desc'>
										<li className='city-hotels-item'> {item.name} </li>
										<li className='city-hotels-item'>
											{item.location}
											<HiLocationMarker
												style={{ fontSize: "20px", color: "grey" }}
											/>
										</li>
										<li className='city-hotels-item'> {item.review} </li>
									</ul>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='city-hotels-container'>
				<h2> Resturants </h2>
				<div className='city-hotels-list'>
					<ul className='city-hotels-content'>
						{items.map((item) => (
							<li>
								<div className='city-hotels-card'>
									<button>
										<MdFavorite style={{ color: "rgb(247, 23, 2)" }} />
									</button>
									<ul className='city-hotels-desc'>
										<li className='city-hotels-item'> {item.name} </li>
										<li className='city-hotels-item'>
											{" "}
											{item.location}
											<HiLocationMarker
												style={{ fontSize: "20px", color: "grey" }}
											/>
										</li>
										<li className='city-hotels-item'> {item.review} </li>
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

export default City;

// <div className="city-homepage">
// <div className='city-name'>
//     <div className='city-name-descr'>
//         <h2> Addis Ababa  </h2>
//         <p> Splended weekend on splended city </p>
//     </div>
// </div>

// <div className="city-card-list">
//     <ul className="city-card-list-content">
//         <li className="city-card-item">
//             <div className="city-card">
//                 <div  className='city-card-attraction'>
//                     <div className='city-card-icon' >
//                         <a> <FiBookmark/> </a>
//                     </div>

//                     <div className='city-card-detail'>
//                         <ul className='city-attraction'>
//                             <li className='city-attraction-item'> Attraction name </li>
//                             <li className='city-attraction-item'>
//                                 <div className="city-attraction-icon">
//                                     <HiLocationMarker style={{fontSize:'27px'}}/>
//                                     <p> Around Bole </p>
//                                 </div>
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </li>

//         <li className="city-card-item">
//             <div className="city-card">
//                 <div  className='city-card-attraction'>
//                     <div className='city-card-icon' >
//                         <a> <FiBookmark/> </a>
//                     </div>

//                     <div className='city-card-detail'>
//                         <ul className='city-attraction'>
//                             <li className='city-attraction-item'> Attraction name </li>
//                             <li className='city-attraction-item'>
//                                 <div className="city-attraction-icon">
//                                     <HiLocationMarker style={{fontSize:'27px'}}/>
//                                     <p> Around Bole </p>
//                                 </div>
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </li>

//     </ul>
// </div>

// </div>
// .city-homepage{
// display: flex;
// justify-content: space-between;
// }
// .city-name {
// color: white;
// display: flex;
// justify-content: flex-start;
// }

// .city-name-descr {
// margin-top: 50px;
// margin-left: 200px;
// }
// .city-name-descr h2{
// font-family: 'Pacifico', cursive;
// margin-bottom: 0px;
// font-size: 100px;
// }
// .city-name-descr p{
// font-size: 40px;
// margin-top: 0px;
// margin-left: 30px;
// font-family: 'Pacifico', cursive;
// }

// .city-card-list-content{
// display: flex;
// justify-content: space-around;
// }

// .city-card-list-content .city-card-item{
// padding-right: 60px;
// }
// .city-card-attraction{
// background-image: url('./assets/addis2.jpg');
// background-repeat: no-repeat;
// background-size: cover;
// background-color: #ccccccd2;
// margin-top:5em;
// width: 19em;
// height: 33em;
// color: white;
// border-radius: 30px;
// border: 2px rgba(255, 255, 255, 0.507) solid;
// padding: 20px 25px 0px 0px;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// }

// .city-card-attraction .city-card-icon{
// font-size: 38px;
// margin-left: 6.5em;
// }

// .city-card-attraction .city-attraction{
// list-style: none;
// font-size: 23px;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: start;
// }
// .city-attraction .city-attraction-icon{
// display: flex;
// align-items: center;
// font-size: 17px;
// }
// .card-arrows{
// display: flex;
// justify-content: space-around;
// padding: 6px 180px;
// margin-left:28em;
// color: white;
// font-size: 40px;
// } the above jsx has the above css but i want u to make the  city card list items a horizontally scrolable on the touch of the left and right buttons when the button is clicked one card should look standing out of the others while the others are shown at the background of the one popping out but at the same time the cards should be hidden if there is an overflow from the screen
