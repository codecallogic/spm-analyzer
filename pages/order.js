import Nav from '../components/nav'
import withUser from '../pages/withUser'
import axios from 'axios'
import {API} from '../config'
import {useEffect} from 'react'

const Order = ({newUser, order, plan}) => {

  useEffect(async () => {

    newUser ? null : window.location.reload()
    
    let changeUserSubscription = newUser ? JSON.parse(decodeURIComponent(newUser)) : null
    let subscriptionValue = order ? order == 1 ? 2 : 1 : null
    
    if(newUser !== undefined && order){
      try {
        const responseConfirm = await axios.post(`${API}/auth/change-subscription`, {changeUserSubscription, subscriptionValue})
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  return (
    <>
      <Nav user={newUser}></Nav>
      <div className="order">
        {order == 1 && <div className="order-pro">
          You've successfully subscribed for the {plan} plan!
        </div>
        }
        {order == 2 && <div className="order-pro">
          You've successfully subscribed for the {plan} plan!
        </div>
        }
        {order == null && <div className="order-empty">
          You have no new orders placed.
        </div>}
      </div>
    </>
  )
}

Order.getInitialProps = async ({query, newUser}) => {

  let id = Object.entries(query).filter( (item) => {
    return item.includes('thrivecart[order][0][id]') ? item : null
  })

  console.log(id[0][1])

  let plan = Object.entries(query).filter( (item) => {
    return item.includes('thrivecart[order][0][n]') ? item : null
  })
  
  return {
    order: id[0] ? id[0][1] : null ,
    plan: plan[0] ? plan[0][1] : null
  }
}

export default withUser(Order)
