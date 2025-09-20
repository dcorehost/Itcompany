import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import ContactBanner from '../Components/ContactBanner/ContactBanner';
import Contact from '../Components/Contact/Contact';
import Newsletter from '../Components/Newsletter/Newsletter';
import CTASection from '../Components/Ctabutton/Ctabutton';





const ContactUs= () => {
  return (
    <>
    <div>
        <NavBar />
        <ContactBanner />
        <Contact />
        <Newsletter />
        <CTASection />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default ContactUs;