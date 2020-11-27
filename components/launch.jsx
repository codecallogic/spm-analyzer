
const Launch = ({}) => {
  
  return (
    <div className="launch">
      <div className="launch-container">
        <img src="/media/iphone-x.png" alt="iPhone"/>
      </div>
      <div className="launch-content">
        <svg className="launch-content-icon">
          <use xlinkHref="/media/sprite.svg#icon-rocket"></use>
        </svg>
        <div className="launch-content-title">
          Launch your App
        </div>
        <div className="launch-content-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit, ipsum dolor sit, amet consectetur.
        </div>
      </div>
    </div>
  )
}

export default Launch
