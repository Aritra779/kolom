import { NavLink, Link } from 'react-router-dom';
import './Landing.css';

const Landing = ({ moderator }) => {
    return (
        <div className="container pt-5 pb-5">
            <div className="row row-cols-1 row-cols-md-2 gy-5 justify-content-around targettedrow p-md-0">
                <div className="col">
                    <div class="card h-100 card-container">
                        <div className="card-bg bg1"></div>
                        <div className="card-content d-flex flex-column">
                            <h3 className="card-header text-center">Status and Activity</h3>
                            <div className="card-body d-flex flex-column justify-content-center">
                                <p className="card-text text-light" style={{ textAlign: 'justify' }}>
                                    Click the button below to get details about all the contents you've contributed towards to magazine.
                                </p>
                            </div>
                            <div className="card-footer text-center">
                                <Link to={"status"} role="button" className="btn btn-info">View Status & Activity</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card h-100 card-container">
                        <div className="card-bg bg2"></div>
                        <div className="card-content d-flex flex-column">
                            <h3 className="card-header text-center">Content</h3>
                            <div className="card-body d-flex flex-column justify-content-center">
                                <p className="card-text text-light" style={{ textAlign: 'justify' }}>
                                    Click the button below to upload any content you wish to contribute to the magazine for the upcoming edition.
                                </p>
                            </div>
                            <div className="card-footer text-center">
                                <Link to={"upload"} role="button" className="btn btn-success">Upload content</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    moderator &&
                    <div className="col">
                        <div class="card h-100 card-container">
                            <div className="card-bg bg3"></div>
                            <div className="card-content d-flex flex-column">
                                <h3 className="card-header text-center">Review</h3>
                                <div className="card-body d-flex flex-column justify-content-center">
                                    <p className="card-text text-light" style={{ textAlign: 'justify' }}>
                                        Click the button below to start reviewing submitted contents.
                                    </p>
                                </div>
                                <div className="card-footer text-center">
                                    <Link to={"review"} role="button" className="btn btn-primary">Review Content</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
        );
}

export default Landing;