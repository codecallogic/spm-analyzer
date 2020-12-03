
const Launch = ({}) => {
  
  return (
    <div className="launch">
      <div className="launch-container">
        <img src="/media/launch.png" alt="iPhone"/>
      </div>
      <div className="launch-content">
        <svg className="launch-content-icon">
          <use xlinkHref="/media/sprite.svg#icon-rocket"></use>
        </svg>
        <div className="launch-content-title">
          How to calculate sales rank
        </div>
        <div className="launch-content-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit, ipsum dolor sit, amet consectetur.
        </div>
      </div>
    </div>
  )
}

export default Launch
