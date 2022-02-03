import { useState } from 'react';

const UploadForm = ({ uploadDoc, setUploadDoc, changeHandler }) => {

    const [UseNickName, setUseNickName] = useState(false);

    const checkboxChange = (event) => {
        const target = document.getElementById('NickName');
        if (event.target.value !== 'false') {
            target.classList.remove('is-valid');
            target.classList.remove('is-invalid');
            setUploadDoc({
                ...uploadDoc,
                'NickName': ''
            });
        }
        setUseNickName(!UseNickName);
    }

    return (
        <fieldset id="fieldset" name="form2">
            <legend className="text-center text-white">Upload content</legend>
            <div className="row g-3 justify-content-center mt-3 mb-3">
                <div className="col-md-9 form-floating">
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
                <div className="col-md-9 form-floating">
                    <input type="text" className="form-control" id="CreatorName"
                        placeholder="Creator Name" name="CreatorName"
                        aria-describedby="validatecreatorname" value={uploadDoc["CreatorName"]}
                        onChange={changeHandler} required
                    />
                    <label htmlFor="CreatorName">Your Name</label>
                    <div id="validatecreatorname" className="valid-feedback">Looks Good!</div>
                    <div id="validatecreatorname" className="invalid-feedback">Required Field!</div>
                </div>
                <div className="col-md-9">
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
                <div className="col-md-9 form-floating">
                    <input type="text" className="form-control" id="NickName"
                        placeholder="Nick Name" name="NickName"
                        aria-describedby="validatenickname" value={uploadDoc["NickName"]}
                        onChange={changeHandler} disabled={!UseNickName} required
                    />
                    <label htmlFor="NickName">Nick Name </label>
                    <div id="validatenickname" className="valid-feedback">Looks Good!</div>
                    <div id="validatenickname" className="invalid-feedback">Required Field!</div>
                </div>
                <div className="col-md-9  form-floating">
                    <input type="email" className="form-control" id="Email"
                        placeholder="Email" name="Email"
                        aria-describedby="validatemail" value={uploadDoc["Email"]}
                        onChange={changeHandler} required
                    />
                    <label htmlFor="Email">Email</label>
                    <div id="validatemail" className="valid-feedback">Looks Good!</div>
                    <div id="validatemail" className="invalid-feedback">Please enter a valid mail id.</div>
                </div>

            </div>
        </fieldset>
    );
}

export default UploadForm;