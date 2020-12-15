import {useState} from 'react'

const Nav = (props) => {

  const [state, setState] = useState({
    active: 'home',
    host: 'https://spmanalyzer.com/',
  })

  const {active, localhost, host} = state
  
  const executeScroll = (e) => {
    setState({...state, active: e.target.textContent.toLowerCase()})
  }
  
  return (
  <div className={`nav ` + (props.sticky ? 'nav-sticky': '')}>
    <div className="nav-container">
      <a href='#home' className="nav-logo">
        <img className="nav-logo-image" src="/media/logo.png" alt="SMP-Analyzer logo"/>
        <strong className="nav-logo-strong">SPM</strong><span>Analyzer</span>
      </a>
      <div className="nav-menu">
        <div className="nav-menu-list">
          <a href={ host + `#home`} className={`nav-menu-list-item` + (active === 'home' ? ' active' : '')} onClick={executeScroll}>Home</a>
          <a href={ host + `#features`} className={`nav-menu-list-item` + (active === 'features' ? ' active' : '')} onClick={executeScroll}>Features</a>
          <a href={ host + `#gallery`} className={`nav-menu-list-item` + (active === 'gallery' ? ' active' : '')} onClick={executeScroll}>Gallery</a>
          <a href={ host + `#home`} className={`nav-menu-list-item` + (active === 'spm estimator' ? ' active' : '')} onClick={executeScroll}>SPM Estimator</a>
          <a href={ host + `#contact`} className={`nav-menu-list-item` + (active === 'contact' ? ' active' : '')} onClick={executeScroll}>Contact</a>
          <a href={ host + `#download`} className='nav-menu-list-item-download' onClick={executeScroll}>Download</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Nav
