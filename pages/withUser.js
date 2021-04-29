import {API} from '../config'
import axios from 'axios'
import {getUser} from '../utils/user'
import Cookies from 'cookies'
axios.defaults.withCredentials = true

const withUser = Page => {
    const WithAuthUser = props => <Page {...props} />
    WithAuthUser.getInitialProps = async (context)  => {
      const cookies = new Cookies(context.req, context.res)
      const email = context.query.user
      const password = context.query.token
      const user = getUser(context.req)
      let newUser = null

      if(user){newUser = user.split('=')[1]}

      if(context.query.token){
        try {
          const responseLogin = await axios.post(`${API}/auth/login`, {email, password})
          cookies.set('user', JSON.stringify(responseLogin.data))
          newUser = JSON.stringify(responseLogin.data)
        } catch (error) {
          console.log(error)
        }
      }

      if(user == null){
          return {
            ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
            newUser,
          }
      }else{
          return {
              ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
              newUser,
          }
      }
    }

    return WithAuthUser
}

export default withUser