import React from 'react'
import Header from "./../components/Header"
import Button from '../components/Button'
import Hero from "../components/Hero"
import Merck from '../components/Merck'
import Platform from '../components/Platform'
import Box from '../components/Box'
import See from "../components/See"
import Cards from "../components/Cards"
import AnotherBox from '../components/AnotherBox'
import Asana from "../components/Asana"
import Connect from '../components/Connect'
import Iconic from '../components/Iconic'

const asanaLanding = () => {
  return (
    <>
    <div className='site_wrapper'>
      <Header/>
      <Button/>
      <Hero/>
      <Merck/>
      <Platform/>
      <Box/>
      <See/>
      <Cards/>
      <AnotherBox/>
      <Asana/>
      <Connect/>
      {/* <Iconic/> */}
      </div>
    </>
  )
}

export default asanaLanding
