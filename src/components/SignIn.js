import React, { useState } from "react";
import demoImage from "../assets/log2.jpg";
import {BsPersonCircle} from "react-icons/bs";
import {HiLockClosed} from "react-icons/hi";
import {MdOutlineAlternateEmail} from "react-icons/md";

function SignIn() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <div className="signin">
      <div className="left-container">
        <div className="image-container">
          <img src={demoImage} alt="demo" />
          <div className="buttons-container">
            <div 
              className="login-btn"
              onClick={handleLoginClick}
              style={{ backgroundColor: showLogin ? "#fff" : "transparent", color: showLogin ? "black" : "#fff"}}>
              <span>Login</span>
            </div>
            <div
              className="signup-btn"
              onClick={handleSignupClick}
              style={{ backgroundColor: showSignup ? "#fff" : "transparent", color: showSignup ? "black" : "#fff"}}>
              <span>Sign Up</span>
          </div>
          </div>
        </div>
      </div>
      <div className="right-container" id="content">
        {showLogin && (
          <div>
            <h1>Login</h1>
            <form>
              <div className="input">
                <BsPersonCircle/>
                <input placeholder="Username" type="text" id="username" name="username"/>
              </div>
              <br />
              <div className="input">
                <HiLockClosed/>
                <input placeholder="Password" type="password" id="password" name="password" />
              </div>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        )}
        {showSignup && (
          <div>
            <h1>Signup</h1>
            <form>
              <div className="input">
                <BsPersonCircle/>
                <input placeholder="Username" type="text" id="username" name="username"/>
              </div>
              <br/>
              <div className="input">
                <MdOutlineAlternateEmail/>
                <input placeholder="Email" type="email" id="email" name="email" />
              </div>
              <br />
              <div className="input">
                <HiLockClosed/>
                <input placeholder="Password" type="password" id="password" name="password" />
              </div>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        )}
        {!showLogin && !showSignup && (
          <div className="welcome">
            <h1>Welcome to Ardi travel </h1>
            <p>Please click on Login or Signup to continue.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;
