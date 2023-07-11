import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { FaLock } from "react-icons/fa";

function SignIn() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");
	const [error, setError] = useState("");

	const submit = async (e) => {
		e.preventDefault();

		// Clear previous error messages
		setError("");
		setResponseMessage("");

		// Basic validation
		if (!email || !password) {
			setError("Please fill in all the fields");
			return;
		}

		try {
			const response = await axios.post(
				"http://localhost:5000/api/v1/users/login",
				{
					email,
					password,
				}
			);
			setResponseMessage(response.data);

			localStorage.setItem("user_id", response.data.user._id);
			localStorage.setItem("token", response.data.token);
			setShowModal(true);
		} catch (error) {
			if (error.response && error.response.status === 401) {
				// Unauthorized: Incorrect username or password
				setError("Incorrect username or password!");
			} else {
				// Other error
				console.log(error);
				setError("An error occurred");
			}
		}
	};

	const closeModal = () => {
		setShowModal(false);
		history.push(`/`); // Redirect to the home page after the modal is closed
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
					<span
						className='error-message'
						style={{ color: "white", fontSize: "14px", marginBottom: "20px", fontSize: '20px' }}
					>
						{error}
					</span>

					<div className='email-input-container'>
						<label className='input-label' htmlFor='email-input'>
							Email Address
						</label>
						<div>
							<input
								id='email-input'
								type='email'
								autoComplete='off'
								placeholder='Enter your email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setError(""); // Clear error on input change
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
								placeholder='Enter your password'
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
									setError(""); // Clear error on input change
								}}
							/>
							<FaLock className='lock-icon' />
						</div>
					</div>
					<button type='submit' onClick={submit}>
						Login
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
					<h2>Log in Confirmation</h2>
					<p>You have successfully logged in</p>
					<button className='modal-button' onClick={closeModal}>
						Close
					</button>
				</div>
			</Modal>
		</div>
	);
}

export default SignIn;
