import { useState, useEffect} from 'react';

import './App.css';
import Home from './components/Home';
import Trips from './components/Trips'
import Review from './components/Review'
import SignIn from './components/SignIn'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hotels from './components/Hotels';
import HotelEach from './components/HotelEach';
import Location from './components/Location';
import footerList from './db.json';
import whatNeed from './db4.json';
import hotels from './db6.json';
import eachHotels from './db7.json';
import attractions from './db5.json';
import axios from "axios";

import SignUp from './components/SignUp';

function App() {

  const [locationType, setLocationType] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [location, setLocation] = useState([]);
  const [activity, setActivity] = useState([]);

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

      const response4 = await axios.get('/api/v1/activities');
      const {activities} = response4.data.data;
      setActivity(activities)

      // console.log(activities)
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
              <Trips/>
            </Route>
            <Route exact path='/review'>
              <Review/>
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
