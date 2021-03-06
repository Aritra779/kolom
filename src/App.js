import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, Suspense, lazy } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import WrongPath from "./components/Loading/WrongPath";

const Home = lazy(() => import("./components/Body/Home/Home"));
const About = lazy(() => import("./components/Body/About/About"));
const Archive = lazy(() => import("./components/Body/Archive/Archive"));
//const User = lazy(() => import("./components/Body/User/User"));
//const Profile = lazy(() => import("./components/Body/User/Profile/Profile"));

function App() {
    const loc = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (loc.pathname === "/") {
            navigate("/home");
        }
    }, [loc.pathname,navigate]);

    const navButtonController = () => {
        const navDiv = document.getElementById("navbarNav");
        const navButton = document.querySelector('.navbar-toggler');
        if (window.innerWidth < 768 && navDiv && navDiv.classList.contains('show')) {
          navButton.click();
        }
    }
  return (
    <>
          <Suspense fallback={<Loading />}>
                  <Navbar />
                  <main onClick={navButtonController}>
                  
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                              <Route path="archive" element={<Archive />} />
                              <Route path="*" element={<WrongPath/>}/>
                              {/*<Route path="user" element={<User />} />
                        <Route path="user/profile/*" element={<Profile />} />*/}
                    </Routes>
                  </main>
                  <Footer />
        </Suspense>         
    </>
  );
}

export default App;
