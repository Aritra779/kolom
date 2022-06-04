import { useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import Carousel from './Carousel/Carousel';
import Contributors from './Contributors/Contributors';
import Editions from './Editions/Editions';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Archive = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        }
        else {
            setTimeout(() => {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
        const gsap_trig = ScrollTrigger.getAll();
        for (let trig of gsap_trig) {
            if (!trig['vars']['id'].startsWith('Archive')) {
                trig.kill();
            }
        }
        const navbarNav = document.getElementById("navbarNav");
        const nav = document.querySelector('.navbar');
        if (navbarNav && navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
            nav.classList.add('lessOpacity');
            nav.classList.remove('moreOpacity');
        }
    }, [pathname, hash, key]);

    return (
        <div id="Archive">
            <Carousel />
            <Contributors />
            <Editions/>
        </div>
    );
}

export default Archive;