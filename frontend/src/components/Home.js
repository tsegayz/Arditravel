import { RiSearch2Line, RiHotelBedFill, RiCalendarTodoFill, RiCarFill, RiFacebookFill, RiLinkedinFill, RiWifiFill} from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { GiModernCity } from "react-icons/gi";
import { useState } from "react";
import { MdTour } from "react-icons/md";
import locations from "../db2.json"
import image from '../assets/arba.jpg';


function Home({data, footer, explore}) {

  const catagory = [ 'All', 'Nature', 'Forest', 'Man-made', 'Villages', 'Animals'];
  const needs = [
    { title: 'City', link: '/city' },
    { title: 'Hotels', link: '/hotels' },
    { title: 'Things to do', link: '/things-to-do' },
    { title: 'Car Rental', link: '/car-rental' },
    { title: 'Tour Guide', link: '/tour-guide' },
  ];
  const [filteredPlaces, setfilteredPlaces] = useState ( [] );

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
        <div>
        <ul className="activity-items">
          {needs.map((need) => (
            <li key={need.title}>
              <a href={need.link}>
                <span className="icons">
                  {need.title === 'City' && <GiModernCity />}
                  {need.title === 'Hotels' && <RiHotelBedFill />}
                  {need.title === 'Things to do' && <RiCalendarTodoFill />}
                  {need.title === 'Car Rental' && <RiCarFill />}
                  {need.title === 'Tour Guide' && <MdTour />}
                </span>
                {need.title}
              </a>
            </li>
          ))}
        </ul>
        </div>

        <div className="container-grid">
          {explore.map((item) => (
            <div key={item.id} className={`container item${item.id}`}>
              <div className="overlay">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

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
                <img src={location.image} alt=""/>
                <div>
                <h2>{location.city}</h2>
                <p>
                  {location.location}{" "}
                  <span role="img" aria-label="location-marker">
                    <HiLocationMarker />
                  </span>
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <footer>
        <div className="logo-bottom">
          <div className="logo-bottom-one">
              <h1> Ardi</h1>
              <p> Land of origin, Ethiopia </p>
          </div>
            {
              footer.map( (value, key) => {
                return(
                  <div key={value.id}> 
                    <h6> {value.title} </h6>
                    <p> {value.list}</p>
                    <p> {value.listT}</p>
                    <p> {value.listTh}</p>
                    <p> {value.listF}</p>
                  </div>
                );                
              })
            }
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
