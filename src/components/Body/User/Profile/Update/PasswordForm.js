import { useState } from 'react';
import passwordValidator from 'password-validator';
import { passwordCheck } from '../../../../../Utils/Validator';
import party from 'party-js';
import { useNavigate } from 'react-router-dom';

const PasswordForm = ({ userdetails, formid }) => {

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [match, setMatch] = useState({
        'old_new_match': false,
        'new_new_mismatch' : false
    });
    const [Password, setPassword] = useState({
        'old_password': {
            'password': '',
            'visible': false,
            'error': []
        },
        'new_password1': {
            'password': '',
            'visible': false,
            'error': []
        },
        'new_password2': {
            'password': '',
            'visible': false,
            'error': []
        }
    });

    const navigate = useNavigate();

    let schema = new passwordValidator();
    schema
        .is().min(8, "Minimum of 8 characters please!")
        .is().max(20, "Maximum of 20 characters please!")
        .has().uppercase(1, "Atleast 1 Uppercase letter please!")
        .has().lowercase(1, "Atleast 1 Lowercase letter please!")
        .has().digits(2, "Atleast 2 digits please!")
        .has().not().spaces(1, "No spaces please!");

    const runParty = (target) => {
        party.confetti(target, {
            count: party.variation.range(20, 40),
        });
    }

    const showPassword = (id) => {
        const target = document.getElementById(id);
        const name = target.name;
        setPassword({
            ...Password,
            [name]: {
                ...Password[name],
                'visible': !Password[name]['visible']
            }
        });
    }

    const changePasswordHandler = (event) => {
        const target = event.target;
        const { name, value} = target;
        const status = schema.validate(value, { details: true });
        passwordCheck(status, target);
        setPassword({
            ...Password,
            [name]: {
                ...Password[name],
                'password': value,
                'error': status
            }
        });
    }

    const handleSubmitSecondForm = (event) => {
        event.preventDefault();
        const oldpass = document.getElementById("Password");
        const newpass1 = document.getElementById("NewPassword");
        const newpass2 = document.getElementById("NewPassword2");
        let flag = [true, true, true];
        const pass = [oldpass, newpass1, newpass2];
        for (let target of pass) {
            if (target) {
                if (target.value === '' && target.hasAttribute('required')) {
                    target.classList.add('is-invalid');
                    flag[pass.indexOf(target)] = false;
                } else {
                    let status = schema.validate(target.value, { details: true });
                    flag[pass.indexOf(target)] = passwordCheck(status, target);
                }
            }
        }
        if (formid === 1) {
            if (flag[0] && flag[1] && flag[2]) {
                if (oldpass.value === newpass1.value) {
                    setMatch({
                        ...match,
                        'old_new_match': true
                    });
                    flag[0] = false;
                    flag[1] = false;
                } else if (newpass1.value !== newpass2.value) {
                    setMatch({
                        ...match,
                        'new_new_mismatch': true
                    });
                    flag[1] = false;
                    flag[2] = false;
                }
            }
        }
        if (flag[0] && flag[1] && flag[2]) {
            const party_target = document.getElementById("cnfrmPswd");
            runParty(party_target);
            setButtonDisabled(true);
            // code to check the old/current password matches with the actual password
            setTimeout(() => {
                navigate('/user/profile');
            },2000);
        }
    }

    return (
        <form id="PasswordForm" className=" m-3 m-sm-5 formbg p-2 p-sm-4" noValidate
            onSubmit={handleSubmitSecondForm}
        >
            <p className="text-white" style={{ textAlign: 'justify' }}>If you forgot your password please log out and click on the 'Forgot Password' link from the Login Page
                <span className="ps-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3E94D9" className="bi bi-question-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                </span>
            </p>
            <div className="mb-3 row">
                <label htmlFor="staticUserName" className="col-sm-4 col-form-label text-white">User Name</label>
                <div className="col-sm-8 justify-content-center">
                    <input type="text" readOnly className="text-white form-control-plaintext"
                        id="staticUserName" value={userdetails['PrimaryEmail']}
                        autoComplete="username"
                    />
                </div>
            </div>
            <div className="row mb-3 g-3">
                <div className="col-12 form-floating">
                    <input type={Password['old_password']['visible'] ? 'text' : 'password'}
                        className="form-control" id="Password" placeholder={formid === -1 ? "Password" : "Current Password"}
                        name="old_password" aria-describedby="validatepassword"
                        value={Password['old_password']['password']} onChange={changePasswordHandler}
                        autoComplete="current-password" readOnly={ buttonDisabled} required
                    />
                    <label htmlFor="Password">{formid === -1 ? "Password" : "Current Password"}</label>
                    <button type="button" className="btn showIcon"
                        onClick={() => showPassword("Password")}>
                        {
                            Password['old_password']['visible'] ?
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

                    <div id="validatepassword" className="valid-feedback">Looks Good!</div>
                    <div id="validatepassword" className="invalid-feedback">
                        {
                            match['old_new_match'] ?
                                <div style={{ textAlign: 'justify' }}>Your old password and new Password can't be same.</div>
                                :
                                Password['old_password']['error'].length === 0 ?
                                    <div style={{ textAlign: 'justify' }}>Please Enter Some Password!</div>
                                    :
                                    Password['old_password']['error'].map((warn) => {
                                        return (
                                            <div key={Password['old_password']['error'].indexOf(warn)} style={{ textAlign: 'justify' }}>{warn.message}</div>
                                        );
                                    })
                        }
                    </div>
                </div>
                {
                    formid === 1 ?
                        <>
                            <div className="col-12 form-floating">
                                <input type={Password['new_password1']['visible'] ? 'text' : 'password'}
                                    className="form-control" id="NewPassword" placeholder="New Password"
                                    name="new_password1" aria-describedby="validatenewpassword1"
                                    value={Password['new_password1']['password']} onChange={changePasswordHandler}
                                    autoComplete="new-password" readOnly={buttonDisabled} required
                                />
                                <label htmlFor="NewPassword">New Password</label>
                                <button type="button" className="btn showIcon"
                                    onClick={() => showPassword("NewPassword")}>
                                    {
                                        Password['new_password1']['visible'] ?
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

                                <div id="validatenewpassword1" className="valid-feedback">Looks Good!</div>
                                <div id="validatenewpassword1" className="invalid-feedback">
                                    {
                                        match['old_new_match'] ?
                                            <div style={{ textAlign: 'justify' }}>Your old password and new password can't be the same!</div>
                                            :
                                            match['new_new_mismatch'] ?
                                                <div style={{ textAlign: 'justify' }}>Your new password doesn't seem to match with the re-entered one!</div>
                                                :
                                        Password['new_password1']['error'].length === 0 ?
                                            <div style={{ textAlign: 'justify' }}>Please Enter Some Password!</div>
                                            :
                                            Password['new_password1']['error'].map((warn) => {
                                                return (
                                                    <div key={Password['new_password1']['error'].indexOf(warn)} style={{ textAlign: 'justify' }}>{warn.message}</div>
                                                );
                                            })
                                    }
                                </div>
                            </div>
                            <div className="col-12 form-floating">
                                <input type={Password['new_password2']['visible'] ? 'text' : 'password'}
                                    className="form-control" id="NewPassword2" placeholder="Re-Enter New Password"
                                    name="new_password2" aria-describedby="validatenewpassword2"
                                    value={Password['new_password2']['password']} onChange={changePasswordHandler}
                                    autoComplete="new-password" readOnly={buttonDisabled} required
                                />
                                <label htmlFor="NewPassword2">Re-Enter Password</label>
                                <button type="button" className="btn showIcon"
                                    onClick={() => showPassword("NewPassword2")}>
                                    {
                                        Password['new_password2']['visible'] ?
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

                                <div id="validatenewpassword2" className="valid-feedback">Looks Good!</div>
                                <div id="validatenewpassword2" className="invalid-feedback">
                                    {
                                        match['new_new_mismatch'] ?
                                            <div style={{ textAlign: 'justify' }}>Your new password doesn't seem to match with the re-entered one!</div>
                                            :
                                            Password['new_password2']['error'].length === 0 ?
                                                <div style={{ textAlign: 'justify' }}>Please Enter Some Password!</div>
                                                :
                                                Password['new_password2']['error'].map((warn) => {
                                                    return (
                                                        <div key={Password['new_password2']['error'].indexOf(warn)} style={{ textAlign: 'justify' }}>{warn.message}</div>
                                                    );
                                                })
                                    }
                                </div>
                            </div>
                        </>
                        :
                        ""
                }
                <div className="d-grid col-sm-6 mx-auto">
                    <button id="cnfrmPswd" type="submit" className="btn btn-outline-success mt-3" disabled={buttonDisabled}>
                        {
                            buttonDisabled ?
                                <>
                                    <span className="spinner-grow spinner-grow-sm text-info" role="status" aria-hidden="true" />
                                    <span style={{ marginLeft: "3%" }}>Processing...</span>
                                </>
                                :
                                <>
                                    Confirm
                                </>
                        }
                    </button>
                </div>
            </div>
        </form>
        );
}
export default PasswordForm;