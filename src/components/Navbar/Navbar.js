
import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    useEffect(() => {
        
        const nav = document.querySelector('.navbar');
        const button = document.querySelector('.navbar-toggler');
        button.addEventListener('click', () => {
            if (!button.classList.contains('collapsed')) {
                nav.classList.add('moreOpacity');
                nav.classList.remove('lessOpacity');
            } else {
                nav.classList.add('lessOpacity');
                nav.classList.remove('moreOpacity');
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768 && !button.classList.contains('collapsed')) {
                nav.classList.add('moreOpacity');
                nav.classList.remove('lessOpacity');
            } else {
                nav.classList.add('lessOpacity');
                nav.classList.remove('moreOpacity');
            }
        });
    },[]);

    return (
        <>
        <nav className="navbar navbar-expand-md fixed-top navbar-dark lessOpacity">
            <div className="container-fluid">
                    <div className="logo-name">

                        <NavLink to={"/home"} className="navbar-brand site-name" tabIndex = "-1">
                            <span lang="bn">কলম</span>
                        </NavLink>
                </div>
                <button
                    className='navbar-toggler'
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded='false'
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-center' id="navbarNav">
                    <ul className="navbar-nav align-items-center" id="nav-list">
                        <li className = "nav-item">
                                <NavLink to={"/home"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" >
                                    <div className = "d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#B5CE23" className="bi bi-house-fill me-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                        </svg>
                                        <span>Home</span>
                                    </div>
                                </NavLink>
                        </li>
                        <li className = "nav-item">
                                <NavLink to={"/about"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >
                                    <div className="d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#B5CE23" className="bi bi-info-circle-fill me-2" viewBox="0 0 16 16">
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                        </svg>
                                        <span>About</span>
                                    </div>
                                </NavLink>
                        </li>
                        <li className = "nav-item">
                                <NavLink to={"/archive"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >
                                    <div className="d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#B5CE23" className="bi bi-archive-fill me-2" viewBox="0 0 16 16">
                                            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                                        </svg>
                                        <span>Archive</span>
                                    </div>
                                </NavLink>
                        </li>
                        <li className="nav-item">
                                <NavLink to={"/user"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >
                                    <div className="d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#B5CE23" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                        <span>User</span>
                                    </div>
                                </NavLink>
                        </li>
                    </ul>
            </div>
            </div>
            </nav>
            <Outlet/>
        </>
        );

}

export default Navbar;