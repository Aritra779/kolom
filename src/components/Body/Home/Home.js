import { useEffect, lazy, Suspense} from 'react';
import { Parallax } from "react-parallax";
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from '../../Loading/Loading';

import img1 from "../../../Images/img-01.webp";
import img2 from "../../../Images/img-02.webp";
import img3 from "../../../Images/img-03.webp";
import img4 from "../../../Images/img-04.webp";

gsap.registerPlugin(ScrollTrigger);

const Introduction = lazy(() => import('./Introduction'));
const ShortAbout = lazy(() => import('./ShortAbout'));
const ShortArchive = lazy(() => import('./ShortArchive'));
const LatestEdition = lazy(() => import('./LatestEdition'));

const Home = () => {
    useEffect(() => {

        const navbarNav = document.getElementById("navbarNav");
        const nav = document.querySelector('.navbar');
        if (navbarNav && navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
            nav.classList.add('lessOpacity');
            nav.classList.remove('moreOpacity');
        }
        const gsap_trig = ScrollTrigger.getAll();
        for (let trig of gsap_trig) {
            if (!trig['vars']['id'].startsWith("Home")) {
                trig.kill();
            }
        }
        window.scrollTo(0,0);
    }, []);

    const click = () => {
        const word = document.querySelector("#ani h2");
        word.classList.remove("animate");
        void word.offsetWidth;
        word.classList.add("animate");
    }

    return (
        <div className="main" id="Home">
            <Suspense fallback={<Loading/>}>
                <Parallax bgImage={img1} bgImageAlt="Background Image 1" strength={500} bgImageStyle={{ width: '100vw' }}>
                    <div style={{ height: 500 }}>
                        <div id = "ani">
                            <h2 className="animate" id="title" onClick={click} lang = "bn"> আমাদের স্বাধীন কলম </h2>
                        </div>
                    </div>
                </Parallax>
                <section id = "Intro" className="container-fluid intro" style={{ padding: 0 }}>
                    <Introduction />
                </section>
            </Suspense>
            <Suspense fallback={<Loading/>}>
                <Parallax bgImage={img3} strength={200}>
                    <div style={{ height: 500 }}/>
                </Parallax>
                <section className="container-fluid intro" style={{ padding: 0 }}>
                    <ShortAbout />
                </section>
            </Suspense>
            <Suspense fallback={<Loading/>}>
                <Parallax bgImage={img2} strength={300}>
                    <div style={{ height: 500 }}/>
                </Parallax>
                <section className="container-fluid intro" id = "overyears">
                    <ShortArchive/>
                </section>
            </Suspense>
            <Suspense fallback={<Loading/>}>
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
            </Suspense>
            </div>
    );
}

export default Home;