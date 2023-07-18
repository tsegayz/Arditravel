import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

function SignUp() {
	const history = useHistory();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");

	const submit = async (e) => {
		e.preventDefault();

		// Basic validation
		if (!name || !email || !password || !passwordConfirm) {
			setResponseMessage("Please fill in all the fields");
			return;
		}
		// Check if passwords match
		if (password !== passwordConfirm) {
			setResponseMessage("Password and confirm password do not match!");
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

			const userData = response.data.data.user;
			localStorage.setItem("user", JSON.stringify(userData));

			console.log(userData);
			setResponseMessage(response.data.status);
			setShowModal(true);
		} catch (error) {
			setResponseMessage("An error occurred");
		}
	};

	const closeModal = () => {
		setShowModal(false);
		history.push(`/`); // Redirect to the home page after the modal is closed
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
					<span
						className='error-message'
						style={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
					>
						{responseMessage}
					</span>

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
								value={name}
								onChange={(e) => {
									setName(e.target.value);
									setResponseMessage(""); // Clear error message on input change
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
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setResponseMessage(""); // Clear error message on input change
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
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									setResponseMessage(""); // Clear error message on input change
								}}
							/>
						</div>
					</div>
					<div className='password-input-container'>
						<label className='input-label' htmlFor='passwordConfirm-input'>
							Confirm Password
						</label>
						<div className='password-input-wrapper'>
							<input
								id='passwordConfirm-input'
								type='password'
								autoComplete='off'
								placeholder='confirm your password'
								value={passwordConfirm}
								onChange={(e) => {
									setPasswordConfirm(e.target.value);
									setResponseMessage(""); // Clear error message on input change
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
			<Modal
				isOpen={showModal}
				onRequestClose={closeModal}
				contentLabel='Booking Confirmation'
				className='modal'
				overlayClassName='modal-overlay'
			>
				<div className='modal-content'>
					<h2>Sign up Confirmation</h2>
					<p>You have successfully signed up</p>
					<button className='modal-button' onClick={closeModal}>
						Close
					</button>
				</div>
			</Modal>
		</div>
	);
}

export default SignUp;
