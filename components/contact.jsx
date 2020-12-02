
const Contact = ({}) => {
  
  return (
    <div id="contact" className="contact-container">
    <div className="contact">
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="contact-info-item-box">
            <svg className="contact-info-item-box-icon">
              <use xlinkHref="/media/sprite.svg#icon-location-pin"></use>
            </svg>
            <div className="contact-info-item-box-text">Sacramento, CA</div>
          </div>
          <div className="contact-info-item-box">
            <svg className="contact-info-item-box-icon">
              <use xlinkHref="/media/sprite.svg#icon-mail"></use>
            </svg>
            <div className="contact-info-item-box-text-color">info@spmanalyzer.com</div>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="contact-info-item-box">
            <svg className="contact-info-item-box-icon">
                <use xlinkHref="/media/sprite.svg#icon-phone"></use>
            </svg>
            <div className="contact-info-item-box-text-color">+1(209) 813-0257</div>
          </div>
        </div>
      </div>
      <div className="contact-social-media">
        <div className="contact-social-media-icon">
          <a href="https://m.facebook.com/spmanalyzer/" target="_blank">
          <svg>
              <use xlinkHref="/media/sprite.svg#icon-facebook"></use>
          </svg>
          </a>
        </div>
        <div className="contact-social-media-icon">
          <svg>
              <use xlinkHref="/media/sprite.svg#icon-twitter"></use>
          </svg>
        </div>
        <a href="https://www.instagram.com/spm_analyzer/?hl=en" target="_blank">
        <div className="contact-social-media-icon">
          <svg>
              <use xlinkHref="/media/sprite.svg#icon-instagram"></use>
          </svg>
        </div>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Contact
