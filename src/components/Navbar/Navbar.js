import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-md sticky-top navbar-light">
            <div className="container-fluid">
                <NavLink to={"/home"} className="navbar-brand"><span>কলম</span></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center" id="nav-list">
                        <li className = "nav-item">
                            <NavLink to={"/home"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link" } aria-current="page" >Home</NavLink>
                        </li>
                        <li className = "nav-item">
                            <NavLink to={"/about"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >About</NavLink>
                        </li>
                        <li className = "nav-item">
                            <NavLink to={"/archive"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >Archive</NavLink>
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