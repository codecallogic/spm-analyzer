import {useState, useEffect} from 'react'
import Nav from '../components/nav'
import axios from 'axios'
import {API} from '../config'
import withUser from './withUser'
import {useRouter} from 'next/router'
axios.defaults.withCredentials = true

const Login = ({newUser}) => {
  let page = 'pricing'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const loginUser = async (e) => {
    e.preventDefault()
    try {
      const responseLogin = await axios.post(`${API}/auth/login`, {email, password})
      setError(false)
      window.location.href = `/${page}`
    } catch (error) {
      if(error) setError(true)
    }
  }

  useEffect(() => {
    if(newUser) window.location.href = `/${page}`
  }, [newUser])
  
  return (
    <>
    <Nav></Nav>
    <div className="login-container">
      <div className="login">
        <img src="/media/logo-3.png" alt="SPM-Analyzer Logo" className="login-logo"/>
        <h1>Login into your account</h1>
        <form onSubmit={loginUser}>
          <div className="login-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-mail-add"></use>
            </svg>
            <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} value={email} required/>
          </div>
          <div className="login-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-lock-rounded"></use>
            </svg>
            <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} value={password} required/>
          </div>
          {error ? <p className="login-form-error">Username or password do not match.</p> : null }
          <button type="submit" className="login-form-button">Sign In</button>
          <span className="login-form-terms">By logging in you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a></span>
        </form>
        <h2 className="login-signup">
          Create your account today! <a href="/signup">Sign up</a>
        </h2>
        <span className="login-copyright">&copy; 2021 by SPM Analyzer | APPD LLC | All Rights Reserved</span>
      </div>
    </div>
    </>
  )
}

export default withUser(Login)
