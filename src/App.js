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
import City from './components/City';


function App() {
  return (
    <div className="App">
      <Router>
      {/* <NavBar/> */}
      {/* <Hotels/> */}
      {/* <HotelEach/> */}
      <City/>
      {/* <div className='content'>
          <Switch>
          <Route exact path='/'>
              <Home data={Places}  />
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
              <Hotels/>
            </Route>
            <Route exact path='/eachhotel'>
              <HotelEach/>
            </Route>
          </Switch>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
