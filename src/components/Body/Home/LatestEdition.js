import { useState } from 'react';
import Effects from '../Effects/Effects';
import FlipBook from '../Archive/Editions/FlipBook';
import "./Home.css";

const LatestEdition = () => {
    return (
        <div id="Latest">
            <div className="container pt-5 pb-5">
                Our lastest Edition i.e., Edition 6 was released on October 6th. Below you can read this edition. Previous editions can be found at the archive page.
            </div>
            <div className = "container">
                <FlipBook
                    content={6}
                />
            </div>
        </div>
    );
}

export default LatestEdition;