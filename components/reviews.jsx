import {useState} from 'react'

const Reviews = ({}) => {

  const [state, setState] = useState({
    index: 0
  })

  let index = 0

  const prevSlides = () => {
    const slides = document.querySelectorAll('.reviews-slider-slide');
    index--;
    if(index < 0){
      index = slides.length - 1
    }
    slides.forEach( (slide) => {
      slide.style.display = 'none'
    })
    slides[index].style.display = 'block'
  }

  const nextSlides = () => {
    const slides = document.querySelectorAll('.reviews-slider-slide');
    index++;
    if(index > slides.length - 1){
      index = 0
    }
    slides.forEach( (slide) => {
      slide.style.display = 'none'
    })
    slides[index].style.display = 'block'
  }
  
  return (
    <div className="reviews">
      <div className="reviews-slider">
        <div className="reviews-slider-arrow" onClick={prevSlides}>
          <svg>
            <use xlinkHref="/media/sprite.svg#icon-chevron-thin-left"></use>
          </svg>
        </div>
        <div className="reviews-slider-slide">
          <div className="reviews-slider-slide-title">Testimonials</div>
          <div className="reviews-slider-slide-subheading">What our customers say</div>
          <div className="reviews-slider-slide-image">
            <img src="/media/person-2.jpeg" alt="Person image" />
          </div>
          <div className="reviews-slider-slide-text">
            Just downloaded it yesterday. Very impressed 
          </div>
          <div className="reviews-slider-slide-name">Yafaservices</div>
          <div className="reviews-slider-slide-country">United States</div>
        </div>
        <div className="reviews-slider-slide slide-hide">
          <div className="reviews-slider-slide-title">Testimonials</div>
          <div className="reviews-slider-slide-subheading">What our customers say</div>
          <div className="reviews-slider-slide-image">
            <img src="/media/person.jpeg" alt="Person image" />
          </div>
          <div className="reviews-slider-slide-text">
            Great app for new amazon sellers! This app is very cool! I think it would be best for beginners to have a ballpark of estimated sales on Amazon. The interface is very easy to use and understand.
          </div>
          <div className="reviews-slider-slide-name">dlacroix93</div>
          <div className="reviews-slider-slide-country">United States</div>
        </div>
        <div className="reviews-slider-slide slide-hide">
          <div className="reviews-slider-slide-title">Testimonials</div>
          <div className="reviews-slider-slide-subheading">What our customers say</div>
          <div className="reviews-slider-slide-image">
            <img src="/media/person-3.jpeg" alt="Person image" />
          </div>
          <div className="reviews-slider-slide-text">
            Product research tool. One of the best I've used actually I've never used another tool as great as SPM analyzer.
          </div>
          <div className="reviews-slider-slide-name">JTS88</div>
          <div className="reviews-slider-slide-country">United States</div>
        </div>
        <div className="reviews-slider-arrow" onClick={nextSlides}>
          <svg>
            <use xlinkHref="/media/sprite.svg#icon-chevron-thin-right"></use>
          </svg>
        </div>
      </div>   
    </div>
  )
}

export default Reviews
