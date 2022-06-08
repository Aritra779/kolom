import Effects from '../../Effects/Effects';


// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import '../Carousel/Carousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard,Lazy, Navigation, Pagination, Zoom} from 'swiper';


const importAll = (r) => {
    let images = {};
    for (let item of r.keys()) {
        images[item.replace('./','')] = r(item);
    }
    return images;
}

const SwiperBook = ({ content }) => {
    var images;
    switch (content) {
        case 1: images = importAll(require.context('../../../../Materials/1424', false, /\.webp/));
            break;
        case 2: images = importAll(require.context('../../../../Materials/1425', false, /\.webp/));
            break;
        case 3: images = importAll(require.context('../../../../Materials/1426', false, /\.webp/));
            break;
        case 4: images = importAll(require.context('../../../../Materials/1427', false, /\.webp/));
            break;
        case 5: images = importAll(require.context('../../../../Materials/1428', false, /\.webp/));
            break;
        case 6: images = importAll(require.context('../../../../Materials/1428_oct', false, /\.webp/));
            break;
        default: break;
    }
    return (
        <div>
            <Effects
                id="Archive_SwiperBook"
                title={`Edition ${content} Carousel`}
            />
            <Swiper
                modules={[Keyboard, Lazy, Zoom, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                lazy={{
                    loadOnTransitionStart : true
                }}
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
                            <SwiperSlide key={image[0]}>
                                <div className="swiper-zoom-container">
                                    <img data-src={image[1]} className="swiper-lazy" alt={`Page - ${image[0].replace('.webp', '')}`} />
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