import Effects from '../Effects/Effects';
import { Link } from 'react-router-dom';
const ShortArchive = () => {
    return (
        <div className="container pt-4 pb-5" id="ShortArchive">
            <div className="pt-4 pb-4">
                <Effects
                    id="HomeArchive"
                    title="Over the Years"
                />
            </div>
			<div className="row row-cols-1 row-cols-md-2 g-5">
				<div className="col">
                    <div className="card">
                        <div className="front" id = "Cont">
                            <p>Contributors</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>This entire initiative wouldn't have been possible without all of the people who came forward to help us with some of theirs wonderful creations.</p>
                                <p>Throughout all 6 of our editions we've had some constant contributors. We're eternally thankful to them.</p>
                                <button id = "b1" className="button"><Link to={"/archive/#Contributors"} style={{ textDecoration: 'none', color : 'white' }}>Click Here</Link></button>
                            </div>
                        </div>
                    </div>
				</div>
				<div className="col">
                    <div className="card card-b">
                        <div className="front" id = "PEdtn">
                            <p>Past Editions</p>
                        </div>
                        <div className="back">
                            <div>
                                <p>Over the past few years we've had the opputunity to publish a to total of 6 editions of our magazine.</p>
                                <p>All editions of our magazine is available for free to people who might be interested in them.</p>
                                <button id = "b2" className="button button-b"><Link to={"/archive/#Editions"} style={{ textDecoration: 'none', color: 'white' }}>Click Here</Link></button>
                            </div>
                        </div></div>
				</div>
			</div>
        </div>
    );
}

export default ShortArchive;