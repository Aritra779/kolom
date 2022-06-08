import { useNavigate } from 'react-router-dom';
import party from 'party-js';
import './Update.css';
import { useState } from 'react';
import { textCheck, emailCheck, numberCheck } from '../../../../../Utils/Validator';
import PasswordForm from './PasswordForm';

const Update = () => {
    const [disableSubmitButton, setDisableSubmitButton] = useState(false);
    const [confirmButtonTarget, setConfirmButtonTarget] = useState(0);
    const [userdetails, setUserdetails] = useState({
        'FirstName': '',
        'MiddleName': '',
        'LastName': '',
        'NickName': '',
        'PrimaryEmail': '',
        'BackupEmail': '',
        'Address': '',
        'City': '',
        'Pin': '',
        'Age': '',
        'Gender': '',
        'Promo': true,
        'profile_pic' : ''
    });

    const navigate = useNavigate();

	const handleSubmitFirstForm = (e) => {
        e.preventDefault();
        let flag = [false, false, false, false];
        const Fname = document.getElementById("FirstName");
        const pemail = document.getElementById("primaryEmail");
        const bemail = document.getElementById("backupEmail");
        const city = document.getElementById("city");
        flag[0] = textCheck(Fname, true, 3);
        flag[1] = emailCheck(pemail, true);
        flag[2] = emailCheck(bemail, false);
        flag[3] = textCheck(city, true,1);
        if (flag[0] && flag[1] && flag[2] && flag[3]) {
            let sbmtbtn = document.getElementById('submitbtn');
            runParty(sbmtbtn);
            window.scrollBy({top : 300});
            setDisableSubmitButton(true);
        }
    }

    const selectImage = () => {
        let input = document.getElementById("hiddeninput");
        if (input) {
            input.click();
        }
    }

    const runParty = (target) => {
        party.confetti(target, {
            count: party.variation.range(20, 40),
        });
    }

    const changeHandler = (event) => {
        const target = event.target;
        const {name, value, id } = target;
        switch (id) {
            case 'FirstName':
                textCheck(target, true, 3);
                break;
            case 'MiddleName':
            case 'LastName':
            case 'NickName':
            case 'Address':
                textCheck(target);
                break;
            case 'age':
                numberCheck(target,false, 1,150);
                break;
            case 'primaryEmail':
                emailCheck(target, true);
                break;
            case 'backupEmail':
                emailCheck(target, false);
                break;
            case 'city':
                textCheck(target, 1, true);
                break;
            case 'pin':
                numberCheck(target,false,100000,999999);
                break;
            case 'gender':
                if (value !== 'Gender') {
                    target.classList.add("is-valid");
                } else {
                    target.classList.remove("is-valid");
                }
                break;
            case 'receivemail':
            default:
                break;
        }
        setUserdetails({
            ...userdetails,
            [name] : value
        });
    }

    return (
        <div id = "UpdateInfo" className="container pb-5 pt-5">
            <div className="text-center p-5">
                <button type="button" className="btn btn-warning rounded-pill"
                    onClick={() => navigate(-1)}
                >
                    GO BACK
                </button>
            </div>
            <div className="text-light p-3" style={{ textAlign: "justify" }}>
                Please carefully update your data. If you want to go back click the above button. To update password submit the form first.
            </div>
            <form id = "UpdateForm" className=" m-3 m-sm-5 formbg p-2 p-sm-4" noValidate
                onSubmit={handleSubmitFirstForm}
            >
                <div className="row g-3">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="profilepic-container">
                            <button id="selectprofilepic" type="button" className="profilepic" onClick={selectImage}></button>
                            <input id="hiddeninput" name="profile_pic" type="file"
                                accept="image/*" style={{ display: 'none' }}
                                onChange={changeHandler} />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4  form-floating">
                        <input type="text" className="form-control"
                            id="FirstName" placeholder="First Name"
                            name="FirstName" aria-describedby="validatefirstname"
                            value={userdetails['FirstName']} onChange={changeHandler}
                            readOnly={ disableSubmitButton } required
                        />
                        <label htmlFor="FirstName">First Name</label>
                        <div id="validatefirstname" className="valid-feedback">Looks Good!</div>
                        <div id="validatefirstname" className="invalid-feedback">First name can't be less than 3 characters.</div>
                    </div>
                    <div className="col-md-6 col-lg-4 form-floating">
                        <input type="text" className="form-control" id="MiddleName"
                            placeholder="Middle Name" name="MiddleName"
                            aria-describedby="validatemiddlename" value={userdetails["MiddleName"]}
                            onChange={changeHandler} readOnly={disableSubmitButton}
                        />
                        <label htmlFor="MiddleName">Middle Name (optional)</label>
                        <div id="validatemiddlename" className="valid-feedback">Looks Good!</div>
                    </div>
                    <div className="col-md-6 col-lg-4 form-floating">
                        <input type="text" className="form-control" id="LastName"
                            placeholder="Last Name" name="LastName"
                            aria-describedby="validatelastname" value={userdetails["LastName"]}
                            onChange={changeHandler} readOnly={disableSubmitButton}
                        />
                        <label htmlFor="LastName">Last Name (optional)</label>
                        <div id="validatelastname" className="valid-feedback">Looks Good!</div>
                    </div>
                    <div className="col-md-6 col-lg-12">
                        <div className="row">
                            <div className="col-lg-6 form-floating">
                                <input type="text" className="form-control" id="NickName"
                                    placeholder="Nick Name(if you want to use)" name="NickName"
                                    aria-describedby="validatenickname" value={userdetails["NickName"]}
                                    onChange={changeHandler} readOnly={disableSubmitButton}
                                />
                                <label htmlFor="NickName">Nick Name (optional)</label>
                                <div id="validatenickname" className="valid-feedback">Looks Good!</div>
                            </div>
                            <div className="col-lg-6">
                                <div id="Info" className="form-text text-white" style={{ textAlign: "justify" }}>
                                    <span className = "pe-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="pink" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                        </svg>
                                    </span>
                                        Nick name is a pseudo-name. You can use this name if you wish to appear under a differnt name in the magazine.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12  form-floating">
                        <input type="email" className="form-control" id="primaryEmail"
                            placeholder="Primary Email" name="PrimaryEmail"
                            aria-describedby="validateprmmail" value={userdetails["PrimaryEmail"]}
                            onChange={changeHandler} readOnly={disableSubmitButton} required
                        />
                        <label htmlFor="primaryEmail">Primary Email</label>
                        <div id="validatebckmail" className="valid-feedback">Looks Good!</div>
                        <div id="validatebckmail" className="invalid-feedback">Please enter a valid mail id.</div>
                    </div>
                    <div className="col-12  form-floating">
                        <input type="email" className="form-control" id="backupEmail"
                            placeholder="Backup Email" name="BackupEmail"
                            aria-describedby="validatebckmail" value={userdetails["BackupEmail"]}
                            onChange={changeHandler} readOnly={disableSubmitButton}
                        />
                        <label htmlFor="backupEmail">Backup Email (optional)</label>
                        <div id="validatebckmail" className="valid-feedback">Looks Good!</div>
                        <div id="validatebckmail" className="invalid-feedback">Please Enter a valid mail id. (or leave it blank)</div>
                    </div>
                    <div className="col-12 form-floating">
                        <input type="text" className="form-control" id="Address"
                            placeholder="Address" name="Address" aria-describedby="validateaddress"
                            value={userdetails["Address"]} onChange={changeHandler} readOnly={disableSubmitButton}
                        />
                        <label htmlFor="Address">Address (optional)</label>
                        <div id="validateaddress" className="valid-feedback">Looks Good!</div>
                    </div>
                    <div className="col-md-6  form-floating">
                        <input type="text" className="form-control" id="city"
                            placeholder="City" name="City" aria-describedby="validatecity"
                            value={userdetails["City"]} onChange={changeHandler} readOnly={disableSubmitButton}
                            required />
                        <label htmlFor="city">City</label>
                        <div id="validatecity" className="valid-feedback">Looks Good!</div>
                        <div id="validatecity" className="invalid-feedback">City Name needs to be atleast one character long.</div>
                    </div>
                    <div className="col-md-6  form-floating">
                        <input type="number" className="form-control" id="pin"
                            placeholder="PIN Code" name="Pin" aria-describedby="validatepin"
                            value={userdetails["Pin"]} onChange={changeHandler} readOnly={disableSubmitButton}
                        />
                        <label htmlFor="pin">PIN Code (optional)</label>
                        <div id="validatepin" className="valid-feedback">Looks Good!</div>
                        <div id="validatepin" className="invalid-feedback">Pin code needs to be 6 digits long postive number. (or leave it blank)</div>
                    </div>
                    <div className="col-sm-6  form-floating">
                        <input type="number" min="1" className="form-control" id="age"
                            placeholder="Age" name="Age" aria-describedby="validateage"
                            value={userdetails["Age"]} onChange={changeHandler} readOnly={disableSubmitButton}
                        />
                        <label htmlFor="age">Age (optional)</label>
                        <div id="validateage" className="valid-feedback">Looks Good!</div>
                        <div id="validateage" className="invalid-feedback">Please enter a valid Age. (or leave it blank)</div>
                    </div>
                    <div className="col-sm-6 form-floating">
                        <select id="gender" className="form-select" name="Gender" onChange={changeHandler} disabled={disableSubmitButton}>
                            <option defaultValue="Gender"> Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Transgender</option>
                            <option>other</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="receivemail"
                                name="Promo" value={userdetails["Promo"]} onChange={changeHandler}
                                defaultChecked disabled={disableSubmitButton} />
                            <label className="form-check-label text-white"
                                htmlFor="receivemail"
                                style={{ textAlign: 'justify' }}
                            >
                                Check to receive mails about future dates related to publication.</label>
                        </div>
                    </div>
                    <div className="d-grid col-sm-6 offset-sm-3">
                        <button id="submitbtn" type="submit" className="btn btn-outline-primary mt-5 mb-3" disabled={disableSubmitButton}>
                            {
                                disableSubmitButton ?
                                    <>
                                        <span className="spinner-grow spinner-grow-sm text-info" role="status" aria-hidden="true" />
                                        <span style={{ marginLeft: "3%" }}>Processing...</span>
                                    </>
                                    :
                                    <>
                                        Submit
                                    </>
                            }
                        </button>
                    </div>
                    {
                        disableSubmitButton ?
                            <>
                                <div className="d-grid col-sm-6 mx-auto">
                                    <button id="cnfchng" type="button" className="btn btn-success mb-3"
                                        onClick={() => setConfirmButtonTarget(-1)} disabled={ confirmButtonTarget !== 0 ? true : false}
                                    >
                                        {
                                            (confirmButtonTarget === -1 || confirmButtonTarget === 1) ?
                                                <>
                                                    <span className="spinner-grow spinner-grow-sm text-info" role="status" aria-hidden="true" />
                                                    <span style={{ marginLeft: "3%" }}>Processing...</span>
                                                </>
                                                :
                                                <>
                                                    Confirm Change
                                                </>
                                        }
                                    </button>
                                </div>
                                <div className="d-grid col-sm-6 mx-auto">
                                    <button id="updtpswd" type="button" className="btn btn-info mb-3"
                                        onClick={() => setConfirmButtonTarget(1)} disabled={confirmButtonTarget !== 0 ? true : false}
                                    >
                                        {
                                            (confirmButtonTarget !== 0) ?
                                                <>
                                                    <span className="spinner-grow spinner-grow-sm text-success" role="status" aria-hidden="true" />
                                                    <span style={{ marginLeft: "3%" }}>Processing...</span>
                                                </>
                                                :
                                                <>
                                                    Update Password & Confirm Changes
                                                </>
                                        }
                                    </button>
                                </div>
                            </>
                                :
                            ""
                    }
                    
                </div>
            </form>
            <div>
            {
                    confirmButtonTarget !== 0 ?
                        <PasswordForm
                            userdetails={userdetails}
                            formid={confirmButtonTarget}
                        />
                    :
                    ""
            }
            </div>
        </div>
        );
}

export default Update;