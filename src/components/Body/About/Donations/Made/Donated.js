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
                                আমরা প্রথম বছরেই হাত বাড়িয়ে দিয়েছিলাম কোদালিয়া নেতাজি স্কাউট এন্ড গাইডস গ্রুপকে। 
                                মানুষের পাশে দাঁড়ানো নিরলস প্রচেষ্টা তারা করে চলেছেন। প্রথমে তারা স্থানীয় এবং তারপর রো দূরদূর অব্দি তারা পৌঁছে দিচ্ছিলেন সাহায্য।
                                মহামারীর সময়ে তারা খাবার নিয়ে মানুষের সবার কাছে পৌঁছে দিচ্ছিলেন।
                                একই ভাবে ঝড়ের সময়, যখন সমগ্র সুন্দরবন প্লাবিত, তখন বিপুল ট্রেন নিয়ে তারা এগিয়ে গেছিলো নির্ভয় হয়ে।
                                ঠিক একইভাবে রক্তদান শিবিরের ব্যবস্থা তারা নিয়মিত করে চলেছেন।
                                এইভাবে তাদের সাহায্যে আমরাও চেষ্টা করলাম আরো কিছু মানুষের পাশে থাকতে।
                            </div>
                        </div>
                        <div className="col-md-4 d-flex">
                            <div className="name">
                                <div className="member-img">
                                    <img src={img2} className="img-fluid" alt="NGO2" />
                                </div>
                                <div className = "p-3">
                                    <h4>Sabar Welfare Society</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 d-flex align-items-stretch">
                            <div className="details curtain">
                                আমরা দ্বিতীয় বছর পাশে থাকতে চাইলাম সবর ওয়েলফেয়ার সোসাইটিকে। সবর পুরুলিয়ার একটি জনগোষ্ঠী, যারা জীবনের স্রোতে ক্রমশ হারিয়ে চলেছে।
                                ইংরেজ সময় থেকে অত্যাচারিত হয়ে এসে আজ তারা স্বাধীন ভারতেও শিক্ষা স্বাস্থ্য ও জীবনের অটো প্রয়োজনীয় অধিকার গুলি থেকে বঞ্চিত।
                                তাই সেই সব মানুষের অধিকারের দূরত্বগুলো কিছুটা কমিয়ে তুলতে সহ্যমতো চেষ্টা করে চলেছে সব ওয়েলফেয়ার সোসাইটি।
                                আজ তাদের পাশে থেকে আমরা চেষ্টা করলাম এই সব প্রান্তিক মানুষের পাশে দাঁড়াতে।
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Donated;