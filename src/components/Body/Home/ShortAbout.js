import { Link } from 'react-router-dom';
import Effects from '../Effects/Effects';

const ShortAbout = () => {
	return (
		<div style={{ backgroundColor: '#515356' }}>
			<div className="container pb-5 tilesWrap" id="ShortAbout">
				<div className = "pt-4 pb-4">
					<Effects
					id="Home_About"
						title="About Us"
						color = "white"
					/>
				</div>
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 gx-md-5">
					<div className="col">
						<div className = "list h-100" id = "frst">
							<h3>06</h3>
							<h4>Editions</h4>
							<p>
								We've released a total of 6 editions since the 2017.
							</p>
							<Link to={"/about"} className="btn btn-primary" role="button">Read More</Link>
						
						</div>
					</div>
					<div className="col">
						<div className = "list h-100" id = "scnd">
							<h3>09</h3>
							<h4>Editors</h4>
						<p>
							Over the years we've had 9 people gracefully volunteering for editorial works. Without them this entire magazine wouldn't be where it is today.
						</p>
							<Link to={"/about/#About_Editors"} className="btn btn-primary" role="button">Read More</Link>
						</div>
					</div>
					<div className="col">
						<div className = "list h-100" id = "thrd">
							<h3>02</h3>
							<h4>Donations</h4>
							<p>
								Since edition 4 the magazine is being distributed in exchange of very small amount of money which goes directly to some organizations involded in social care.
							</p>
							<Link to={"/about/#About_Donations"} className="btn btn-primary" role="button">Read More</Link>
						</div>
					</div>
					<div className="col">
						<div className = "list h-100" id = "frth">
							<h3>08</h3>
							<h4>Editors' Pen</h4>
							<p>
								From coming up with the idea of pubdivshing a magazine to executing the task each and every year our editors have gone through a lot of works to make this happen. They have shared this experience through some words.
							</p>
							<Link to={"/about/#About_Pen"} className="btn btn-primary" role="button">Read More</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
        );
}

export default ShortAbout;