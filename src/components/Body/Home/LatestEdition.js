import Options from '../Archive/Editions/Options';
import "./Home.css";
import '../Archive/Editions/Editions.css';

const LatestEdition = () => {
    return (
        <div id="Latest" className="pb-5">
            <div className="container pt-5 pb-5">
                Our lastest Edition i.e., Edition 6 was released on October 6th. Below you can read this edition. Previous editions can be found at the archive page.
            </div>
            <div className="container">
                <Options
                    content={6}
                    Effect_id = "Home_Latest"
                />
            </div>
        </div>
    );
}

export default LatestEdition;