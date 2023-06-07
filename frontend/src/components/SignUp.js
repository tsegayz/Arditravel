import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { HiChevronLeft } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

function SignUp() {
	const history = useHistory();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setpasswordConfirm] = useState("");

	const [responseMessage, setResponseMessage] = useState("");

	const submit = async (e) => {
		e.preventDefault();

		// Basic validation
		if (!name || !email || !password || !passwordConfirm) {
			setResponseMessage("Please fill in all the fields");
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:5000/api/v1/users/signup",
				{
					name,
					email,
					password,
					passwordConfirm,
				}
			);

			setResponseMessage(response.data);
			alert("You have signed up");
			history.push("/"); // Redirect to the home page after successful signup
		} catch (error) {
			console.log(error);
			setResponseMessage("An error occurred");
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
						<label className='input-label' htmlFor='name-input'>
							Full Name
						</label>
						<div>
							<input
								id='name-input'
								type='text'
								autoComplete='off'
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
								autoComplete='off'
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
								autoComplete='off'
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
								id='passwordConfirm-input' // Make sure the id matches
								type='password'
								autoComplete='off'
								placeholder='confirm your password'
								onChange={(e) => {
									setpasswordConfirm(e.target.value); // Make sure this is correctly assigned
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
