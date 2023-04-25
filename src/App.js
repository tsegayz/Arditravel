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
import footerList from './db3.json';
import whatNeed from './db4.json';
import hotels from './db6.json';
import eachHotels from './db7.json';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='content'>
          <Switch>
          <Route exact path='/'>
              <NavBar/>
              <Home data={Places} footer={footerList} explore={whatNeed}/>
            </Route>
            <Route exact path='/city'>
              <City/>
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
