import React,{useEffect,useRef} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

const Gallery = ({}) => {

  SwiperCore.use([Navigation, Pagination, A11y]);
  
  return (
    <div className="gallery">
      <div className="gallery-title">Gallery</div>
      <div className="gallery-subheading">App Screenshots</div>
      <div className="gallery-slider">
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-1.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-2.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-3.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-1.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-2.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')}src="/media/gallery-3.png" alt="Person image" />)}</SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  )
}

export default Gallery
