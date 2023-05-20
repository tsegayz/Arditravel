import axios from "axios";
import { useState, useEffect } from "react";

import { HiChevronLeft } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	const submit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${process.env.PUBLIC_URL}/api/v1/users/login`,{
			email,
			password,
		  });
		  console.log(response.data);
		} catch (error) {
		  console.log(error);
		}
	  };
	  
	return (
		<div className='sign'>
			<header className='header'>
				<a className='back-button-container' href='/'>
					<HiChevronLeft className='arrow' />
					<span className='back-text'>Back to Home</span>
				</a>
				<div className='sign-container'>
					<span className='sign-text'>Don't have an account?</span>
					<a href='/signup'>
						<button className='sign-button'>Sign Up</button>
					</a>
				</div>
			</header>
			<div className='content'>
				<div className='center-text'>
					<h4> Welcome to! </h4>
					<h1>
						A<span>rdi travel</span>
					</h1>
				</div>
				<form className='form'>
					<div className='email-input-container'>
						<label className='input-label' htmlFor='email-input'>
							Email Address
						</label>
						<div>
							<input
								id='email-input'
								type='email'
								autocomplete="off"
								placeholder='Enter your email'
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className='password-input-container'>
						<label className='input-label' htmlFor='password-input'>
							Password
						</label>
						<div className='password-input-wrapper'>
							<input
								id='password-input'
								type='password'
								autocomplete="off"
								placeholder='Enter your password'
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
							<FaLock className='lock-icon' />
						</div>
					</div>
					<button type='submit' onClick={submit} >Login</button>
				</form>
			</div>
		</div>
	);
}

export default SignIn;
