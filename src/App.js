import './App.css';
import React , { useEffect, useState, Suspense } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

const Home = React.lazy(() => import("./components/Body/Home/Home"));
const About = React.lazy(() => import("./components/Body/About/About"));
const Archive = React.lazy(() => import("./components/Body/Archive/Archive"));
function App() {
    const loc = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (loc.pathname === "/") {
            navigate("/home");
        }
    });

    
  return (
    <>
        <Suspense fallback={<Loading/>}>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="archive" element={<Archive />} />
                </Routes>
            </main>
            <Footer />
        </Suspense>         
    </>
  );
}

export default App;
