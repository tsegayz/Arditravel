import axios from "axios";
import { useState, useEffect } from "react";

import { HiChevronLeft } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	
	const [responseMessage, setResponseMessage] = useState("");

	const submit = async (e) => {
	  e.preventDefault();
	  try {
		const response = await axios.post('/api/v1/users/signup', {
		  name,
		  email,
		  password,
		  confirmPassword,
		});
		setResponseMessage(response); // Set the response message
	  } catch (error) {
		console.error(error);
		setResponseMessage("An error occurred"); // Set a generic error message
	  }
	};
	

	return (
		<div className='sign'>
			<header className='header'>
				<a className='back-button-container' href='/signin'>
					<HiChevronLeft className='arrow' />
					<span className='back-text'>Back</span>
				</a>
			</header>
			<div className='content'>
				<div className='center-text'>
					<h4> Welcome to! </h4>
					<h1>
						A<span>rdi travel</span>
					</h1>
				</div>
				<form className='form'>
					<div className='name-input-container'>
						<label className='input-label' htmlFor='name-input' >
							Full Name
						</label>
						<div>
							<input
								id='name-input'
								type='text'
								autoComplete="off"
								placeholder='enter your full name'
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className='email-input-container'>
						<label className='input-label' htmlFor='email-input'>
							Email Address
						</label>
						<div>
							<input
								id='email-input'
								type='email'
								autoComplete="off"
								placeholder='enter your email'
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
								autoComplete="off"
								placeholder='enter your password'
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className='password-input-container'>
						<label className='input-label' htmlFor='password-input'>
							Confirm Password
						</label>
						<div className='password-input-wrapper'>
							<input
								id='conformPassword-input'
								type='password'
								autoComplete="off"
								placeholder='confirm your password'
								onChange={(e) => {
									setConfirmPassword(e.target.value);
								}}
							/>
							<FaLock className='lock-icon' />
						</div>
					</div>
					<button type='submit' onClick={submit}>
						Signup
					</button>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
