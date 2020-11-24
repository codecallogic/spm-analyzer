import React, { Component } from 'react';

class Nav extends Component {
  render () {
    return (
      <div className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img className="nav-logo-image" src="/media/logo.png" alt="SMP-Analyzer logo"/>
            SPM Analyzer
          </div>
          <div className="nav-menu">
            <div className="nav-menu-list">
              <div className="nav-menu-list-item">Home</div>
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
}
export default Nav