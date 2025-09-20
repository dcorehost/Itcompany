import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import HomeBanner from '../Components/HomeBanner/HomeBanner';
import TestimonialCarousel from '../Components/TestimonialCarousel/TestimonialCarousel';
import OurServices from '../Components/OurServices/OurServices';
import AboutSection from '../Components/AboutSection/AboutSection';

import OurClients from '../Components/OurClients/OurClients';
import HomeFaq from '../Components/HomeFaq/HomeFaq';
import WhyChooseUsHome from '../Components/WhyChooseUsHome/WhyChoseUsHome';
import HomeBlog from '../Components/HomeBlog/HomeBlog';
import CTASection from '../Components/Ctabutton/Ctabutton';





const HomePage = () => {
  return (
    <>
    <div>
        <NavBar />
        <HomeBanner />
        <AboutSection />
        <WhyChooseUsHome />
       
        
        <OurClients />
        <OurServices />
        <HomeBlog />
        <TestimonialCarousel />
        <HomeFaq />
        <CTASection />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default HomePage;