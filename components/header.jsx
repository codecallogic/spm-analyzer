import Nav from '../components/nav'
import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Header = ({}) => {
  const [stickOnScroll, setstickOnScroll] = useState({
    navSticky: false,
    mobileSticky: false
  })
  
  const {navSticky, mobileSticky} = stickOnScroll
  
  useScrollPosition(({ prevPos, currPos }) => {
    if (window.innerWidth >= 992) {
      currPos.y === 0 ? setstickOnScroll({...stickOnScroll, navSticky: false}) : setstickOnScroll({...stickOnScroll, navSticky: true});
    }
    if (window.innerWidth < 992) {
      currPos.y === 0 ? setstickOnScroll({...stickOnScroll, mobileSticky: false}) : setstickOnScroll({...stickOnScroll, mobileSticky: true});
    }
  }, [stickOnScroll])

  return (
    <div className="main-container">
      <Nav
        sticky={navSticky}
        mobileSticky={mobileSticky}
      />
      <div id="home" className="header" style={ navSticky ? {padding: '15rem 0 0 0'} : {} }>
        <div className="header-title">SPM ANALYZER</div>
        <div className="header-subheading">
          <p>A sales rank estimator application for Amazon sellers. </p>
          <p>Download today on the iOS and Google Play Store</p>
        </div>
        <div className="header-download">
          <a href="https://apps.apple.com/us/app/spm-sales-rank-analyzer-tool/id1435825571" target="_blank" className="header-download-badge"><img src="/media/apple-store-badge.png" alt="Apple Store Badge"/> App Store</a>
          <a href="https://play.google.com/store/apps/details?id=com.app.spmanalyzer&hl=en_US" target="_blank" className="header-download-badge"><img src="/media/google-play-badge.png" alt="Google Play Badge"/> Google Play</a>
        </div>
        <div className="header-image">
          <img src="/media/header-iphone-half.png" alt="iPhone App Example"/>
        </div>
      </div>
    </div>
    
  )
}

export default Header
