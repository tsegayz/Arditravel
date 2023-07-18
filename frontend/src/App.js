import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Trips from "./components/Trips";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Hotels from "./components/Hotels";
import HotelEach from "./components/HotelEach";
import Location from "./components/Location";
import Restaurant from "./components/Restaurant";

import footerList from "./db.json";
import Profile from "./components/Profile";
import Activity from "./components/Activity";
import Destination from "./components/Destination";
import Dashboard from "./components/Dashboard";

function App() {
	const [locationType, setLocationType] = useState([]);
	const [hotel, setHotel] = useState([]);
	const [location, setLocation] = useState([]);
	const [activity, setActivity] = useState([]);
	const [restaurant, setRestaurant] = useState([]);
	const [meal, setMeal] = useState([]);
	const [hotelRoom, setHotelRoom] = useState([]);
	const [travel, setTravel] = useState([]);
	const [tourGuide, setTourGuide] = useState([]);
	const [user, setUser] = useState([]);
	const [roomBooking, setRoomBooking] = useState([]);
	const [restBooking, setRestBooking] = useState([]);
	
	
	

	// Fetching data from the database
	const fetchData = async () => {
		try {
			const response = await axios.get("/api/v1/locationtype");
			const { locationTypes } = response.data.data;
			setLocationType(locationTypes);

			const response2 = await axios.get("/api/v1/locations");
			const { locations } = response2.data.data;
			setLocation(locations);

			const response3 = await axios.get("/api/v1/hotels");
			const { hotels } = response3.data.data;
			setHotel(hotels);

			const response4 = await axios.get("/api/v1/hotelRoom");
			const { hotelRooms } = response4.data.data;
			setHotelRoom(hotelRooms);

			const response5 = await axios.get("/api/v1/activities");
			const { activities } = response5.data.data;
			setActivity(activities);

			const response6 = await axios.get("/api/v1/restaurants");
			const { restaurants } = response6.data.data;
			setRestaurant(restaurants);

			const response7 = await axios.get("/api/v1/travel");
			const { travels } = response7.data.data;
			setTravel(travels);

			const response8 = await axios.get("/api/v1/tourGuides");
			const { tourGuides } = response8.data.data;
			setTourGuide(tourGuides);

			const response12 = await axios.get("/api/v1/meals/");
			const { meals } = response12.data.data;
			setMeal(meals);

			const response13 = await axios.get("/api/v1/users/");
			const { users } = response13.data.data;
			setUser( users);

			const response14 = await axios.get("/api/v1/hotelBooking");
			const { roomBookings } = response14.data.data;
			setRoomBooking(roomBookings);

			const response15 = await axios.get("/api/v1/restaurantBooking");
			const { restBookings } = response15.data.data;
			setRestBooking(restBookings);

			// console.log(users)
		} catch (error) {
			console.error("Error fetching location types:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='App'>
			<Router>
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<NavBar />
							<Home
								data={locationType}
								explore={location}
								activities={activity}
								footer={footerList}
							/>
						</Route>
						<Route exact path='/location/:itemId'>
							<Location
								locations={location}
								activities={activity}
								restaurants={restaurant}
								hotels={hotel}
							/>
						</Route>
						<Route exact path='/trips'>
							<Trips
								data={locationType}
								hotels={hotel}
								hotelRooms={hotelRoom}
								restaurants={restaurant}
								travels={travel}
								tourGuides={tourGuide}
							/>
						</Route>
						<Route exact path='/signin'>
							<SignIn />
						</Route>
						<Route exact path='/signup'>
							<SignUp />
						</Route>
						<Route exact path={"/profile"}>
							<Profile />
						</Route>
						<Route exact path='/hotels'>
							<Hotels hotels={hotel} hotelRooms={hotelRoom} />
						</Route>
						<Route exact path='/eachhotel/:itemId'>
							<HotelEach hotelRooms={hotelRoom} />
						</Route>
						<Route exact path='/restaurant/:itemId'>
							<Restaurant restaurants={restaurant} meals={meal} />
						</Route>

						<Route exact path={"/activity/:itemId"}>
							<Activity
								locations={location}
								activities={activity}
								footer={footerList}
							/>
						</Route>
						<Route exact path={"/destination/:itemId"}>
							<Destination data={locationType} />
						</Route>
						<Route exact path={"/dashboard"}>
							<Dashboard
								locations={location}
								activities={activity}
								hotels={hotel}
								hotelRooms={hotelRoom}
								restaurants={restaurant}
								meals={meal}
								travels={travel}
								guides={tourGuide}
								users={user}
								roomBookings={roomBooking}
								restBookings={restBooking}
							/>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
