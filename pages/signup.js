import Nav from '../components/nav'

const Signup = ({}) => {
  
  return (
    <>
    <Nav></Nav>
    <div className="signup-container">
      <div className="signup">
        <img src="/media/logo-3.png" alt="SPM-Analyzer Logo" className="signup-logo"/>
        <h1>Create an account to get started</h1>
        <form>
          <div className="signup-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-mail-add"></use>
            </svg>
            <input type="email" placeholder="Email"/>
          </div>
          <div className="signup-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-lock-rounded"></use>
            </svg>
            <input type="password" placeholder="Password"/>
          </div>
          <div className="signup-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-lock-rounded"></use>
            </svg>
            <input type="password" placeholder="Confirm Password"/>
          </div>
          <button className="signup-form-button">Sign Up</button>
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
