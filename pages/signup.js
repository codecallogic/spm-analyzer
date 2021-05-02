import Nav from '../components/nav'
import {useState, useEffect} from 'react'
import {API} from '../config'
import axios from 'axios'
axios.defaults.withCredentials = true

const Signup = ({}) => {

  let initializeError = 'Password and confirm password dont match'

  const [email, setEmail] = useState('')
  const [password, setPassword]  = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(initializeError)
  const [displayError, setDisplayError] = useState(false)

  const signup = async (e) => {
    e.preventDefault()
    if(password == confirmPassword){
      try {
        const responseSignUp = await axios.post(`${API}/auth/register`, {email, password})
        window.location.href = '/pricing'
      } catch (error) {
        console.log(error.response)
        if(error.response.data){
          error.response.data && !error.response.data.error ? (setError(error.response.data), setDisplayError(true)) : null

          error.response.data.error ? error.response.data.error.param == 'password' ? (setError('Password is not complex'), setDisplayError(true)) : null : null

          error.response.data.error ? error.response.data.error.param == 'email' ? (setError('Not a valid email'), setDisplayError(true)) : null : null
        }
      }
    }
  }

  const runErrors = (e) => {
    e.target.name == 'password' ? e.target.value !== confirmPassword ? setDisplayError(true) : setDisplayError(false) : null
    e.target.name == 'confirmPassword' ? e.target.value !== password ? setDisplayError(true) : setDisplayError(false) : null
  }
  
  return (
    <>
    <Nav></Nav>
    <div className="signup-container">
      <div className="signup">
        <img src="/media/logo-3.png" alt="SPM-Analyzer Logo" className="signup-logo"/>
        <h1>Create an account to get started</h1>
        <form onSubmit={signup}>
          <div className="signup-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-mail-add"></use>
            </svg>
            <input type="email" name="email" placeholder="Email" onChange={(e) => (setEmail(e.target.value), setError(initializeError), runErrors(e))} value={email} required/>
          </div>
          <div className="signup-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-lock-rounded"></use>
            </svg>
            <input type="password" name="password" placeholder="Password" onChange={(e) => (setPassword(e.target.value), setError(initializeError), runErrors(e))} value={password} required/>
          </div>
          <div className="signup-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-lock-rounded"></use>
            </svg>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={(e) => (setConfirmPassword(e.target.value), setError(initializeError), runErrors(e))} value={confirmPassword} required/>
          </div>

          {displayError ? <p className="signup-form-error">{error}</p> : <div className="signup-form-error-height">Dummy text</div>}

          <button type="submit" className="signup-form-button">Sign Up</button>
          <ul className="signup-form-list">
            <li>Password must have a mininum of 8 characters</li>
            <li>Must contain a uppercase letter</li>
            <li>Must contian one lowercase letter</li>
            <li>Must contain a number</li>
            <li>Must contain one special character</li>
          </ul>
          <span className="signup-form-terms">By signing up you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy-policy">Privacy Policy</a></span>
        </form>
        <h2 className="signup-signup">
          Already have an account? <a href="/login">Sign in</a>
        </h2>
        <span className="signup-copyright">&copy; 2021 by SPM Analyzer | APPD LLC | All Rights Reserved</span>
      </div>
    </div>
    </>
  )
}

export default Signup
