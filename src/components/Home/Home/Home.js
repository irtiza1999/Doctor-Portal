import React from 'react'
import FeaturedServices from '../FeaturedServices/FeaturedServices'
import Header from '../Header/Header'
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedServices></FeaturedServices>
      <MakeAppoinment></MakeAppoinment>
    </div>
  )
}

export default Home
