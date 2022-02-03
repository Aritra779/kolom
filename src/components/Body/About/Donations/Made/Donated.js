import Effects from '../../../Effects/Effects';
import img1 from '../../../../../Images/donated-01.webp';
import img2 from '../../../../../Images/donated-02.webp';

const Donated = () => {
    return (
        <div>
            <Effects
                id="About_Donated"
                title="Donation Made"
            />
            <section className="donated mt-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-stretch">
                            <div className="name">
                                <img src={img1} className="img-fluid" alt="NGO1" />
                                <div className = "p-3">
                                    <h4>Netaji Scout & Guide Group</h4>
                                    <span className = "text-muted">Kodalia</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="details curtain">
                                ABCD
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="name">
                                <div className="member-img">
                                    <img src={img2} className="img-fluid" alt="NGO2" />
                                </div>
                                <div className = "p-3">
                                    <h4>Sabar Welfare Society</h4>
                                    <span className = "text-muted">Address</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex align-items-stretch">
                            <div className="details curtain">
                                EFGH
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Donated;