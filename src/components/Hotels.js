import { HiLocationMarker } from "react-icons/hi";
import { RiFacebookFill, RiLinkedinFill, RiInstagramFill} from "react-icons/ri";
import { SiTwitter} from "react-icons/si";
import { MdFavorite,MdEmail } from "react-icons/md";

function Hotels() {

  const hotels = [ 'All', 'Nature', 'Forest', 'Man-made', 'Villages', 'Animals']

  return (
    <div className='hotels'>

        <nav className='hotels-nav'>
            <h1> Ardi Travel </h1>
            <ul className='hotel-list'>
                <li className='hotel-nav'> <a> Contact us</a> </li>
                <li className='hotel-nav'> <a> Room </a>  </li>
                <li className='hotel-nav'> <a> Gallery </a></li>
                <button> Book Now </button>
            </ul>
        </nav>
        
        <div className='hotel-descr'>
            <div className='hotel-descr-item'>
                <h6> All your needs in one place  </h6>
                <p> One of the top hotel in the city </p>
            </div>
            
        </div>

        <div >
            <a href=''>

            </a>
            <ul className='hotel-home'>
                <li className='hotel-home-list'> <a> Meals </a>  </li>
                <li className='hotel-home-list'> <a> Booking </a>  </li>
                <li className='hotel-home-list'> <a> Services </a>  </li>
            </ul>
        </div>
        <form className='hotel-form'>
            <ul className='hotel-book-form'>
                <li className='hotel-book'> 
                    <p> Check-in date </p>
                    <input placeholder='01/01/2000' />
                </li>
                <li className='hotel-book'> 
                    <p> Check-out date </p>
                    <input placeholder='01/01/2000'/>
                </li>
                <li className='hotel-book'> 
                    <button> Book Now </button>
                </li>
            </ul>
        </form>

        <div className='hotel-card' >
            <ul className='hotel-card-list'>
                <li className='hotel-item'> <button> <MdFavorite style={{color:"rgb(247, 235, 221)"}} /> </button> </li>
                <div className='hotel-name'>
                    <li className='hotel-item'> Inter continental Hotel </li>
                    <li className='hotel-item'> 
                        <div className='hotel-row'>
                            <p> Addis Ababa </p>  
                            <HiLocationMarker style={{fontSize:'33px'}}/>      
                        </div>
                    </li>
                </div>
                <div className='hotel-hover'>                    
                    <li >  <button> Details </button>  </li>
                    <div className='hotel-hover-item'> 
                        <li > Room </li>
                        <li > Rating </li>
                        <li > Room No </li>
                    </div>
                </div>                
            </ul>
        </div>

        <div className='hotel-card' >
            <ul className='hotel-card-list'>
                <li className='hotel-item'> <button> <MdFavorite style={{color:"rgb(247, 235, 221)"}} /> </button> </li>
                <div className='hotel-name'>
                    <li className='hotel-item'> Inter continental Hotel </li>
                    <li className='hotel-item'> 
                        <div className='hotel-row'>
                            <p> Addis Ababa </p>  
                            <HiLocationMarker style={{fontSize:'33px'}}/>      
                        </div>
                    </li>
                </div>
                <div className='hotel-hover'>                    
                    <li >  <button> Details </button>  </li>
                    <div className='hotel-hover-item'> 
                        <li > Room </li>
                        <li > Rating </li>
                        <li > Room No </li>
                    </div>
                </div>                
            </ul>
        </div>


        <div className='hotel-card' >
            <ul className='hotel-card-list'>
                <li className='hotel-item'> <button> <MdFavorite style={{color:"rgb(247, 235, 221)"}} /> </button> </li>
                <div className='hotel-name'>
                    <li className='hotel-item'> Inter continental Hotel </li>
                    <li className='hotel-item'> 
                        <div className='hotel-row'>
                            <p> Addis Ababa </p>  
                            <HiLocationMarker style={{fontSize:'33px'}}/>      
                        </div>
                    </li>
                </div>
                <div className='hotel-hover'>                    
                    <li >  <button> Details </button>  </li>
                    <div className='hotel-hover-item'> 
                        <li > Room </li>
                        <li > Rating </li>
                        <li > Room No </li>
                    </div>
                </div>                
            </ul>
        </div>

        <div className='hotel-card' >
            <ul className='hotel-card-list'>
                <li className='hotel-item'> <button> <MdFavorite style={{color:"rgb(247, 235, 221)"}} /> </button> </li>
                <div className='hotel-name'>
                    <li className='hotel-item'> Inter continental Hotel </li>
                    <li className='hotel-item'> 
                        <div className='hotel-row'>
                            <p> Addis Ababa </p>  
                            <HiLocationMarker style={{fontSize:'33px'}}/>      
                        </div>
                    </li>
                </div>
                <div className='hotel-hover'>                    
                    <li >  <button> Details </button>  </li>
                    <div className='hotel-hover-item'> 
                        <li > Room </li>
                        <li > Rating </li>
                        <li > Room No </li>
                    </div>
                </div>                
            </ul>
        </div>

        <footer className='hotels-footer'>
            <div className='hotels-footer-one'>
                <h2> Welcome Home</h2>
                <p className='footer-title'> All your need </p>
                <div >
                    <ul className='footer-nav'>
                        <li className='footer-nav-list'> <a> Meals </a>  </li>
                        <li className='footer-nav-list'> <a> Booking </a>  </li>
                        <li className='footer-nav-list'> <a> Services </a>  </li>
                        <li className='footer-nav-list'> <a> Booking </a>  </li>
                        <li className='footer-nav-list'> <a> Services </a>  </li>
                    </ul>                    
                </div>
                <div>
                    <ul className='footer-nav-socials'>
                        <li class="hotel-social"><a href="#in"><i> <RiFacebookFill style={{color:"rgb(32, 32, 73)"}}/> </i>  </a></li>
                        <li class="hotel-social"><a href="#in"><SiTwitter style={{color:"rgb(32, 32, 73)"}} /></a></li> 
                        <li class="hotel-social"><a href="#in"><RiLinkedinFill style={{color:"rgb(32, 32, 73)"}} /></a></li>
                        <li class="hotel-social"><a href="#in"><RiInstagramFill style={{color:"rgb(32, 32, 73)"}} /></a></li>
                        <li class="hotel-social"><a href="#in"><MdEmail style={{color:"rgb(32, 32, 73)"}} /></a></li>
                    </ul>
                </div>
                <div class="hotel-container">
                    <p class="footer-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam
                    </p>
                </div>

            </div>
        </footer>
      
    </div>
  )
}

export default Hotels
