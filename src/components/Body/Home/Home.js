import { useEffect, lazy, Suspense} from 'react';
import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from '../../Loading/Loading';

import img1 from "../../../Images/img-01.webp";
import img2 from "../../../Images/img-02.webp";
import img3 from "../../../Images/img-03.webp";
import img4 from "../../../Images/img-04.webp";
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

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
        <ParallaxProvider>
        <div className="main" id="Home">
            <Suspense fallback={<Loading />}>
                <ParallaxBanner
                    layers={[{ image: img1, speed: -30 }]}
                    className="aspect-[2/1]" style={{ height : 500 }}
                >
                    <div style={{ height: 500 }}>
                        <div id="ani">
                            <h2 className="animate" id="title" onClick={click} lang="bn"> আমাদের স্বাধীন কলম </h2>
                        </div>
                    </div>
                </ParallaxBanner>

                <section id = "Intro" className="container-fluid intro" style={{ padding: 0 }}>
                    <Introduction />
                </section>
            </Suspense>
            <Suspense fallback={<Loading/>}>
                <section className="container-fluid intro" style={{ padding: 0 }}>
                    <ParallaxBanner
                        layers={[{ image: img2, speed: 30 }]}
                        className="aspect-[2/1]" style={{ height: 500 }}
                    />
                    <ShortAbout />
                </section>
            </Suspense>
            <Suspense fallback={<Loading/>}>

                <section className="container-fluid intro" id="overyears">
                    <ParallaxBanner
                        layers={[{ image: img3, speed: -30 }]}
                        className="aspect-[2/1]" style={{ height: 500 }}
                    />
                    <ShortArchive/>
                </section>
            </Suspense>
            <Suspense fallback={<Loading />}>
                <ParallaxBanner
                    layers={[{ image: img4, speed: 30 }]}
                    className="aspect-[2/1]" style={{ height: 500 }}
                />
                <LatestEdition />
            </Suspense>
            </div>
        </ParallaxProvider>
    );
}

export default Home;