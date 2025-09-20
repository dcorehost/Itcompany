import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import TestimonialCarousel from '../Components/TestimonialCarousel/TestimonialCarousel';
import OurServices from '../Components/OurServices/OurServices';
import AboutSection from '../Components/AboutSection/AboutSection';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';
import OurClients from '../Components/OurClients/OurClients';





const HomePage = () => {
  return (
    <>
    <div>
        <NavBar />
        <HomeBanner />
        <AboutSection />
        <WhyChooseUs />
        <OurClients />
        <OurServices />
        <TestimonialCarousel />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default HomePage;