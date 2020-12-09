import React,{useEffect,useRef} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

const Gallery = ({}) => {

  SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);
  
  return (
    <div id="gallery" className="gallery-container">
    <div className="gallery">
      <div className="gallery-title">Gallery</div>
      <div className="gallery-subheading">App Screenshots</div>
      <div className="gallery-slider">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop
        autoplay={true}
        pagination={{ clickable: true }}
        >
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-1.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-2.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-3.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-4.jpg" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-5.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-6.png" alt="Person image" />)}</SwiperSlide>
      </Swiper>
      </div>
    </div>
    </div>
  )
}

export default Gallery
