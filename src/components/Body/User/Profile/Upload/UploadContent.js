import { useState } from "react";
import party from 'party-js';
import { emailCheck, textCheck } from "../../../../../Utils/Validator";
import ConfirmForm from "./Forms/ConfirmForm";
import ContentForm from "./Forms/ContentForm";
import UploadForm from "./Forms/UploadForm";

const UploadContent = () => {

    
    const [formStatus, setFormStatus] = useState({
        'form1': {
            'is-active': true,
            'is-filled': true
        },
        'form2': {
            'is-active': false,
            'is-filled': false
        },
        'form3': {
            'is-active': false,
            'is-filled': false
        }
    });

    const [uploadDoc, setUploadDoc] = useState({
        'ContentName': '',
        'CreatorName': '',
        'NickName': '',
        'ContentType': '',
        'Content': '',
        'Email': '',
        'UseImage': false

    });

    const runParty = (tgt) => {
        party.confetti(tgt, {
            count: party.variation.range(20, 40),
        });
    }

    const changeHandler = (event) => {
        const target = event.target;
        const { name, value, id } = target;
        switch (id) {
            case 'ContentName':
            case 'CreatorName':
            case 'NickName' :
                textCheck(target, true ,1);
                break;
            case 'Email':
                emailCheck(target, true);
                break;
            case 'ContentType':
                if (value !== '---Content Type---') {
                    target.classList.remove('is-invalid');
                    target.classList.add('is-valid');
                } else {
                    target.classList.remove('is-valid');
                    target.classList.add('is-invalid');
                }
            default:
                break;
        }

        setUploadDoc({
            ...uploadDoc,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const sbmtbtn = document.getElementById('SubmitButton');
        const tgt = document.getElementById('fieldset');
        const name = tgt.name;
        if (name === 'form3') {
            //validation form3
            runParty(sbmtbtn);
        } else if (name === 'form1') {
            //validation form1
            setFormStatus({
                ...formStatus,
                'form2': {
                    'is-filled': true,
                    'is-active': true,
                },
                'form1': {
                    ...formStatus['form1'],
                    'is-active': false
                }
            });
        } else if (name === 'form2') {
            //validation form2
            setFormStatus({
                ...formStatus,
                'form3': {
                    'is-filled': true,
                    'is-active': true,
                },
                'form2': {
                    ...formStatus['form2'],
                    'is-active': false
                }
            });
        }
    }

    const goPrev = () => {
        const tgt = document.getElementById('fieldset');
        const name = tgt.name;
        if (name === 'form2') {
            setFormStatus({
                ...formStatus,
                'form1': {
                    ...formStatus['form1'],
                    'is-active': true,
                },
                'form2': {
                    ...formStatus['form2'],
                     'is-active': false
                }
            });
        } else if (name === 'form3') {
            setFormStatus({
                ...formStatus,
                'form2': {
                    ...formStatus['form2'],
                    'is-active': true,
                },
                'form3': {
                    ...formStatus['form3'],
                    'is-active': false
                }
            });
        }
    }

    const navButtonController = (name) => {
        setFormStatus({
            'form1': {
                ...formStatus['form1'],
                'is-active': false,
            },
            'form2': {
                ...formStatus['form2'],
                'is-active': false
            },
            'form3': {
                ...formStatus['form3'],
                'is-active': false
            },
            [name]: {
                ...formStatus[name],
                'is-active': true
            }
        })
    }

    return (
        <section className="pt-4 pb-4">
            <h2 className="mt-3 mb-3 pt-2 pb-2 text-center text-white">Upload Content</h2>
            <div className="d-sm-flex mt-5 mb-5 wrapper">
                <div className={`background pointer-left ${formStatus['form1']['is-active'] ? "is-active" : formStatus['form1']['is-filled'] ? "is-filled"  : ""}`}>
                    <button className="btn arrow-pointer" disabled={!formStatus['form1']['is-filled'] && !formStatus['form1']['is-active']} onClick={ () => navButtonController('form1')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={formStatus['form1']['is-filled'] ? "#324DD4" : "#dc3545"} className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                    </button>
                </div>
                
                <div className={`background pointer-middle ${formStatus['form2']['is-active'] ? "is-active" : formStatus['form2']['is-filled'] ? "is-filled"  : ""}`}>
                    <button className="btn arrow-pointer" disabled = {!formStatus['form2']['is-filled'] && !formStatus['form2']['is-active']} onClick = {() => navButtonController('form2')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill={formStatus['form2']['is-filled'] ? "#324DD4" : "#dc3545"} className="bi bi-folder2-open" viewBox="0 0 16 16">
                                <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" />
                            </svg>
                    </button>
                </div>
                
                <div className={`background pointer-right ${formStatus['form3']['is-active'] ? "is-active" : formStatus['form3']['is-filled'] ? "is-filled"  : ""}`}>
                    <button className="btn arrow-pointer" disabled = {!formStatus['form3']['is-filled'] && !formStatus['form3']['is-active']} onClick = {() => navButtonController('form3')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill={formStatus['form3']['is-filled'] ? "#324DD4" : "#dc3545"} className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                    </button>
                </div>
                
            </div>
            <form id="MultiForm" className=" mt-5 mb-5 formbg p-2 p-sm-4 " noValidate
                onSubmit={handleSubmit}>
                {
                    formStatus['form1']['is-active'] ?
                        <ContentForm
                            uploadDoc={uploadDoc}
                            setUploadDoc={setUploadDoc}
                            changeHandler={changeHandler}
                        />
                        :
                        formStatus['form2']['is-active'] ?
                            <UploadForm
                                uploadDoc={uploadDoc}
                                setUploadDoc={setUploadDoc}
                                changeHandler={changeHandler}
                            />
                            :
                            <ConfirmForm
                                uploadDoc={uploadDoc}
                                setUploadDoc={setUploadDoc}
                                changeHandler={changeHandler}
                            />
                }
                <section id="buttonsPart" className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="d-sm-flex justify-content-between mt-4 mt-3">
                            <div className="col-sm-4 d-grid mt-4 mt-sm-0">
                                <button type="button"
                                    className={`btn btn-outline-info ${formStatus['form1']['is-active'] ? 'hidden' : ""}`}
                                    onClick={goPrev}
                                >
                                    Previous
                                </button>
                            </div>
                            <div className="col-sm-4 d-grid mt-4 mt-sm-0">
                                <button id = "SubmitButton" type="submit" className={`btn  ${formStatus['form3']['is-active'] ? "btn-success" : 'btn-outline-info'}`}>
                                    {
                                        formStatus['form3']['is-active'] ?
                                            'Submit'
                                            :
                                            'Next'
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            {/*<form id="UploadForm" className=" mt-5 mb-5 formbg p-2 p-sm-4 " noValidate
                onSubmit={handleSubmit}
            >
                <div className="row g-3 justify-content-center mt-3 mb-3">
                    <div className="col-md-8 form-floating">
                        <input type="text" className="form-control"
                            id="ContentName" placeholder="Content Name"
                            name="ContentName" aria-describedby="validatecontentname"
                            value={uploadDoc['ContentName']} onChange={changeHandler}
                            required
                        />
                        <label htmlFor="ContentName">Name of the Content</label>
                        <div id="validatecontentname" className="valid-feedback">Looks Good!</div>
                        <div id="validatecontentname" className="invalid-feedback">Required Field!</div>
                    </div>
                    <div className="col-md-8 form-floating">
                        <input type="text" className="form-control" id="CreatorName"
                            placeholder="Creator Name" name="CreatorName"
                            aria-describedby="validatecreatorname" value={uploadDoc["CreatorName"]}
                            onChange={changeHandler} required
                        />
                        <label htmlFor="CreatorName">Your Name</label>
                        <div id="validatecreatorname" className="valid-feedback">Looks Good!</div>
                        <div id="validatecreatorname" className="invalid-feedback">Required Field!</div>
                    </div>
                    <div className="col-md-8">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="UseNickName"
                                name="UseNickName" value={UseNickName} onChange={checkboxChange}
                            />
                            <label className="form-check-label text-white"
                                htmlFor="UseNickName"
                                style={{ textAlign: 'justify' }}
                            >
                                Use Nick Name Instead.</label>
                        </div>
                    </div>
                    <div className="col-md-8 form-floating">
                        <input type="text" className="form-control" id="NickName"
                            placeholder="Nick Name" name="NickName"
                            aria-describedby="validatenickname" value={uploadDoc["NickName"]}
                            onChange={changeHandler} disabled={!UseNickName} required
                        />
                        <label htmlFor="NickName">Nick Name </label>
                        <div id="validatenickname" className="valid-feedback">Looks Good!</div>
                        <div id="validatenickname" className="invalid-feedback">Required Field!</div>
                    </div>
                    <div className="col-md-8  form-floating">
                        <input type="email" className="form-control" id="Email"
                            placeholder="Email" name="Email"
                            aria-describedby="validatemail" value={uploadDoc["Email"]}
                            onChange={changeHandler} required
                        />
                        <label htmlFor="Email">Email</label>
                        <div id="validatemail" className="valid-feedback">Looks Good!</div>
                        <div id="validatemail" className="invalid-feedback">Please enter a valid mail id.</div>
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
                                        onClick={() => setConfirmButtonTarget(-1)} disabled={confirmButtonTarget !== 0 ? true : false}
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
                   

                </div>
            </form>*/}
           
           
        </section>
        );
}

export default UploadContent;