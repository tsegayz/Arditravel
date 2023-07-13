import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdTour } from "react-icons/md";

import {
	RiSearch2Line,
	RiFacebookFill,
	RiLinkedinFill,
	RiWifiFill,
} from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Home({ data, explore, activities, footer }) {
	const planSlice = explore.slice(3, 9);
	const trendSlice = activities.filter((item) => item.rating > 4.2);
	const filterExplore = explore.filter((item) => item.review.rating > 4.2);
	const history = useHistory();

	const handleActivityClick = (item) => {
		history.push(`/activity/${item._id}`, { itemData: item });
	};

	const handleDestinationClick = (item) => {
		history.push(`/destination/${item._id}`, { itemData: item });
	};
	// filter method for the search bar
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const filterHandler = (e) => {
		const searchWord = e.target.value;
		const newFilter = data.filter((value) => {
			return value.region.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setFilteredPlaces([]);
		} else {
			setFilteredPlaces(newFilter);
		}
	};

	const handleItemClick = (item) => {
		// Navigate to the location page and pass the selected item's data
		history.push(`/location/${item._id}`, { itemData: item });
	};

	return (
		<div className='home'>
			<div className='background'>
				<div className='search-bar'>
					<input
						className='input-field'
						type='text'
						placeholder='Where to ....'
						onChange={filterHandler}
					/>
					<button className='search-icon'>
						<RiSearch2Line style={{ color: "black", fontSize: "37px" }} />
					</button>
				</div>
			</div>
			<div>
				{filteredPlaces.length !== 0 && (
					<div className='search-results'>
						{filteredPlaces.map((value) => (
							<a
								className='search-item'
								target=''
								key={value._id}
								onClick={() => handleItemClick(value)} // Call the handleItemClick function when the item is clicked
							>
								<div className='region-flag'>
									<img className='flag-image' src={value.image} alt='' />
								</div>
								<div className='result-name'>
									{value.region} <p> {value.zone} </p>
								</div>
								<div className='region-arrow'>
									<FaChevronRight />
								</div>
							</a>
						))}
					</div>
				)}
			</div>

			<div className='trend'>
				<div className='title-container'>
					<h1> Trending activities </h1>
					<p> Explore the beauty of the country Ethiopia </p>
				</div>

				<div className='main-container'>
					<div className='grid-container'>
						{trendSlice.map((item) => (
							<a
								className='grid-item'
								key={item._id}
								onClick={() => handleActivityClick(item)}
							>
								<div className='grid-items'>
									<img className='cagridrd-image' src={item.image} alt='' />
									<div className='grid-item-one'>
										<p className='tour-icon'>
											{" "}
											<MdTour size={24} /> enjoyable activites{" "}
										</p>
										<h3>{item.name}</h3>
										<p>{item.description}</p>
										<div className='rating'>
											{Array.from({ length: 5 }, (_, index) => {
												const starRating = index + 0.5;
												return (
													<span key={index} className='star'>
														{item.rating >= starRating ? "\u2605" : "\u2606"}
													</span>
												);
											})}{" "}
											{item.rating} Likes
										</div>
									</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>

			<div className='popular-places'>
				<h1>Top destinations </h1>
				<div className='popular-descr'>
					"Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel
					mi ut elit tempor
				</div>
				<div className='category-card'>
					<Carousel
						showStatus={false}
						showThumbs={false}
						showArrows={true}
						showIndicators={false}
						infiniteLoop={true}
						swipeable={true}
						emulateTouch={true}
						centerMode={true}
						centerSlidePercentage={16}
						renderArrowPrev={(onClickHandler, hasPrev, label) =>
							hasPrev && (
								<button
									type='button'
									onClick={onClickHandler}
									title={label}
									className='carousel-prev-button'
								>
									<FaChevronLeft />
								</button>
							)
						}
						renderArrowNext={(onClickHandler, hasNext, label) =>
							hasNext && (
								<button
									type='button'
									onClick={onClickHandler}
									title={label}
									className='carousel-next-button'
								>
									<FaChevronRight />
								</button>
							)
						}
					>
						{filterExplore.map((value) => (
							<a
								className='card-items'
								key={value._id}
								onClick={() => handleDestinationClick(value)}
							>
								<img className='card-image' src={value.image} alt='' />
								<div className='card-item-one'>
									<h3>{value.name}</h3>
									<p> Reviews: {value.review.description}</p>
								</div>
							</a>
						))}
					</Carousel>
				</div>
			</div>

			<div className='plan'>
				<h1> Planing your next trip? </h1>
				<p>
					Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel mi
					ut elit tempor aliquam eget eget enim . Proin cursus eleifend pretium.
					Aliquam cursus
				</p>
				<div className='container-grid'>
					{planSlice.map((item, index) => (
						<a
							onClick={() => handleDestinationClick(item)}
							className={`container-item ${
								index < 2 ? "first-row" : "second-row"
							}`}
							key={item._id}
						>
							<div className='overlay'>
								<div className='plan-container'>
									<img className='card-image' src={item.image} />
									<h2 className='card-title'>{item.name}</h2>
								</div>
								<div className='text-overlay'>
									<p className='card-description'>{item.description}</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>

			<footer>
				<div className='logo-bottom'>
					<div className='logo-bottom-one'>
						<h1>
							A<span>rdi travel</span>
						</h1>
						<p> Land of origin, Ethiopia </p>
					</div>
					{footer.map((value, key) => {
						return (
							<div key={value.id}>
								<h6> {value.title} </h6>
								<p> {value.list}</p>
								<p> {value.listT}</p>
								<p> {value.listTh}</p>
								<p> {value.listF}</p>
							</div>
						);
					})}
				</div>
				<div class='line'></div>
				<div class='socials'>
					<ul>
						<li class='social-items'>
							<a href='#in'>
								{" "}
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

export default Home;
