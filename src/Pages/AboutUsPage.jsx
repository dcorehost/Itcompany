import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Services from '../Components/Services/Services';
import AboutSection from '../Components/AboutSection/AboutSection';
import OurServices from '../Components/OurServices/OurServices';
import OurClients from '../Components/OurClients/OurClients';
import TestimonialCarousel from '../Components/TestimonialCarousel/TestimonialCarousel';
import AboutFAQ from '../Components/AboutFAQ/AboutFAQ';
import CTASection from '../Components/Ctabutton/Ctabutton';





const AboutUsPage= () => {
  return (
    <>
    <div>
        <NavBar />
        <AboutSection />
        {/* <OurClients />   */}
        <OurServices />
        <TestimonialCarousel />
        <AboutFAQ />
        <CTASection />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default AboutUsPage;