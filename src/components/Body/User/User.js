import { useEffect, useState } from 'react';
import passwordValidator from 'password-validator';
import { useNavigate } from 'react-router-dom';
import Particles from 'react-tsparticles';
import options from '../../../Utils/particles.json';
import { textCheck, emailCheck, passwordCheck } from '../../../Utils/Validator';
import './User.css';
import party from 'party-js';

const User = () => {

	const navigate = useNavigate();
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [visible, setVisible] = useState({
		'signup': false,
		'login': false
    });
	const [valid, setValid] = useState({
		'password': "",
		'error' : []
	});
	const [tabEnable, setTabEnable] = useState({
		'signup': true,
		'login': false

	});
	const [disableButton, setDisableButton] = useState(false);

	let schema = new passwordValidator();
	schema
		.is().min(8, "Minimum of 8 characters please!")
		.is().max(20, "Maximum of 20 characters please!")
		.has().uppercase(1, "Atleast 1 Uppercase letter please!")
		.has().lowercase(1, "Atleast 1 Lowercase letter please!")
		.has().digits(2, "Atleast 2 digits please!")
		.has().not().spaces(1, "No spaces please!");

	useEffect(() => {
		const navbarNav = document.getElementById("navbarNav");
		if (navbarNav) {
			navbarNav.classList.remove('show');
		}
	},[]);

	const runParty = (tgt) => {
		party.confetti(tgt, {
			count: party.variation.range(20, 40),
		});
    }

	const handleSubmit = (e) => {
		e.preventDefault();
		let flag_u = true;
		let flag_e = true;
		let flag_p = true;
		let flag = false;
		let user, mail, pswd;
		let form = e.target;
		if (form.id === 'SignUp') {
			user = form.childNodes[0].childNodes[0];
			mail = form.childNodes[1].childNodes[0];
			pswd = form.childNodes[2].childNodes[0];
		}
		else {
			mail = form.childNodes[0].childNodes[0];
			pswd = form.childNodes[1].childNodes[0];
		}
		if (user) {
			flag_u = textCheck(user, true,3);
		}
		flag_e = emailCheck(mail, true);
		if (pswd.value === '') {
			pswd.classList.add('is-invalid');
			flag_p = false;
		}
		else {
			let currentStatus = schema.validate(pswd.value, { details: true });
			flag_p = passwordCheck(currentStatus,pswd);
		}
		let submitButton = form.lastElementChild;
		if (flag_u && flag_e && flag_p) {
			runParty(submitButton);
			flag = true;
		}
		if (flag) {
			setDisableButton(true);
			setTimeout(() => {
				navigate('/user/profile');
			}, 2000);
        }
    }

	const handleChange = (e) => {
		
		if (e.target.name === "User Name") {
			textCheck(e.target, true,3);
			setUserName(e.target.value);
		}
		else if (e.target.name === 'email') {
			emailCheck(e.target, true);
			setEmail(e.target.value);
		}
		else if (e.target.name === "password") {
			let currentStatus = schema.validate(e.target.value, { details: true });
			passwordCheck(currentStatus,e.target);
			setValid({
				'password': e.target.value,
				'error': currentStatus
			});
        }
	}

	const toggleSignupLogin = () => {
		let loginElmt = document.querySelector('.login');
		let loginButton = document.getElementById('LoginActivator');
		let signupButton = document.getElementById('SignupActivator');
		if (loginElmt.offsetTop === 670) {
			loginElmt.classList.add('slideup');
			loginButton.classList.remove('scaledown');
			signupButton.classList.add('scaledown');
		}
		else if (loginElmt.offsetTop === 120) {
			loginElmt.classList.remove('slideup');
			loginButton.classList.add('scaledown');
			signupButton.classList.remove('scaledown');
		}
		setTabEnable({
			'signup': !tabEnable['signup'],
			'login': !tabEnable['login']
		});
    }



	return (
		<section id="SignupLogin">
			<Particles id="tsparticles" className = "particles"
				options={options}
				/>
        <div className = "container loginpage pt-5 pb-5">
				<div className="main">
					<div className="signup">
						<button id="SignupActivator" type="button" className="btn headbutton" onClick={toggleSignupLogin}>Sign Up</button>
						<form id="SignUp" noValidate onSubmit={(e) => handleSubmit(e)}>
							<div className="name">
								<input className="form-control" type="text"
									name="User Name" placeholder="User name"
									aria-describedby="validateName" value={userName}
									onChange={(e) => { handleChange(e) }}
									required tabIndex={tabEnable['signup'] ? "" : "-1"} />
								<div id = "validateName" className="valid-feedback">Looks Good!</div>
								<div id = "validateName" className="invalid-feedback">A minimum of 3 characters required!</div>
							</div>
							<div className="email">
								<input className="form-control" type="email"
									name="email" placeholder="Email"
									aria-describedby="validateSignupEmail" value={email}
									onChange={(e) => { handleChange(e) }}
									autoComplete="username" required tabIndex={tabEnable['signup'] ? "" : "-1"} />
								<div id = "validateSignupEmail" className="valid-feedback">Looks Good!</div>
								<div id = "validateSignupEmail" className="invalid-feedback">Please Enter a Valid Email!</div>
							</div>
							<div className="password">
								<input className="form-control" type={visible['signup'] ? 'text' : 'password'}
									name="password" aria-describedby="validateSignupPass"
									placeholder="Password"
									value={valid['password']} onChange={(e) => { handleChange(e) }}
									autoComplete="new-password" required tabIndex={tabEnable['signup'] ? "" : "-1"} />
								<button type="button" className="btn showIcon"
									onClick={() => setVisible({
										'signup': !visible['signup'],
										'login': visible['login']
									})} tabIndex={tabEnable['signup'] ? "" : "-1"}>
									{
										visible['signup'] === true ?
											<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#57B662" className="bi bi-eye" viewBox="0 0 16 16">
												<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
												<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
											</svg>
											:
											<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#CE312C" className="bi bi-eye-slash" viewBox="0 0 16 16">
												<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
												<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
												<path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
											</svg>
									}
								</button>
								
										<div id = "validateSignupPass" className="valid-feedback">Looks Good!</div>
										<div id = "validateSignupPass" className="invalid-feedback">
										{
											valid['error'].length === 0 ?
											<div style={{ textAlign: 'justify' }}>Please Enter Some Password!</div>
											:
												valid['error'].map((warn) => {
													return (
														<div key={valid['error'].indexOf(warn)} style={{ textAlign: 'justify' }}>{warn.message}</div>
													);
												})
											}
										</div>
							</div>
							<button type="submit"
								className="btn btn-success submitbtn"
								tabIndex={tabEnable['signup'] ? "" : "-1"}
								disabled={disableButton}
							>
								{
									disableButton ?
										<>
											<span className="spinner-grow spinner-grow-sm text-info" role="status" aria-hidden="true" />
											<span style={{ marginLeft: "3%"}}>Loading...</span>
										</>
										:
										<>
											Sign Up
										</>
								}
							</button>
						</form>
					</div>

					<div className="login">
						<button id="LoginActivator" type="button" className="btn headbutton scaledown" onClick={ toggleSignupLogin }>Login</button>
						<form id="Login" noValidate onSubmit={(e) => handleSubmit(e)}>
							<div className="name">
								<input className="form-control" type="email"
									name="email" placeholder="Email"
									aria-describedby="validateLoginEmail" value={email}
									onChange={(e) => { handleChange(e) }}
									autoComplete="username" required tabIndex={tabEnable['login'] ? "" : "-1"} />
								<div id="validateLoginEmail" className="valid-feedback">Looks Good!</div>
								<div id="validateLoginEmail" className="invalid-feedback">Please Enter Valid Email!</div>
							</div>
							<div className="password">
								<input className="form-control" type={visible['login'] ? 'text' : 'password'}
									name="password" aria-describedby="validatLoginPass"
									placeholder="Password"
									value={valid['password']} onChange={(e) => { handleChange(e) }}
									autoComplete="current-password" required tabIndex={tabEnable['login'] ? "" : "-1"} />
								<button type="button" className="btn showIcon"
									onClick={() => setVisible({
										'signup': visible['signup'],
										'login': !visible['login']
									})} tabIndex={tabEnable['login'] ? "" : "-1"}>
									{
										visible['login'] === true ?
											<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#57B662" className="bi bi-eye" viewBox="0 0 16 16">
												<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
												<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
											</svg>
											:
											<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#CE312C" className="bi bi-eye-slash" viewBox="0 0 16 16">
												<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
												<path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
												<path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
											</svg>
									}
								</button>

								<div id="validateSignupPass" className="valid-feedback">Looks Good!</div>
								<div id="validateSignupPass" className="invalid-feedback">
									{
										valid['error'].length === 0 ?
											<div style={{ textAlign: 'justify' }}>Please Enter Some Password!</div>
											:
											valid['error'].map((warn) => {
												return (
													<div key={valid['error'].indexOf(warn)} style={{ textAlign: 'justify' }}>{warn.message}</div>
												);
											})
									}
								</div>
							</div>
							<button type="submit"
								className="btn btn-success submitbtn"
								tabIndex={tabEnable["login"] ? "" : "-1"}
								disabled={disableButton}
							>
								{
									disableButton ?
										<>
											<span className="spinner-grow spinner-grow-sm text-info" role="status" aria-hidden="true" />
											<span style={{ marginLeft: "3%" }}>Loading...</span>
										</>
										:
										<>
											Login
										</>
								}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
    );
}

export default User;