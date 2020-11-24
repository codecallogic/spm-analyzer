const Nav = (props) => {
  return (
  <div className={`nav ` + (props.sticky ? 'nav-sticky': '')}>
    <div className="nav-container">
      <div className="nav-logo">
        <img className="nav-logo-image" src="/media/logo.png" alt="SMP-Analyzer logo"/>
        <strong className="nav-logo-strong">SPM</strong><span>Analyzer</span>
      </div>
      <div className="nav-menu">
        <div className="nav-menu-list">
          <div className="nav-menu-list-item active">Home</div>
          <div className="nav-menu-list-item">Features</div>
          <div className="nav-menu-list-item">Gallery</div>
          <div className="nav-menu-list-item">SPM Estimator</div>
          <div className="nav-menu-list-item">Contact</div>
          <div className="nav-menu-list-item-download">Download</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Nav
