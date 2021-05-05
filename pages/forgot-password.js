import Nav from '../components/nav'
import withUser from './withUser'
import {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {API} from '../config'

const Pricing = ({newUser}) => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const forgotPassword = async (e) => {
    e.preventDefault()
    try {
      const responseForgotPassword= await axios.post(`${API}/auth/forgot-password`, {email})
      console.log(responseForgotPassword)
      setMessage(responseForgotPassword.data)
      // window.location.href = `/`
    } catch (error) {
      if(error) setMessage(error.response.data)
    }
  }
  
  return (
    <>
    <Nav user={newUser}></Nav>
    <div className="signup-container reset-password">
    <div className="signup">
      <form onSubmit={forgotPassword}>
        <h1 className="reset-password-heading">Enter your email to reset password</h1>
        <div className="signup-form-group">
          <svg>
            <use xlinkHref="/media/sprite.svg#icon-mail-add"></use>
          </svg>
          <input type="email" name="email" placeholder="Email" onChange={(e) => (setEmail(e.target.value))} value={email} required/>
        </div>
        {message ? <span className="reset-password-message">{message}</span>  : null}
        <button type="submit" className="signup-form-button" onClick={ e => forgotPassword(e)}>Reset Password</button>
      </form>
      </div>
    </div>
    </>
  )
}

export default withUser(Pricing)
