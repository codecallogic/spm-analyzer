import Nav from '../components/nav'
import withUser from './withUser'
import {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {API} from '../config'

const Pricing = ({newUser}) => {

  const [user, setUser] = useState(null)
  const [bgmodal, setModal] = useState(false)
  const [subscription, setSubscription] = useState(null)

  const ref = useRef()

  const handleClickOutside = (e) => {
    if(ref.current && !ref.current.contains(e.target)){
      setModal(false)
    }
  }
  
  useEffect(() => {
    if(newUser) setUser(JSON.parse(decodeURIComponent(newUser)))
  }, [])

  const popUp = (e, newSubscription) => {
    if(e.target.innerText.toLowerCase() == 'downgrade'){
      setModal(true)
      if(newUser) setSubscription(newSubscription)
    }else{
      if(newUser) setSubscription(newSubscription)
      confirm(null, newSubscription)
    }
  }

  const confirm = async (e, newSubscription) => {
    let changeUserSubscription = JSON.parse(decodeURIComponent(newUser))
    let subscriptionValue = subscription !== null ? subscription : newSubscription

    try {
      const responseConfirm = await axios.post(`${API}/auth/change-subscription`, {changeUserSubscription, subscriptionValue})
      window.location.href = '/pricing'
    } catch (error) {
      console.log(error)
    }
  }
  
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
          <button onClick={(e) => popUp(e, 0)} className={`buttons-select ` + (user ? user.subscription == 0 ? ' buttons-subscription' : null : null)}>{user ? user.subscription == 0 ? 'Current plan' : 'Downgrade' : 'Try it for free'}</button>
        </div>
        <div className="pricing-plans-option option-pro">
          <div className="banner-annually">
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
          <button onClick={(e) => popUp(e, 2)} className={`buttons-select pro` + (user ? user.subscription == 2 ? ' buttons-subscription' : null : null)}>{user ? user.subscription == 2 ? 'Current plan' : 'Save 50%' : 'Try it for free'}</button>
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
          <button onClick={(e) => popUp(e, 1)} className={`buttons-select ` + (user ? user.subscription == 1 ? ' buttons-subscription' : null : null)}>{user ? user.subscription == 1 ? 'Current plan' : user.subscription == 0 ? 'Try it for free' : 'Downgrade' : 'Try it for free'}</button>
          </div>
        </div>
      </div>
      {bgmodal && 
      <div className="bg-modal" onClick={handleClickOutside}>
        <div className="modal-content" ref={ref}>
          { subscription == 2 ? <h1 className="banner-pro">SPM Analyzer <span>Pro annual plan</span></h1> : null}
          { subscription == 1 ? <h1 className="banner-pro">SPM Analyzer <span>Pro monthly plan</span></h1> : null}
          { subscription == 0 ? <h1 className="banner-pro">SPM Analyzer <span>Pro free plan</span></h1> : null}
          {subscription == 2 ? <p className="modal-content-change">Would you like to change your current subscription to <span>SPM Analyzer <span>Pro annual plan?</span></span></p>: null}
          {subscription == 1 ? <p className="modal-content-change">Would you like to change your current subscription to <span>SPM Analyzer <span>Pro monthly plan?</span></span></p>: null}
          {subscription == 0 ? <p className="modal-content-change">Would you like to change your current subscription to <span>SPM Analyzer <span>Pro free plan?</span></span> </p>: null}
          <div className="modal-content-buttons">
            <button className="modal-content-buttons-cancel" onClick={() => setModel(false)}>Cancel</button>
            <button className="modal-content-buttons-confirm" onClick={confirm}>Confirm</button>
          </div>
        </div>
        <svg className="bg-modal-icon">
          <use xlinkHref="/media/sprite.svg#icon-cross"></use>
        </svg>
      </div>
      }
    </div>
    </>
  )
}

export default withUser(Pricing)
