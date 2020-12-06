
const Features = ({}) => {
  
  return (
    <div id="features" className="features-container">
    <div className="features">
      <div className="features-title">Highlights</div>
      <div className="features-subheading">Features</div>
      <div className="features-list">
        <div className="features-list-item">
          <div className="features-list-item-icon">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-shop"></use>
            </svg>
          </div>
          <div className="features-list-item-description">
            <div className="features-list-item-description-heading">
              All Markets
            </div>
            <div className="features-list-item-description-text">
              <span>Amazon USA</span>
              <span>United Kingdom</span>
              <span>Canada</span>
              <span>Germany</span>
              <span>France</span>
              <span>Italy</span>
              <span>Spain</span>
              <span>India</span>
              <span>Mexico</span>
            </div>
          </div>
        </div>
        <div className="features-list-item">
          <div className="features-list-item-icon">
          <svg>
            <use xlinkHref="/media/sprite.svg#icon-drawer"></use>
          </svg>
          </div>
          <div className="features-list-item-description">
            <div className="features-list-item-description-heading">
              Each Category
            </div>
            <div className="features-list-item-description-text">
              <span>Baby</span>
              <span>Beauty</span>
              <span>Books</span>
              <span>Camera & Photo</span>
              <span>Clothing & Accessories</span>
              <span>Consumer Electronics</span>
              <span>Grocery & Gourmet Foods</span>
              <span>Health & Personal Care</span>
              <span>Home & Garden</span>
              <span>Industrial & Scientific (BISS)</span>
              <span>Kindle Accessories</span>
              <span>Luggage & Travel Accessories</span>
              <span>Musical Instruments</span>
              <span>Office Products</span>
              <span>Outdoors</span>
              <span>Personal Computers</span>
              <span>Pet Supplies Shoes</span>
              <span>Handbags & Sunglasses</span>
              <span>Software</span>
              <span>Sports</span>
              <span>Tools & Home Improvement</span>
              <span>Toys</span>
              <span>Video Games</span>
            </div>
          </div>
        </div>
        <div className="features-list-item">
          <div className="features-list-item-icon">
          <svg>
            <use xlinkHref="/media/sprite.svg#icon-directions_run"></use>
          </svg>
          </div>
          <div className="features-list-item-description">
            <div className="features-list-item-description-heading">
              Instant Results
            </div>
            <div className="features-list-item-description-text">
              <span>Literally.. well it takes about 2 seconds for our analyzing robots to crunch their numbers. Lets face it, being able to estimate sales in the palm of your hands at anytime is pretty darn convenient.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features
