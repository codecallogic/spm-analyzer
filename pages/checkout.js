import Nav from '../components/nav'
import withUser from './withUser'
import {useState, useEffect} from 'react'

const Checkout = ({newUser}) => {

  const annual = () => {
    return <div data-thrivecart-account="spmanalyzer" data-thrivecart-tpl="v2" data-thrivecart-product="1" className="thrivecart-embeddable checkout" data-thrivecart-embeddable="tc-spmanalyzer-1-SGJZOP"></div>
  }

  const monthly = () => {
    return <div data-thrivecart-account="spmanalyzer" data-thrivecart-tpl="v2" data-thrivecart-product="2" className="thrivecart-embeddable checkout" data-thrivecart-embeddable="tc-spmanalyzer-2-K7QF5W"></div>
  }
  
  return (
    <>
    <Nav user={newUser}></Nav>
    {JSON.parse(decodeURIComponent(newUser)) ? null : <span>You have no items in cart</span> }
    {JSON.parse(decodeURIComponent(newUser)) ? JSON.parse(decodeURIComponent(newUser)).subscription == 2 ? annual() : null : null}
    {JSON.parse(decodeURIComponent(newUser)) ? JSON.parse(decodeURIComponent(newUser)).subscription == 1 ? monthly() : null : null}
    </>
  )
}

export default withUser(Checkout)
