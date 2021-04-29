import {API} from '../config'
import axios from 'axios'
import {getUser} from '../utils/user'
import Router from 'next/router'

const withUser = Page => {
    const WithAuthUser = props => <Page {...props} />
    WithAuthUser.getInitialProps = async (context)  => {
      console.log(context.query)
      const user = getUser(context.req)
      let newUser = null

      if(user){newUser = user.split('=')[1]}

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