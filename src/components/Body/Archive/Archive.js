import './Archive.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import Contributors from './Contributors/Contributors';
import Editions from './Editions/Editions';


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