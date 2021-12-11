import TimeLine from './TimeLine/TimeLine';
import Credits from './Credits/Credits';
import Editors from './Editors/Editors';
import Donations from './Donations/Donations';
import Pen from './Pen/Pen';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const About = () => {
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
    }, [pathname, hash, key]);
    return (
        <div id="About">
            <TimeLine />
            <Credits />
            <Editors />
            <Donations />
            <Pen/>
        </div>
        );
}

export default About;