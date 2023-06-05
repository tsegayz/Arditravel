import { useState } from "react";
import {
	RiSearch2Line,
	RiFacebookFill,
	RiLinkedinFill,
	RiWifiFill,
} from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useHistory } from "react-router-dom";

function Home({ data, explore, popular, footer }) {
	const popularSlice = popular.slice(0, 4);
	const exploreSlice = explore.slice(9, 15);

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

	const history = useHistory();

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
						<RiSearch2Line
							style={{ color: "rgb(247, 235, 221)", fontSize: "37px" }}
						/>
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
								key={value.id}
								onClick={() => handleItemClick(value)} // Call the handleItemClick function when the item is clicked
							>
								{value.region}, {value.zone}
							</a>
						))}
					</div>
				)}
			</div>

			<div className='activity'>
				<h1> Planing your next trip? </h1>
				<p>
					"Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel
					mi ut elit tempor aliquam eget eget enim . Proin cursus eleifend
					pretium. Aliquam cursus " "Lorem dolor sit amet, consectetur
					adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget
					enim . Proin cursus eleifend pretium. Aliquam cursus " "Lorem dolor
					sit amet, consectetur adipiscing elit. Pellentesque vel mi ut elit
					tempor aliquam eget eget enim . Proin cursus eleifend pretium. Aliquam
					cursus "
				</p>
				<div className='container-grid'>
					{exploreSlice.map((value, index) => {
						const itemClassName = `item${index + 1}`; // Generate the CSS class name based on the index
						return (
							<div key={value._id} className={`container ${itemClassName}`}>
								<div className='overlay'>
									<img src={value.image} alt='Image' />
									<div className='text-overlay'>
										<h2>{value.name}</h2>
										<p>{value.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='popular-places'>
				<h1>Most popular places to visit</h1>
				<div className='popular-descr'>
					"Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel
					mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend
					pretium. Aliquam cursus " "Lorem dolor sit amet, consectetur
					adipiscing elit. Pellentesque vel mi ut elit tempor aliquam eget eget
					enim. Proin cursus eleifend pretium. Aliquam cursus " Pellentesque vel
					mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend
					pretium. Aliquam cursus "
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
						centerSlidePercentage={20}
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
						{explore.map((value) => (
							<div className='card-items' key={value._id}>
								<img className='card-image' src={value.image} alt='' />
								<div className='card-item-one'>
									<h2>{value.name}</h2>
									<p>{value.description}</p>
								</div>
							</div>
						))}
					</Carousel>
				</div>
			</div>
			<div className='explore'>
				<div className='title-container'>
					<h1>Explore the beauty of Ethiopia</h1>
					<p>
						"Lorem dolor sit amet, consectetur adipiscing elit. Pellentesque vel
						mi ut elit tempor aliquam eget eget enim. Proin cursus eleifend
						pretium. Aliquam cursus " Aliquam cursus " Aliquam
					</p>
				</div>

				<div className='main-container'>
					{popularSlice.map((item) => (
						<div className='container' key={item._id}>
							<div className='box box1'></div>
							<div className='box box2'>
								<h2>{item.name}</h2>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<footer>
				<div className='logo-bottom'>
					<div className='logo-bottom-one'>
						<h1>
							{" "}
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
