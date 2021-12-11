import { useState, useLayoutEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const [activeIdx, setActiveIdx] = useState(0);
    const values = ["Home", "About", "Archive"];
    useLayoutEffect(() => {
        const actvElmn = document.getElementById("Home") || document.getElementById("About") || document.getElementById("Archive");
        values.map((key) => {
            if (key === actvElmn.id) {
                setActiveIdx(values.indexOf(key));
            }
        });
    }, []);

    
    const handleClick = (index) => {
        setActiveIdx(index);
        window.scrollTo(0,0);
    }

    /*useEffect(() => {
        document.querySelector('.navbar-toggler').addEventListener("blur", (e) => {
            var screenWidth = window.innerWidth;
            document.addEventListener('click', function (e) {
                e = e || window.event;
                var target = e.target.parentElement.parentElement.parentElement || e.srcElement;
                if ((target !== document.getElementById('navbarNav')) && screenWidth < 768) {
                    document.getElementById("navbarNav").classList.remove('show');
                };
            }, false);
            /*if (screenWidth < 768) {
                document.querySelector(".navbar-toggler").classList.add('collapsed');
                
            }
        })
    },[]);*/

    return (
        <nav className="navbar navbar-expand-md sticky-top navbar-light">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand"><span onClick={() => handleClick(0)}>কলম</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav align-items-center" id="nav-list">
                        <li className={activeIdx === 0 ? "nav-item active" : "nav-item"}>
                            <Link to={"/home"} className="nav-link" aria-current="page" onClick={() => handleClick(0)}>Home</Link>
                        </li>
                        <li className={activeIdx === 1 ? "nav-item active" : "nav-item"}>
                            <Link to={"/about"} className="nav-link" onClick={() => handleClick(1)}>About</Link>
                        </li>
                        <li className={activeIdx === 2 ? "nav-item active" : "nav-item"}>
                            <Link to={"/archive"} className="nav-link" onClick={() => handleClick(2)}>Archive</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );

}

export default Navbar;