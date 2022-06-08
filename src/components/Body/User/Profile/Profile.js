import { lazy, useState, Suspense, useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import './Profile.css';

const Landing = lazy(() => import("./Landing/Landing"));
const Update = lazy(() => import("./Update/Update"));
const Status = lazy(() => import("./Status/Status"));
const Upload = lazy(() => import("./Upload/Upload"));
const Review = lazy(() => import("./Review/Review"));

const Profile = () => {

    const [moderator, setModerator] = useState(true);
    const [visibleSidebar, setVisibleSidebar] = useState(false);

    useEffect(() => {
        const navbarNav = document.getElementById("navbarNav");
        const nav = document.querySelector('.navbar');
        if (navbarNav && navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
            nav.classList.add('lessOpacity');
            nav.classList.remove('moreOpacity');
        }
    },[]);
    
    window.addEventListener('click', (event) => {
        const dom = document.getElementById("Profile");
        const sidebar = document.querySelector(".left-sidebar");
        const navbar = document.querySelector(".navbar");
        const footer = document.querySelector(".footer");
        if (dom
            && !sidebar.contains(event.target)
            && !navbar.contains(event.target)
            && !footer.contains(event.target)
        ) {
            setVisibleSidebar(false);
        }
    });

    return (
        <div id="Profile">
            <aside className={`left-sidebar ${visibleSidebar ? "" : "minimize"}`}>
                <div className="inner">
                    <div className="user-img-bg">
                        <div className="user-background"></div>
                    </div>
                    <div className="user-profile d-flex justify-content-around align-items-center flex-wrap">
                        <div className="user-image d-none d-sm-block">

                        </div>
                        <div className="user-info text-center">
                            <p className="user-name">Aritra Dutta</p>
                            <p className="user-location">
                                <span className="locationIconWrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="100%" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                </span>
                                Kolkata
                            </p>
                            <NavLink to={"/user/profile/update"} type="button" className="btn btn-outline-success">Update Profile</NavLink>
                        </div>
                    </div>
                </div>
                <button className="toggle-button" onClick={() => { setVisibleSidebar(!visibleSidebar) }}>
                    {
                        visibleSidebar ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#fff" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#fff" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                    }
                </button>
            </aside>
            <section className={`main-content ${visibleSidebar ? "lessopacity" : ""}`}>
                <Suspense fallback={
                    <div style={{ position: "absolute", height: "100%", width: "100%" }}>
                        <Loading />
                    </div>
                }>
                    <Routes>
                        <Route path="/" element={<Landing moderator={moderator} />} />
                        <Route path="/update" element={<Update />} />
                        <Route path="/status" element={<Status />} />
                        <Route path="/upload" element={<Upload />} />
                        <Route path="/review" element={<Review />} />
                    </Routes>
                </Suspense>
            </section>
        </div>
    );
}

export default Profile;