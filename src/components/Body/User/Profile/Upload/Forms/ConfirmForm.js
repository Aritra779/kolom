import { useState } from 'react';
import passwordValidator from 'password-validator';
import { passwordCheck } from '../../../../../../Utils/Validator';

const ConfirmForm = ({ uploadDoc, changeHandler }) => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [Password, setPassword] = useState({
        'password': '',
        'error' : ''
    });

    const schema = new passwordValidator();
    schema
        .is().min(8, "Minimum of 8 characters please!")
        .is().max(20, "Maximum of 20 characters please!")
        .has().uppercase(1, "Atleast 1 Uppercase letter please!")
        .has().lowercase(1, "Atleast 1 Lowercase letter please!")
        .has().digits(2, "Atleast 2 digits please!")
        .has().not().spaces(1, "No spaces please!");

    const PasswordChangeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const status = schema.validate(value, { details: true });
        passwordCheck(status, target);
        setPassword({
            'password': value,
            'error': status
        });
    }

    return (
        <fieldset id="fieldset" name="form3">
            <legend className="text-center text-white">User Details</legend>
            <div className="row g-3 justify-content-center mt-3 mb-3">
                <div className="col-md-9  form-floating">
                    <input type="email" className="form-control" id="Email"
                        placeholder="Email" name="Email"
                        aria-describedby="validatemail" value={uploadDoc["Email"]}
                        onChange={changeHandler} autoComplete = 'username'  required
                    />
                    <label htmlFor="Email">Email</label>
                    <div id="validatemail" className="valid-feedback">Looks Good!</div>
                    <div id="validatemail" className="invalid-feedback">Please enter a valid mail id.</div>
                </div>
                <div id = "PasswordField" className="col-md-9 form-floating">
                    <input type={passwordVisible ? 'text' : 'password'}
                        className="form-control" id="Password" placeholder="Password"
                        name="Password" aria-describedby="validatepassword"
                        value={Password['password']} onChange={PasswordChangeHandler}
                        autoComplete="current-password" required
                    />
                    <label htmlFor="Password">Password</label>
                    <button type="button" className="btn showIcon"
                        onClick={() => setPasswordVisible(!passwordVisible)}>
                        {
                            passwordVisible ?
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
                            Password['error'].length === 0 ?
                                <div style={{ textAlign: 'justify' }}>Please Enter Some Password!</div>
                                :
                                Password['error'].map((warn) => {
                                    return (
                                        <div key={Password['error'].indexOf(warn)} style={{ textAlign: 'justify' }}>{warn.message}</div>
                                    );
                                })
                        }
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="UseImage"
                            name="UseImage" value={uploadDoc['UseImage']} onChange={changeHandler}
                        />
                        <label className="form-check-label text-white"
                            htmlFor="UseImage"
                            style={{ textAlign: 'justify' }}
                        >
                            Check this option if you would like us to include your display picture alongside your name in the magazine</label>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}

export default ConfirmForm;