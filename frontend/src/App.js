import { useState, useEffect} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Trips from './components/Trips'
import TourGuide from './components/TourGuide';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Hotels from './components/Hotels';
import HotelEach from './components/HotelEach';
import Location from './components/Location';


import footerList from './db.json';
import hotels from './db6.json';
import eachHotels from './db7.json';
import attractions from './db5.json';


function App() {

  const [locationType, setLocationType] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [location, setLocation] = useState([]);
  const [activity, setActivity] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [hotelRoom, setHotelRoom] = useState([]);
  
  
  // Fetching data from the database
  const fetchLocationType = async () => {
    try {
      const response = await axios.get('/api/v1/locationtype');
      const { locationTypes } = response.data.data;
      setLocationType(locationTypes);

      const response2 = await axios.get('/api/v1/locations');
      const {locations} = response2.data.data;
      setLocation(locations)

      const response3 = await axios.get('/api/v1/hotels');
      const {hotels} = response3.data.data;
      setHotel(hotels)

      const response4 = await axios.get('/api/v1/hotelRoom');
      const {hotelRooms} = response4.data.data;
      setHotelRoom(hotelRooms);


      const response5 = await axios.get('/api/v1/activities');
      const {activities} = response5.data.data;
      setActivity(activities)

      const response6 = await axios.get('/api/v1/restaurants');
      const {restaurants} = response6.data.data;
      setRestaurant(restaurants)


      // console.log(hotelRooms)
    } catch (error) {
      console.error('Error fetching location types:', error);
    }
  };
  
  useEffect(() => {
    fetchLocationType();
  }, []);
  
  

  return (
    <div className="App">

      <Router>
        <div className='content'>
          <Switch>
          <Route exact path='/'>
              <NavBar/>
              <Home data={locationType} explore={location} popular={activity} footer={footerList}/>
            </Route>
            <Route exact path='/Location'>
              <Location items={attractions}/>
            </Route>
            <Route exact path='/trips'>
              <Trips data={locationType} hotels={hotel} hotelRooms={hotelRoom} restaurants={restaurant} />
            </Route>
            <Route exact path='/tourGuides'>
              <TourGuide/>
            </Route>
            <Route exact path='/signin'>
              <SignIn/>
            </Route>
            <Route exact path='/signup'>
              <SignUp/>
            </Route>
            <Route exact path='/hotels'>
              <Hotels items={hotels}/>
            </Route>
            <Route exact path='/eachhotel'>
              <HotelEach items={eachHotels}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
