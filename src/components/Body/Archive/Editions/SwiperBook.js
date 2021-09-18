import Effects from '../Effects/Effects';
// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import '../Carousel/Carousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Keyboard,Lazy, Navigation, Pagination, Zoom} from 'swiper';

SwiperCore.use([Keyboard,Lazy, Zoom, Pagination, Navigation]);


const importAll = (r) => {
    let images = {};
    r.keys().map(item => {    
        images[item.replace('./', '')] = r(item);  
    });
    return images;
}

const SwiperBook = ({ content }) => {
    var images;
    switch (content) {
        case 1: images = importAll(require.context('../../../../Materials/1424', false, /\.jpg/));
            break;
        case 2: images = importAll(require.context('../../../../Materials/1425', false, /\.jpg/));
            break;
        case 3: images = importAll(require.context('../../../../Materials/1426', false, /\.jpg/));
            break;
        case 4: images = importAll(require.context('../../../../Materials/1427', false, /\.jpg/));
            break;
        case 5: images = importAll(require.context('../../../../Materials/1427', false, /\.jpg/));
            break;
        case 6: images = importAll(require.context('../../../../Materials/1427', false, /\.jpg/));
            break;
        default: break;
    }

    return (
        <div>
            <Effects
                id="fourth"
                title={`Edition ${content} Carousel`}
            />
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                lazy={true}
                zoom={true}
                grabCursor={true}
                pagination={{
                    "type": "fraction"
                }}
                navigation={true}
                keyboard={{
                    "enabled": true
                }}
                
            >
                {
                    Object.entries(images).map(image => {
                        return (
                            <SwiperSlide key={image}>
                                <div className = "swiper-zoom-container">
                                    <img data-src={images[image[0]]['default']} className="swiper-lazy" />
                                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );  
}

export default SwiperBook;