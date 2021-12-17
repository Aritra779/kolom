import './App.css';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Body/Home/Home";
import About from "./components/Body/About/About";
import Archive from "./components/Body/Archive/Archive";

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
          <Navbar />
          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="home" element={<Home />} />
                  <Route path="about" element={<About/>} />
                  <Route path="archive" element={<Archive/>} />
              </Routes>
          </div>
          <Footer/>
    </>
  );
}

export default App;
