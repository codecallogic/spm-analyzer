import Nav from '../components/nav'
import withUser from './withUser'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

const Checkout = ({newUser}) => {

  const router = useRouter()

  useEffect(() => {
    router.query.email && router.query.password ? null : newUser == null ? window.location.href = '/signup' : null
  }, [])



  const annual = () => {
    return <div data-thrivecart-account="spmanalyzer" data-thrivecart-tpl="v2" data-thrivecart-product="1" className="thrivecart-embeddable checkout" data-thrivecart-embeddable="tc-spmanalyzer-1-SGJZOP"></div>
  }

  const monthly = () => {
    return <div data-thrivecart-account="spmanalyzer" data-thrivecart-tpl="v2" data-thrivecart-product="2" className="thrivecart-embeddable checkout" data-thrivecart-embeddable="tc-spmanalyzer-2-K7QF5W"></div>
  }
  
  return (
    <>
    <Nav user={newUser}></Nav>
    {router.query.subscription ? null : <div className="checkout"><span className="checkout-empty">You have no items in cart</span></div>}
    {router.query.subscription ? router.query.subscription == 2 ? annual() : null : null}
    {router.query.subscription ? router.query.subscription == 1 ? monthly() : null : null}
    </>
  )
}

export default withUser(Checkout)
