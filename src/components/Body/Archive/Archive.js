import './Archive.css';

import Carousel from './Carousel/Carousel';
import Contributors from './Contributors/Contributors';
import Editions from './Editions/Editions';


const Archive = () => {

    return (
        <div id="Archive">
            <Carousel />
            <Contributors />
            <Editions/>
        </div>
    );
}

export default Archive;