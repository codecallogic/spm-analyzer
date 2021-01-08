import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'


const Nav = (props) => {

  const router = useRouter()

  const [state, setState] = useState({
    active: 'home',
    host: 'https://spmanalyzer.com/',
  })

  const {active, localhost, host} = state

  useEffect( () => {
    if(router.pathname.substr(1,) == 'sales-estimate') setState({...state, active: 'spm estimator'});
  }, [])
  
  const executeScroll = (e) => {
    document.getElementById("nav-toggle").checked = false;
    setState({...state, active: e.target.textContent.toLowerCase()})
  }
  
  return (
  <React.Fragment>
  <div className={`nav ` + (props.sticky ? 'nav-sticky': '')}>
    <div className="nav-container">
      <a href='/#home' className="nav-logo">
        <img className="nav-logo-image" src="/media/logo.png" alt="SMP-Analyzer logo"/>
        <strong className="nav-logo-strong">SPM</strong><span>Analyzer</span>
      </a>
      <div className="nav-menu">
        <div className="nav-menu-list">
          <a href="/#home" className={`nav-menu-list-item` + (active === 'home' ? ' active' : '')} onClick={executeScroll}>Home</a>
          <a href="/#features" className={`nav-menu-list-item` + (active === 'features' ? ' active' : '')} onClick={executeScroll}>Features</a>
          <a href="/#gallery" className={`nav-menu-list-item` + (active === 'gallery' ? ' active' : '')} onClick={executeScroll}>Gallery</a>
          <a href="/sales-estimate" className={`nav-menu-list-item` + (active === 'spm estimator' ? ' active' : '')} onClick={executeScroll}>SPM Estimator</a>
          <a href="/#contact" className={`nav-menu-list-item` + (active === 'contact' ? ' active' : '')} onClick={executeScroll}>Contact</a>
          <a href="/#download" className='nav-menu-list-item-download' onClick={executeScroll}>Download</a>
        </div>
      </div>
    </div>
  </div>
  <div className={`nav-mobile ` + (props.mobileSticky ? 'nav-mobile-sticky': '')}>
      <div className="nav-mobile-container">
        <a href='/#home' className="nav-logo">
          <img className="nav-logo-image" src="/media/logo.png" alt="SMP-Analyzer logo"/>
          <strong className="nav-logo-strong">SPM</strong><span>Analyzer</span>
        </a>
        <div className="nav-mobile-menu">
          <input type="checkbox" className="nav-mobile-checkbox" id="nav-toggle"/>
          <label htmlFor="nav-toggle" className="nav-mobile-button">
            <span className="nav-mobile-icon">&nbsp;</span>
          </label>
          <div className="nav-mobile-background">&nbsp;</div>
          <nav className="nav-mobile-nav">
            <ul className="nav-mobile-list">
              <li className="nav-mobile-list-item"><a href="/#home" className={`nav-mobile-list-link` + (active === 'home' ? ' active' : '')} onClick={executeScroll}>Home</a></li>
              <li className="nav-mobile-list-item"><a href="/#features" className={`nav-mobile-list-link` + (active === 'features' ? ' active' : '')} onClick={executeScroll}>Features</a></li>
              <li className="nav-mobile-list-item"><a href="/#gallery" className={`nav-mobile-list-link` + (active === 'gallery' ? ' active' : '')} onClick={executeScroll}>Gallery</a></li>
              <li className="nav-mobile-list-item"><a href="/sales-estimate" className={`nav-mobile-list-link` + (active === 'spm estimator' ? ' active' : '')} onClick={executeScroll}>SPM Estimator</a></li>
              <li className="nav-mobile-list-item"><a href="/#contact" className={`nav-mobile-list-link` + (active === 'contact' ? ' active' : '')} onClick={executeScroll}>Contact</a></li>
              <li className="nav-mobile-list-item"><a href="/#download" className='nav-mobile-list-link' onClick={executeScroll}>Download</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}

export default Nav
