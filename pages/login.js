import Nav from '../components/nav'

const Login = ({}) => {
  
  return (
    <>
    <Nav></Nav>
    <div className="login-container">
      <div className="login">
        <img src="/media/logo-3.png" alt="SPM-Analyzer Logo" className="login-logo"/>
        <h1>Login into your account</h1>
        <form>
          <div className="login-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-mail-add"></use>
            </svg>
            <input type="email" placeholder="Email"/>
          </div>
          <div className="login-form-group">
            <svg>
              <use xlinkHref="/media/sprite.svg#icon-lock-rounded"></use>
            </svg>
            <input type="password" placeholder="Password"/>
          </div>
          <button className="login-form-button">Sign In</button>
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

export default Login
