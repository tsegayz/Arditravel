
import { HiLocationMarker } from "react-icons/hi";
import { RiFacebookFill, RiLinkedinFill, RiInstagramFill} from "react-icons/ri";
import { SiTwitter} from "react-icons/si";
import { MdFavorite,MdEmail } from "react-icons/md";
import img from '../assets/hotelo.png';
function HotelEach() {
  return (

    <div className='each-hotel'>
        <nav className='hotels-nav'>
            <h1> Ardi Travel </h1>
            <ul className='hotel-list'>
                <li className='hotel-nav'> <a> Contact us</a> </li>
                <li className='hotel-nav'> <a> Room </a>  </li>
                <li className='hotel-nav'> <a> Gallery </a></li>
            </ul>
        </nav>  
        
        <div className='hotel-descr'>
            <div className='hotel-descr-item'>
                <h4> Intercontinental hotel  </h4>
                <h4> One of the top hotel in the city </h4>
            </div>
        </div>
        <div className='sidebar'>
            <ul className='container-list'>
                <li className='container'>
                    <div className="sidebar-box">
                        <div className="sidebar-img">
                            <img src={img}alt="" className="img-fluid"/>
                        </div>                    
                    </div>
                    <h3> Room type </h3>
                    <p> One line description of Container 1 </p>
                </li>
                <li className='container'>
                    <div className="sidebar-box">
                        <div className="sidebar-img">
                            <img src={img}alt="" className="img-fluid"/>
                        </div>                    
                    </div>
                    <h3> Room type </h3>
                    <p> One line description of Container 1 </p>
                </li>
                <li className='container'>
                    <div className="sidebar-box">
                        <div className="sidebar-img">
                            <img src={img}alt="" className="img-fluid"/>
                        </div>                    
                    </div>
                    <h3> Room type </h3>
                    <p> One line description of Container 1 </p>
                </li>
                
            </ul>
        </div>
        <div>
            <ul className='footer-nav-socials'>
                <li class="hotel-social"><a href="#in"><i> <RiFacebookFill style={{color:"white"}}/> </i>  </a></li>
                <li class="hotel-social"><a href="#in"><SiTwitter style={{color:"white"}} /></a></li> 
                <li class="hotel-social"><a href="#in"><RiLinkedinFill style={{color:"white"}} /></a></li>
            </ul>
        </div>
    </div>
    

  )
}

export default HotelEach
