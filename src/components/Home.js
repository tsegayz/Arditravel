import { RiSearch2Line, RiHotelBedFill, RiCalendarTodoFill, RiCarFill, RiFacebookFill, RiLinkedinFill, RiWifiFill} from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";
import { MdTour } from "react-icons/md";
import locations from "../db2.json"
function Home({data}) {

  const catagory = [ 'All', 'Nature', 'Forest', 'Man-made', 'Villages', 'Animals']
  const [filteredPlaces, setfilteredPlaces] = useState ( [ ] )

  const filterHandler = (e) => {
    const searchWord = e.target.value
    const newFilter = data.filter( (value) => {
      return value.city.toLowerCase().includes(searchWord.toLowerCase())
    })

    if(searchWord === ""){
      setfilteredPlaces ([]) 
    }
    else{
      setfilteredPlaces (newFilter)
    }
  }

  return (
    <div className="home">
      <div className='background'>
        <div className='search-bar'>
          <input className='input-field' type='text' placeholder='Where to ....' onChange={filterHandler} />
          <button className="search-icon"> <RiSearch2Line style={{color:"rgb(247, 235, 221)", fontSize: '37px'}}/></button>         
        </div>
      </div>  
      <div>
        {
          filteredPlaces.length !== 0 && (
            <div className="search-results">
            {
              filteredPlaces.map( (value, key ) => {
                return ( 
                  <a className="search-item" target=" " href={value.link}> 
                    <p> {value.city} </p>   
                  </a>
                )
              })
            }
          </div>
          ) 
        }
        </div>          

      <div className="activity">
        <h1> What do you need ? </h1>
        <ul className="activity-items">
          <li>  <RiHotelBedFill className="icons" /> <p> Hotels</p>  </li>
          <li> <RiCalendarTodoFill className="icons"/> Things to do  </li>
          <li> <RiCarFill className="icons"/> Car rental </li>
          <li> <MdTour className="icons"/> Tour guide  </li>
        </ul>
      </div>

      <div className="popular-places">
        <h1> Popular places </h1>
        <div className="catagory" >
          { catagory.map( (value, key) => {
            return <p className="catagory-items"> {value} </p>
              }
          )}          
        </div>
        <div className="card-wrapper">
        <div className="category-card">
          {locations.map((location) => (
            <div className="card-items" key={location.city}>
              <img src={location.image} alt="" />
              <h2>{location.city}</h2>
              <p>
                {location.location}{" "}
                <span role="img" aria-label="location-marker">
                  <HiLocationMarker />
                </span>
              </p>
            </div>
          ))}
        </div>
        </div>

      </div>
      <footer>

        <div className="logo-bottom">
          <div className="logo-bottom-one">
            <h1 > Ardi</h1>
            <p> Land of origin, Ethiopia </p>
          </div>
          <div className="logo-bottom-two">
            <h6> About Ardi </h6>
            <p> Press</p>
            <p> Resources and Policies</p>
            <p> Careers</p>
            <p> Contact us</p>
          </div>
          <div className="logo-bottom-three">
            <h6> Explore </h6>
            <p> Write a review</p>
            <p> Join </p>
            <p> Travelers' Choice</p>
            <p> Travel Articles</p>
          </div>
          <div className="logo-bottom-four">
            <h6> Spring Destinations </h6>
            <p> Cherry Blossoms</p>
            <p> Lewis Ginter Botanical Garden </p>
            <p> Tuscany Wine Tours </p>
            <p> Amsterdam Canal Cruises </p>
          </div>
          
        </div>

        <div class="line"></div>

        <div class="socials">
          <ul>
            <li class="social-items"><a href="#in"> <RiFacebookFill/></a></li>
            <li class="social-items"><a href="#in"><SiTwitter/></a></li> 
            <li class="social-items"><a href="#in"><RiLinkedinFill/></a></li>
            <li class="social-items"><a href="#in"><RiWifiFill/></a></li>
            <li class="social-items"><a href="#in"><IoShieldCheckmarkSharp/></a></li>
          </ul>
        </div>
        <div class="center-text">
          Copyright &copy; Web Coding Pro. All Rights Reserved
        </div>
      </footer>
    </div>
  )
}

export default Home
