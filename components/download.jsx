
const Download = ({}) => {
  
  return (
    <div id="download" className="download-container">
    <div className="download">
      <svg className="download-icon">
        <use xlinkHref="/media/sprite.svg#icon-mobile"></use>
      </svg>
      <div className="download-title">Download Anywhere</div>
      <div className="download-text">Available for all major mobile and desktop platforms. Rapidiously visualize optimal ROI rather than enterprise methods of empowerment</div>
      <div className="download-buttons">
          <a href="" className="download-buttons-badge"><img src="/media/apple-store-badge.png" alt="Apple Store Badge"/> App Store</a>
          <a href="" className="download-buttons-badge"><img src="/media/google-play-badge.png" alt="Google Play Badge"/> Google Play</a>
      </div>
      <div className="download-small-text">Works on iOS 10.0.5+. Android kit kat and above.</div>
    </div>
    </div>
  )
}

export default Download
