import './Contributors.css';
import Effects from '../Effects/Effects';


const Contributors = () => {
   
    return (
        <div className="container len pt-5 pb-5">
            <Effects
                id="first"
                title="Contributors"
            />
            <div className  = "mt-5 mb-5">
            <div className="accordion special-font" id="accordion1">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Edition 1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion1">
                        <div className="accordion-body">
                                <strong>Released in 2017</strong>
                                <div className="container mt-3 mb-3">
                                    <div className="row">
                                        <div className="d-none d-md-block col-md-4">
                                            <div className="background-img"></div>
                                        </div>
                                        <div className="col-md-8">
                                                <ul className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
                                                    <li className="col list-group-item">অরিত্র  দত্ত </li>
                                                <li className="col list-group-item list-group-item-primary">দেবার্ঘ্য কুমার চক্রবর্তী </li>
                                                    <li className="col list-group-item list-group-item-secondary">অনির্বাণ মান্না </li>
                                                    <li className="col list-group-item list-group-item-success">সোহান ঘোষ </li>
                                                    <li className="col list-group-item list-group-item-danger">ডালিয়ান বোস </li>
                                                    <li className="col list-group-item list-group-item-warning">সায়ক চক্রবর্তী </li>
                                                    <li className="col list-group-item list-group-item-info">স্মৃতি বেগ বিশ্বাস </li>
                                                    <li className="col list-group-item list-group-item-light">স্বপ্ননীল হালদার </li>
                                                    <li className="col list-group-item list-group-item-dark">চন্দ্রমৌলি দাস </li>
                                                    <li className="col list-group-item">অভীক দত্ত </li>
                                                    <li className="col list-group-item list-group-item-primary">সপ্তরথী </li>
                                                    <li className="col list-group-item list-group-item-secondary">পিয়ালী পাল </li>
                                                    <li className="col list-group-item list-group-item-success">আগমনী মণ্ডল </li>
                                                    <li className="col list-group-item list-group-item-danger">অর্কপ্রভ নস্কর </li>
                                                    <li className="col list-group-item list-group-item-warning">রূপম রানা </li>
                                                    <li className="col list-group-item list-group-item-info">আত্রেয়ী হালদার </li>
                                                    <li className="col list-group-item list-group-item-light">দুর্জয় চৌধুরী </li>
                                                    <li className="col list-group-item list-group-item-dark">শঙ্খ ভট্টাচার্য </li>
                                                    <li className="col list-group-item list-group-item-dark">শ্রুতি সরকার </li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Edition 2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion1">
                            <div className="accordion-body">
                                <strong>Released in 2018</strong>
                                <div className="container mt-3 mb-3">
                                    <div className="row">
                                        <div className="d-none d-md-block col-md-4">
                                            <div className="background-img"></div>
                                        </div>
                                        <div className="col-md-8">
                                            <ul className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
                                                <li className="col list-group-item">বং পাইপারস</li>
                                                <li className="col list-group-item list-group-item-primary">রূপম রানা</li>
                                                <li className="col list-group-item list-group-item-secondary">রিয়েলরিল মিডিয়াওয়ার্কস</li>
                                                <li className="col list-group-item list-group-item-success">সায়ক চক্রবর্তী</li>
                                                <li className="col list-group-item list-group-item-danger">দেবার্ঘ্য কুমার চক্রবর্তী</li>
                                                <li className="col list-group-item list-group-item-warning">আকাঙ্খা দেবনাথ </li>
                                                <li className="col list-group-item list-group-item-info">সোহান ঘোষ</li>
                                                <li className="col list-group-item list-group-item-light">বৈশাখী সেন</li>
                                                <li className="col list-group-item list-group-item-dark">অভীক দত্ত </li>
                                                <li className="col list-group-item">ঈপ্সিতা সর্দার</li>
                                                <li className="col list-group-item list-group-item-primary">স্বপ্ননীল হালদার</li>
                                                <li className="col list-group-item list-group-item-secondary">আত্রেয়ী হালদার</li>
                                                <li className="col list-group-item list-group-item-success">শ্রেয়সী বিশ্বাস</li>
                                                <li className="col list-group-item list-group-item-danger">লীনা মহল</li>
                                                <li className="col list-group-item list-group-item-warning">নেহা মজুমদার </li>
                                                <li className="col list-group-item list-group-item-info">দেবলীন নস্কর </li>
                                                <li className="col list-group-item list-group-item-light">শঙ্খ ভট্টাচার্য </li>
                                                <li className="col list-group-item list-group-item-dark">পিয়ালি পল </li>
                                                <li className="col list-group-item list-group-item-dark">দুর্জয় দত্ত চৌধুরী </li>
                                                <li className="col list-group-item">সৃজিতা দাস</li>
                                                <li className="col list-group-item list-group-item-primary">আকাশ রঞ্জন নস্কর </li>
                                                <li className="col list-group-item list-group-item-secondary">ইন্দ্রজিত গায়েন </li>
                                                <li className="col list-group-item list-group-item-success">অর্কপ্রভ নস্কর </li>
                                                <li className="col list-group-item list-group-item-danger">দত্তাত্রেও দাস </li>
                                                <li className="col list-group-item list-group-item-warning">ডালিয়ান বোস </li>
                                                <li className="col list-group-item list-group-item-info">আকাশ ভট্টাচার্য </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Edition 3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion1">
                            <div className="accordion-body">
                                <strong>Released in 2019</strong>
                                <div className="container mt-3 mb-3">
                                    <div className="row">
                                        <div className="d-none d-md-block col-md-4">
                                            <div className="background-img"></div>
                                        </div>
                                        <div className="col-md-8">
                                            <ul className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
                                                <li className="col list-group-item">শুভঙ্কর দেব </li>
                                                <li className="col list-group-item list-group-item-primary">স্মৃতি বেগ বিশ্বাস </li>
                                                <li className="col list-group-item list-group-item-secondary">সোহান ঘোষ </li>
                                                <li className="col list-group-item list-group-item-success">বসুন্ধরা হালদার </li>
                                                <li className="col list-group-item list-group-item-danger">রাজর্ষি চক্রবর্তী </li>
                                                <li className="col list-group-item list-group-item-warning">দেবার্ঘ্য কুমার চক্রবর্তী</li>
                                                <li className="col list-group-item list-group-item-info">সায়ক চক্রবর্তী </li>
                                                <li className="col list-group-item list-group-item-light">আনিকা তাবাসসুম বৃষ্টি </li>
                                                <li className="col list-group-item list-group-item-dark">রিতা ঘোষাল </li>
                                                <li className="col list-group-item">অনুষ্কা রায় </li>
                                                <li className="col list-group-item list-group-item-primary">শ্রেয়সী বিশ্বাস </li>
                                                <li className="col list-group-item list-group-item-secondary">নিলোফার আলি শা </li>
                                                <li className="col list-group-item list-group-item-success">রূপম মাল </li>
                                                <li className="col list-group-item list-group-item-danger">অহনা বেরা </li>
                                                <li className="col list-group-item list-group-item-warning">অরিত্র গুপ্ত</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Edition 4
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion1">
                            <div className="accordion-body">
                                <strong>Released in 2020</strong>
                                <div className="container mt-3 mb-3">
                                    <div className="row">
                                        <div className="d-none d-md-block col-md-4">
                                            <div className="background-img"></div>
                                        </div>
                                        <div className="col-md-8">
                                            <ul className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
                                                <li className="col list-group-item">Person Name</li>
                                                <li className="col list-group-item list-group-item-primary">Person Name</li>
                                                <li className="col list-group-item list-group-item-secondary">Person Name</li>
                                                <li className="col list-group-item list-group-item-success">Person Name</li>
                                                <li className="col list-group-item list-group-item-danger">Person Name</li>
                                                <li className="col list-group-item list-group-item-warning">Person Name</li>
                                                <li className="col list-group-item list-group-item-info">Person Name</li>
                                                <li className="col list-group-item list-group-item-light">Person Name</li>
                                                <li className="col list-group-item list-group-item-dark">Person Name</li>
                                                <li className="col list-group-item">Person Name</li>
                                                <li className="col list-group-item list-group-item-primary">Person Name</li>
                                                <li className="col list-group-item list-group-item-secondary">Person Name</li>
                                                <li className="col list-group-item list-group-item-success">Person Name</li>
                                                <li className="col list-group-item list-group-item-danger">Person Name</li>
                                                <li className="col list-group-item list-group-item-warning">Person Name</li>
                                                <li className="col list-group-item list-group-item-info">Person Name</li>
                                                <li className="col list-group-item list-group-item-light">Person Name</li>
                                                <li className="col list-group-item list-group-item-dark">Person Name</li>
                                                <li className="col list-group-item list-group-item-dark">Person Name</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Edition 5
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion1">
                            <div className="accordion-body">
                                <strong>Released in May 2021</strong>
                                <div className="container mt-3 mb-3">
                                    <div className="row">
                                        <div className="d-none d-md-block col-md-4">
                                            <div className="background-img"></div>
                                        </div>
                                        <div className="col-md-8">
                                            <ul className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
                                                <li className="col list-group-item">Person Name</li>
                                                <li className="col list-group-item list-group-item-primary">Person Name</li>
                                                <li className="col list-group-item list-group-item-secondary">Person Name</li>
                                                <li className="col list-group-item list-group-item-success">Person Name</li>
                                                <li className="col list-group-item list-group-item-danger">Person Name</li>
                                                <li className="col list-group-item list-group-item-warning">Person Name</li>
                                                <li className="col list-group-item list-group-item-info">Person Name</li>
                                                <li className="col list-group-item list-group-item-light">Person Name</li>
                                                <li className="col list-group-item list-group-item-dark">Person Name</li>
                                                <li className="col list-group-item">Person Name</li>
                                                <li className="col list-group-item list-group-item-primary">Person Name</li>
                                                <li className="col list-group-item list-group-item-secondary">Person Name</li>
                                                <li className="col list-group-item list-group-item-success">Person Name</li>
                                                <li className="col list-group-item list-group-item-danger">Person Name</li>
                                                <li className="col list-group-item list-group-item-warning">Person Name</li>
                                                <li className="col list-group-item list-group-item-info">Person Name</li>
                                                <li className="col list-group-item list-group-item-light">Person Name</li>
                                                <li className="col list-group-item list-group-item-dark">Person Name</li>
                                                <li className="col list-group-item list-group-item-dark">Person Name</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Edition 6
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordion1">
                            <div className="accordion-body">
                                <strong>Released in October 2021</strong>
                                <div className="container mt-3 mb-3">
                                    <div className="row">
                                        <div className="d-none d-md-block col-md-4">
                                            <div className="background-img"></div>
                                        </div>
                                        <div className="col-md-8">
                                            <ul className="row row-cols-2 row-cols-md-2 row-cols-lg-3">
                                                <li className="col list-group-item">Person Name</li>
                                                <li className="col list-group-item list-group-item-primary">Person Name</li>
                                                <li className="col list-group-item list-group-item-secondary">Person Name</li>
                                                <li className="col list-group-item list-group-item-success">Person Name</li>
                                                <li className="col list-group-item list-group-item-danger">Person Name</li>
                                                <li className="col list-group-item list-group-item-warning">Person Name</li>
                                                <li className="col list-group-item list-group-item-info">Person Name</li>
                                                <li className="col list-group-item list-group-item-light">Person Name</li>
                                                <li className="col list-group-item list-group-item-dark">Person Name</li>
                                                <li className="col list-group-item">Person Name</li>
                                                <li className="col list-group-item list-group-item-primary">Person Name</li>
                                                <li className="col list-group-item list-group-item-secondary">Person Name</li>
                                                <li className="col list-group-item list-group-item-success">Person Name</li>
                                                <li className="col list-group-item list-group-item-danger">Person Name</li>
                                                <li className="col list-group-item list-group-item-warning">Person Name</li>
                                                <li className="col list-group-item list-group-item-info">Person Name</li>
                                                <li className="col list-group-item list-group-item-light">Person Name</li>
                                                <li className="col list-group-item list-group-item-dark">Person Name</li>
                                                <li className="col list-group-item list-group-item-dark">Person Name</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Contributors;