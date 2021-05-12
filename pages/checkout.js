import Nav from '../components/nav'
import withUser from './withUser'
import {useState, useEffect} from 'react'

const Checkout = ({newUser}) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    if(newUser) setUser(JSON.parse(decodeURIComponent(newUser)))
    console.log(newUser)
  }, [])
  
  return (
    <>
      <Nav user={newUser}></Nav>
      {user ? user.subscription == 2 && <div data-thrivecart-account="spmanalyzer" data-thrivecart-tpl="v2" data-thrivecart-product="1" className="thrivecart-embeddable checkout" data-thrivecart-embeddable="tc-spmanalyzer-1-SGJZOP"></div> : null}
      {user ? user.subscription == 1 && <div data-thrivecart-account="spmanalyzer" data-thrivecart-tpl="v2" data-thrivecart-product="2" className="thrivecart-embeddable checkout" data-thrivecart-embeddable="tc-spmanalyzer-2-K7QF5W"></div> : null}
    </>
  )
}

export default withUser(Checkout)
