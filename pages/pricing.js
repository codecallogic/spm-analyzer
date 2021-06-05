import Nav from '../components/nav'
import withUser from './withUser'
import {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {API} from '../config'
import {useRouter} from 'next/router'
axios.defaults.withCredentials = true

const Pricing = ({newUser}) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [bgmodal, setModal] = useState(false)
  const [subscription, setSubscription] = useState(null)
  const [survey, setSurvey] = useState(false)
  const [question1, setQuestion1] = useState(null)
  const [question2, setQuestion2] = useState(null)
  const [message, setMessage] = useState('')

  const ref = useRef()

  const handleClickOutside = (e) => {
    if(ref.current && !ref.current.contains(e.target)){
      setModal(false)
      setSurvey(false)
    }
  }
  
  useEffect(() => {
    router.query.email && router.query.password ? null : newUser == null ? null : setUser(JSON.parse(decodeURIComponent(newUser)))
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

  const goTo = (e, newSubscription) => {
    if(newSubscription == 0){
      !newUser ? window.location.href = `/login` : setSurvey(true)
    }else{
      window.location.href = `/checkout?subscription=${newSubscription}`
    }
  }

  const confirm = async (e, newSubscription) => {
    let changeUserSubscription = JSON.parse(decodeURIComponent(newUser))
    let subscriptionValue = subscription !== null ? subscription : newSubscription

    try {
      const responseConfirm = await axios.post(`${API}/auth/change-subscription`, {changeUserSubscription, subscriptionValue})
      responseConfirm.data.subscription !== 0 ? window.location.href = '/checkout' : window.location.href = '/sales-estimate'

    } catch (error) {
      console.log(error)
    }
  }

  const activeOption = (e) => {
    let els = document.querySelectorAll('.form-group-single-option')
    els.forEach( (item) => {
      item.classList.remove('form-group-single-option-active')
    })

    let el = e.target
    el.classList.add('form-group-single-option-active')
    setQuestion1(e.target.innerText)
  }

  const removeActiveOptions = () => {
    let els = document.querySelectorAll('.form-group-single-option')
    els.forEach( (item) => {
      item.classList.remove('form-group-single-option-active')
    })
  }

  const sendSurvey = async (e) => {
    e.preventDefault()
    let changeUserSubscription = newUser ? JSON.parse(decodeURIComponent(newUser)) : null
    let subscriptionValue = 0

    console.log(changeUserSubscription)
    
    if(question1 == null) return setMessage('Question 1 is required, please select one or fill out other.')

    try {
      const responseCancellation = await axios.post(`${API}/survey-cancellation`, {userEmail: changeUserSubscription.username, question1})
      const responseSuggestion = await axios.post(`${API}/survey-suggestion`, {userEmail: changeUserSubscription.username, question2})
      const responseChangeSubscription = await axios.post(`${API}/auth/change-subscription`, {changeUserSubscription, subscriptionValue})
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
          <button onClick={(e) => goTo(e, 0)} className={`buttons-select ` + (user ? user.subscription == 0 ? ' buttons-subscription' : null : null)}>{user ? user.subscription == 0 ? 'Current plan' : 'Downgrade' : 'Try it for free'}</button>
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
          <button onClick={(e) => goTo(e, 2)} className={`buttons-select pro` + (user ? user.subscription == 2 ? ' buttons-subscription' : null : null)}>{user ? user.subscription == 2 ? 'Current plan' : 'Save 50%' : 'Try it for free'}</button>
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
          <button onClick={(e) => goTo(e, 1)} className={`buttons-select ` + (user ? user.subscription == 1 ? ' buttons-subscription' : null : null)}>{user ? user.subscription == 1 ? 'Current plan' : user.subscription == 0 ? 'Try it for free' : 'Downgrade' : 'Try it for free'}</button>
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
            <button className="modal-content-buttons-cancel" onClick={() => setModal(false)}>Cancel</button>
            <button className="modal-content-buttons-confirm" onClick={confirm}>Confirm</button>
          </div>
        </div>
        <svg className="bg-modal-icon">
          <use xlinkHref="/media/sprite.svg#icon-cross"></use>
        </svg>
      </div>
      }
      {survey && 
      <div className="bg-modal" onClick={handleClickOutside}>
        <div className="survey-modal-content" ref={ref}>
          <div className="survey-modal-content-title">Sorry to see you leave the PRO family! Take 30 seconds to let us know why.</div>
          <form className="survey-modal-content-form" onSubmit={(e) => sendSurvey(e)}>
            <label>1. I downgraded because:</label>
            <div className="form-group-single">
              <div className="form-group-single-option" onClick={(e) => activeOption(e)}>No longer needed</div>
              <div className="form-group-single-option" onClick={(e) => activeOption(e)}>No enough benefits</div>
              <div className="form-group-single-option" onClick={(e) => activeOption(e)}>Too expensive</div>
              <label htmlFor="other">Other</label>
              <textarea name="other" cols="100" rows="5" onChange={(e) => (setQuestion1(e.target.value), removeActiveOptions())}></textarea>
            </div>
            <label>2. Any suggestions for updates we can add in the future?</label>
            <div className="form-group-single">
              <textarea name="suggestion" cols="100" rows="5" onChange={(e) => setQuestion2(e.target.value)}></textarea>
            </div>
            <div className="form-message">{message ? message : ''}</div>
            <div className="survey-modal-content-form-button-container">
              <button className="survey-modal-content-form-button-cancel" onClick={() => setSurvey(false)}>Cancel</button>
              <button className="survey-modal-content-form-button" type="submit">Submit</button>
            </div>
          </form>
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
