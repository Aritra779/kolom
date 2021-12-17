import { useLayoutEffect } from 'react';
import { Parallax } from "react-parallax";
import "./Home.css";
import Particles from 'react-particles-js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import settings from './particlesjs-config.json';
import img1 from "../../../Images/img-01.webp";
import img2 from "../../../Images/img-02.webp";
import img3 from "../../../Images/img-03.webp";
import img4 from "../../../Images/img-04.webp";
import LatestEdition from './LatestEdition';
import ShortAbout from './ShortAbout';
import ShortArchive from './ShortArchive';
import Introduction from './Introduction';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    
    useLayoutEffect(() => {
        /*const gsap_trig = ScrollTrigger.getAll();
        gsap_trig.map(trig => {
            if (trig !== null) {
                trig.kill();
            }
        });*/
        

        /*const boxes = gsap.utils.toArray('.box');
        boxes.forEach(box => {
            gsap.to(box, {
                scrollTrigger: {
                    id : "fade",
                    trigger: box,
                    start: "top 75%",
                    end: "bottom 20%",
                    
                    toggleActions: "restart reset restart reset"
                },
                opacity: 1,
                duration: 2,
            })
        });*/   
    },[]);
    const click = () => {
        const word = document.querySelector("#ani h2");
        word.classList.remove("animate");
        void word.offsetWidth;
        word.classList.add("animate");
    }

    return (
        <div className="main" id = "Home">
            <Parallax bgImage={img1} strength={500}>
                <div style={{ height: 500 }}>
                    <div id = "ani">
                        <h2 className="animate" id="title" onClick={click}> আমাদের স্বাধীন কলম </h2>
                    </div>
                </div>
            </Parallax>
            <div className="container-fluid intro" >
                    <Particles
                    className="particles-js"
                    params={settings} 
                />
                <Introduction/>
            </div>
            <Parallax bgImage={img3} strength={200}>
                <div style={{ height: 500 }}/>
            </Parallax>
            <div className="container-fluid intro" style={{ padding: 0 }}>
                <Particles
                    className="particles-js"
                    params={settings}        
                />
                <div style={{ backgroundColor: '#515356' }}>
                <ShortAbout />
                </div>
            </div>
            <Parallax bgImage={img2} strength={300}>
                <div style={{ height: 500 }}/>
            </Parallax>
            <div className="container-fluid intro" id = "overyears">
                <Particles
                    className="particles-js"
                    params={settings} 
                />
                <div className="box">
                    <ShortArchive/>
                </div>
            </div>
            <Parallax
                bgImage={img4}
                strength={200}
                renderLayer={(percentage) => (
                    <div>
                        <div
                            style={{
                                position: "absolute",
                                background: `rgba(255, 125, 0, ${percentage * 1})`,
                                left: "50%",
                                top: "50%",
                                borderRadius: "50%",
                                transform: "translate(-50%,-50%)",
                                width: percentage * 500,
                                height: percentage * 500
                            }}
                        />
                    </div>
                )}
            >
                <div style={{height: 500}}>
                    <div className="overimg1">Edition 6</div>
                </div>
            </Parallax>
            <LatestEdition />
        </div>
    );
}

export default Home;