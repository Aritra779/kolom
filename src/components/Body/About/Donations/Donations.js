import { useState } from 'react';
import Donated from './Made/Donated';
import Received from './Received/Received';
import Effects from '../../Effects/Effects';
import './Donations.css';


const Donations = () => {
    const [option, setOption] = useState(0);

    const scroll = (id) => {
        let target;
        if (id === 'Received') {
            target = document.getElementById('Nineth');
            if (!target) {
                target = document.getElementById('Child');

            }
            setOption(2);
            target.scrollIntoView({ block: 'center' });
        }
        else if (id === 'Made') {
            target = document.getElementById('Eighth');
            if (!target) {
                target = document.getElementById('Child');
            }
            setOption(1);
            target.scrollIntoView({ block: 'center' });
        }
    }

    return (
        <div className="container" id = "Donations">
            <Effects
                id="AboutDonations"
                title="Donations"
            />
            <div className="mt-5 mb-5" style={{ fontStyle: 'italic', fontSize: '1.2em', textAlign: 'justify' }}>
                Initial 3 Editions were distributed free of cost. From Edition 4 onwards we distributed our magazine in exchange of small amount. All amount collected is donated to social workers
            </div>
            <div id="Donations" className="mt-5 mb-5 pt-3 pb-3">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card h-100" onClick={() => scroll('Made')}>
                            <div className= "bg-img" id = "D1"></div>
                            <div className="card-img-overlay">
                                <h5 className="card-title">Donations Made</h5>
                                <div className="card-text">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100" onClick={() => scroll('Received')}>
                            <div className = "bg-img" id = "D2"></div>                            <div className="card-img-overlay">
                                <h5 className="card-title">Donations Received</h5>
                                <div className="card-text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span id = "Child"></span>
                {(option !== 0) ?
                    option === 1 ? (
                        <Donated/>
                    )
                    :
                    (
                        <Received/>
                    )
                :
                ""
                }
            </div>
        </div>
        );
}

export default Donations;