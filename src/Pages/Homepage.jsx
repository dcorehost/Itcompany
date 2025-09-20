import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import TestimonialCarousel from '../Components/TestimonialCarousel/TestimonialCarousel';
import OurServices from '../Components/OurServices/OurServices';





const HomePage = () => {
  return (
    <>
    <div>
        <NavBar />
        <HomeBanner />
        <OurServices />
        <TestimonialCarousel />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default HomePage;