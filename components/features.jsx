
const Features = ({}) => {
  
  return (
    <div className="features-container">
    <div className="features">
      <div className="features-title">Highlights</div>
      <div className="features-subheading">Features you love</div>
      <div className="features-list">
        <div className="features-list-item">
          <svg>
            <use xlinkHref="/media/sprite.svg#icon-happy2"></use>
          </svg>
          <div className="features-list-item-description">
            <div className="features-list-item-description-heading">
              Simple
            </div>
            <div className="features-list-item-description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quis temporibus.
            </div>
          </div>
        </div>
        <div className="features-list-item">
          <svg>
            <use xlinkHref="/media/sprite.svg#icon-cog"></use>
          </svg>
          <div className="features-list-item-description">
            <div className="features-list-item-description-heading">
              Simple
            </div>
            <div className="features-list-item-description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quis temporibus.
            </div>
          </div>
        </div>
        <div className="features-list-item">
        <svg>
            <use xlinkHref="/media/sprite.svg#icon-lock"></use>
          </svg>
          <div className="features-list-item-description">
            <div className="features-list-item-description-heading">
              Secure
            </div>
            <div className="features-list-item-description-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quis temporibus.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features
