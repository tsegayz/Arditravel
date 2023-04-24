
function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1> Ardi </h1>
      </div>
      <div >
        <ul className="menu">
            <li><a href="/"> Home </a></li>
            <li><a href="/trips"> Trips </a></li>
            <li><a href="/review"> Review </a></li>
            <li><a href="/signin"> <span> Signin  </span></a></li>
        </ul>
      </div>
  </div>
  )
}

export default NavBar
