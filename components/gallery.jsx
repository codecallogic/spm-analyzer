import React, {useState, useEffect} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import useResizeAware from 'react-resize-aware';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper.scss';

const Gallery = ({}) => {

  const [state, setState] = useState({
    spaceGap: 30,
    slidesPerView: 3,
    autoSlides: false
  })

  const {slidesPerView, spaceGap, autoSlides} = state
  
  SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

  const [resizeListener, sizes] = useResizeAware();
  
  useEffect(() => {
    if (window.innerWidth < 600) {
      setState({...state, spaceGap: 0, autoSlides: true, slidesPerView: 1})
    }
    if (window.innerWidth > 600) {
      setState({...state, spaceGap: 25, autoSlides: false})
    }
  }, [sizes.width]);
  
  return (
    <div id="gallery" className="gallery-container">
    {resizeListener}
    <div className="gallery">
      <div className="gallery-title">Gallery</div>
      <div className="gallery-subheading">App Screenshots</div>
      <div className="gallery-slider">
      {!autoSlides && 
      <Swiper
        spaceBetween={spaceGap}
        slidesPerView={slidesPerView}
        loop
        autoplay={true}
        pagination={{ clickable: true }}
        >
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-1.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-2.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-3.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-4.jpg" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-5.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-6.png" alt="Person image" />)}</SwiperSlide>
      </Swiper>
      }
      { autoSlides && 
      <Swiper
        spaceBetween={spaceGap}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={true}
        loop
        pagination={{ clickable: true }}
        >
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-1.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-2.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-3.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-4.jpg" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-5.png" alt="Person image" />)}</SwiperSlide>
        <SwiperSlide>{({isNext, isActive}) => (<img className={(isNext ? 'next ' : 'next-prev ') + (isActive ? 'active-slider': '')} src="/media/gallery-6.png" alt="Person image" />)}</SwiperSlide>
      </Swiper>
      }
      </div>
    </div>
    </div>
  )
}

export default Gallery
