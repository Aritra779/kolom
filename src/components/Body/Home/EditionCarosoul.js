import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import {Autoplay, EffectCube, Lazy, Pagination} from 'swiper';

import { useEffect, useState } from "react";

const fetchData = async (edtn) => {
    let images;
    if(edtn === 1){
        images = await import('../../../Materials/1424');
    }else if(edtn === 4){
        images = await import('../../../Materials/1427');
    }else if(edtn === 6){
        images = await import('../../../Materials/1428_oct');
    }
    return images.default;
}

const EditionCarosoul = ({edtn}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchData(edtn).then(result => setImages(result)) 
    },[edtn])

    if(!images) return <aside style={{border : "2px solid black", height : "100%"}}>Loading . . .</aside>
    return(
        <Swiper
            effect={"cube"}
            grabCursor={true}
            lazy = {{
                loadOnTransitionStart : true
            }}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
                pauseOnMouseEnter : true
            }}
            cubeEffect={{
                shadow : true,
                slideShadows : false
            }}
            loop = {true}
            pagination={{
                dynamicBullets : true,
                clickable : true
            }}
            modules={[EffectCube, Pagination, Autoplay, Lazy]}
        >
          {
              images.map(slide => {
                  return(
                  <SwiperSlide key = {images.indexOf(slide)}>
                    <img data-src={slide} alt = {`Edition ${edtn} preview`} className="swiper-lazy" />
                    <div className="swiper-lazy-preloader"></div>
                  </SwiperSlide>
                  )
              })
          }
        </Swiper>
    )
}

export default EditionCarosoul;