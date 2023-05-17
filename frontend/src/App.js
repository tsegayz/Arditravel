import { useState, useEffect} from 'react';

import './App.css';
import Home from './components/Home';
import Trips from './components/Trips'
import Review from './components/Review'
import SignIn from './components/SignIn'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Places from './db.json'
import Hotels from './components/Hotels';
import HotelEach from './components/HotelEach';
import Location from './components/Location';
import footerList from './db3.json';
import whatNeed from './db4.json';
import hotels from './db6.json';
import eachHotels from './db7.json';
import attractions from './db5.json';

function App() {

  const [backendData, setbackendData] = useState ([{}])

  useEffect (() => {
    fetch("/")
    .then(
      response => response.json()
    )
    .then(
      data => {
        setbackendData( data);
      }
    )
    .catch(error => {
      this.setbackendData({ 
          error: 'Error retrieving data'})
    })
  }, [])
  return (
    <div className="App">
      {/* { console.log("clg")}
      
       {(typeof backendData.users === 'undefined') ? ( 
          <h2> Loading </h2> 
          ): (
              backendData.users.map( (user, i) => (
              <h2 key={i}> {user} </h2>
              ))
        )} */}
      <Router>
        <div className='content'>
          <Switch>
          <Route exact path='/'>
              <NavBar/>
              <Home data={Places} footer={footerList} explore={whatNeed}/>
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
