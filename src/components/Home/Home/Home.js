import React from 'react'
import Blogs from '../Blogs/Blogs'
import Contact from '../Contact/Contact'
import Doctors from '../Doctors/Doctors'
import FeaturedServices from '../FeaturedServices/FeaturedServices'
import Footer from '../../Shared/Footer/Footer'
import Header from '../Header/Header'
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment'
import Services from '../Services/Services'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <FeaturedServices></FeaturedServices>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Doctors></Doctors>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
