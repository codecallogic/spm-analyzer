import Nav from '../components/nav'
import withUser from './withUser'
import {useEffect, useState} from 'react'

const Pricing = ({newUser}) => {

  const [user, setUser] = useState(null)
  
  useEffect(() => {
    if(newUser) setUser(JSON.parse(decodeURIComponent(newUser)))
  }, [])
  
  return (
    <>
    <Nav user={newUser}></Nav>
    <div className="pricing">
      <h1 className="pricing-heading">Pricing</h1>
      <div className="pricing-plans">
        <div className="pricing-plans-option">
          <div className="banner-lite"><h1>SPM Analyzer Lite</h1></div>
          <span>FREE <h2>with signup</h2></span>
          <div className="pricing-plans-option-list">
            <ul>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> All marketplaces</ol>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Main categories</ol>
              <ol><svg className="pricing-plans-option-cross"><use xlinkHref="/media/sprite.svg#icon-cross"></use></svg> NO more ads</ol>
              <ol><svg className="pricing-plans-option-cross"><use xlinkHref="/media/sprite.svg#icon-cross"></use></svg> Favorites tab</ol>
              <ol><svg className="pricing-plans-option-cross"><use xlinkHref="/media/sprite.svg#icon-cross"></use></svg> Trending tab</ol>
              <ol><svg className="pricing-plans-option-cross"><use xlinkHref="/media/sprite.svg#icon-cross"></use></svg> Light/dark theme modes</ol>
            </ul>
          </div>
          <button className={`buttons-select ` + (user ? user.subscription == 0 ? ' buttons-subscription' : null : null)}>{user ? user.subscription == 0 ? 'Current plan' : 'Try it for free' : 'Try it for free'}</button>
        </div>
        <div className="pricing-plans-option option-pro">
          <div className="banner">
            <h1>MOST POPULAR</h1> 
            <h2>Save 50%</h2>
          </div>
          <h1 className="banner-pro">SPM Analyzer <span>Pro</span></h1>
          <span>$29.88 <h2>anually = $2.49/mo</h2></span>
          <div className="pricing-plans-option-list">
            <ul>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> All marketplaces</ol>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Main categories</ol>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Unlimited uninterrupted searches</ol>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> No more ads forever</ol>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Favorites tab</ol>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Trending tab</ol>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Light/dark theme mode</ol>
              <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> +PRO member benefits</ol>
            </ul>
          </div>
          <button className={`buttons-select pro` + (user ? user.subscription == 2 ? ' buttons-subscription' : null : null)}>{user ? user.subscription == 2 ? 'Current plan' : 'Try it for free' : 'Try it for free'}</button>
        </div>
        <div className="pricing-plans-option">
          <h1 className="banner-pro-monthly">SPM Analyzer <span>Pro</span></h1>
          <span>$4.99 <h2>monthly</h2></span>
          <div className="pricing-plans-option-list">
          <ul>
            <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> All marketplaces</ol>
            <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Main categories</ol>
            <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Unlimited uninterrupted searches</ol>
            <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> No more ads forever</ol>
            <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Favorites tab</ol>
            <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Trending tab</ol>
            <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> Light/dark theme mode</ol>
            <ol><svg className="pricing-plans-option-check"><use xlinkHref="/media/sprite.svg#icon-checkmark"></use></svg> +PRO member benefits</ol>
          </ul>
          <button className={`buttons-select ` + (user ? user.subscription == 1 ? ' buttons-subscription' : null : null)}>{user ? user.subscription == 1 ? 'Current plan' : 'Try it for free' : 'Try it for free'}</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default withUser(Pricing)
