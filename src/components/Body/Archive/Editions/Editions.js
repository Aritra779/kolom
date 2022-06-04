import { useRef, useState } from 'react';
import './Editions.css';
import Effects from '../../Effects/Effects';
import Options from './Options';

const dates = ["September 2017" , "October 2018" , "October 2019","October 2020" , "May 2021" , "October 2021"];

const Editions = () => {

    const [opened, setOpened] = useState(0);
    const childRef = useRef(null);
    
    const expand = (id) => {
        var optionsBox;
        optionsBox = document.getElementById("Archive_Options");
        if (optionsBox) {
            childRef.current.hide();
        }
        if (!optionsBox) {
            optionsBox = document.getElementById("options");
        }
        optionsBox.scrollIntoView({ block: 'center' });
        setOpened(id);

    }

    return (
        <div id = "Editions">
        <div className="container pt-5 pb-5">
            <Effects
                id="Archive_Editions"
                title="Past Editions"
            />
            <div id="Edition" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 mb-5 g-4">
                {
                    dates.map((date) => {
                        return (
                            <div key={date} id={`edtn${dates.indexOf(date) + 1}`} className="col">
                            <div className="card h-100">
                                    <div className="bg-img d-none d-sm-block" onClick={() => expand(dates.indexOf(date) + 1)} tabIndex = "0" onKeyDown={(e) => {e.key === 'Enter' && expand(dates.indexOf(date) + 1)}}></div>
                                <div className="card-body">
                                        <h5 className="card-title text-decoration-underline" onClick={() => expand(dates.indexOf(date) + 1)}>Edition {dates.indexOf(date) + 1}</h5>
                                    <p className="card-text">{date}</p>
                                </div>
                            </div>
                        </div>
                        );
                    })
                }
            </div>
            <div id="options">
                {opened ? (
                <Options
                        content={opened}
                        ref={childRef}
                    />
            )
            :    
            ""  
                }
            </div>
            </div>
            </div>
    );
}

export default Editions;