import img1 from '../../../../Materials/1424/01.webp';
import img2 from '../../../../Materials/1425/01.webp';
import img3 from '../../../../Materials/1426/01.webp';
import img4 from '../../../../Materials/1427/001.webp';
import img5 from '../../../../Materials/1428/01.webp';
import img6 from '../../../../Materials/1428_oct/001.webp';


// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Carousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Lazy, Navigation , Pagination , Autoplay} from 'swiper';



const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Lazy, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            grabCursor = {true}
            lazy={true}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
                "delay": 4000,
                "disableOnInteraction": false
            }}
            pagination={{
                "dynamicBullets" : true,
                "clickable": true
                }}
            navigation={true}
            breakpoints={{
                "465": {
                    "slidesPerView": 1.5,
                    "spaceBetween": 100
                },
                "680": {
                    "slidesPerView": 2,
                    "spaceBetween": 70
                },
                "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 70
                },
                "1200": {
                    "slidesPerView": 4,
                    "spaceBetween": 100
                }
            }}
            >
            <SwiperSlide>
                {/*<!-- Required swiper-lazy class and image source specified in data-src attribute -->*/}
                <img data-src={ img1} className="swiper-lazy" alt = "1424_Edition"/>
                {/*<!-- Preloader image -->*/}
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide><SwiperSlide>
                {/*<!-- Required swiper-lazy class and image source specified in data-src attribute -->*/}
                <img data-src={img2} className="swiper-lazy" alt = "1425_Edition"/>
                {/*<!-- Preloader image -->*/}
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide><SwiperSlide>
                {/*<!-- Required swiper-lazy class and image source specified in data-src attribute -->*/}
                <img data-src={ img3} className="swiper-lazy" alt = "1426_Edition"/>
                {/*<!-- Preloader image -->*/}
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide><SwiperSlide>
                {/*<!-- Required swiper-lazy class and image source specified in data-src attribute -->*/}
                <img data-src={img4} className= "swiper-lazy" alt = "1427_Edition"/>
                {/*<!-- Preloader image -->*/}
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide><SwiperSlide>
                {/*<!-- Required swiper-lazy class and image source specified in data-src attribute -->*/}
                <img data-src={img5} className="swiper-lazy" alt = "1428_may_Edition"/>
                {/*<!-- Preloader image -->*/}
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide><SwiperSlide>
                {/*<!-- Required swiper-lazy class and image source specified in data-src attribute -->*/}
                <img data-src={img6} className="swiper-lazy" alt="1428_oct_Edition"/>
                {/*<!-- Preloader image -->*/}
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
            </Swiper>
        );
}

export default Carousel;