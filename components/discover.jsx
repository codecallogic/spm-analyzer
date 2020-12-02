
const Discover = ({}) => {
  
  return (
    <div id="discover" className="discover">
      <div className="discover-app">
        <div className="discover-app-container-left"></div>
        <div className="discover-app-container-right">
          <svg className="discover-app-icon discover-app-item">
            <use xlinkHref="/media/sprite.svg#icon-mobile"></use>
          </svg>
          <div className="discover-app-title discover-app-item">An on The Go Research Tool</div>
          <div className="discover-app-description discover-app-item">Quickly and easily estimate any products sales per month in the palm of your hands.</div>
        </div>
      </div>
      <div className="discover-image">
        <img src="/media/discover3.png" alt="Discover our App"/>
      </div>
    </div>
  )
}

export default Discover
