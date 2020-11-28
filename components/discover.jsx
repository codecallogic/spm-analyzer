
const Discover = ({}) => {
  
  return (
    <div id="discover" className="discover">
      <div className="discover-app">
        <div className="discover-app-container-left"></div>
        <div className="discover-app-container-right">
          <svg className="discover-app-icon discover-app-item">
            <use xlinkHref="/media/sprite.svg#icon-mobile"></use>
          </svg>
          <div className="discover-app-title discover-app-item">Discover our App</div>
          <div className="discover-app-description discover-app-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse reiciendis quia eaque.</div>
        </div>
      </div>
      <div className="discover-image">
        <img src="/media/discover3.png" alt="Discover our App"/>
      </div>
    </div>
  )
}

export default Discover
