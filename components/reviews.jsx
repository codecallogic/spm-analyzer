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
    console.log(slides)
    console.log(index)
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
    console.log(slides)
    console.log(index)
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
          <div className="reviews-slider-slide-subheading">What our customer says</div>
          <div className="reviews-slider-slide-image">
            <img src="/media/person-2.jpeg" alt="Person image" />
          </div>
          <div className="reviews-slider-slide-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laboriosam similique veritatis commodi quibusdam corporis at libero repudiandae ad amet officiis, natus enim, nobis tempora deleniti odio blanditiis! Soluta, omnis!Exercitationem maiores excepturi, dolor nesciunt iusto eum laudantium eaque. Eveniet possimus nisi fugiat quaerat suscipit voluptas iusto autem excepturi qui quo obcaecati sint, similique est quis magnam! Dolorum, commodi iusto!
          </div>
          <div className="reviews-slider-slide-name">Marcus Ryan</div>
          <div className="reviews-slider-slide-country">United States</div>
        </div>
        <div className="reviews-slider-slide slide-hide">
          <div className="reviews-slider-slide-title">Testimonials</div>
          <div className="reviews-slider-slide-subheading">What our customer says</div>
          <div className="reviews-slider-slide-image">
            <img src="/media/person.jpeg" alt="Person image" />
          </div>
          <div className="reviews-slider-slide-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laboriosam similique veritatis commodi quibusdam corporis at libero repudiandae ad amet officiis, natus enim, nobis tempora deleniti odio blanditiis! Soluta, omnis!Exercitationem maiores excepturi, dolor nesciunt iusto eum laudantium eaque. Eveniet possimus nisi fugiat quaerat suscipit voluptas iusto autem excepturi qui quo obcaecati sint, similique est quis magnam! Dolorum, commodi iusto!
          </div>
          <div className="reviews-slider-slide-name">Raymon Sanders</div>
          <div className="reviews-slider-slide-country">United States</div>
        </div>
        <div className="reviews-slider-slide slide-hide">
          <div className="reviews-slider-slide-title">Testimonials</div>
          <div className="reviews-slider-slide-subheading">What our customer says</div>
          <div className="reviews-slider-slide-image">
            <img src="/media/person-3.jpeg" alt="Person image" />
          </div>
          <div className="reviews-slider-slide-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima laboriosam similique veritatis commodi quibusdam corporis at libero repudiandae ad amet officiis, natus enim, nobis tempora deleniti odio blanditiis! Soluta, omnis!Exercitationem maiores excepturi, dolor nesciunt iusto eum laudantium eaque. Eveniet possimus nisi fugiat quaerat suscipit voluptas iusto autem excepturi qui quo obcaecati sint, similique est quis magnam! Dolorum, commodi iusto!
          </div>
          <div className="reviews-slider-slide-name">Lucille Cruz</div>
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
