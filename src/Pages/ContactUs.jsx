import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import ContactBanner from '../Components/ContactBanner/ContactBanner';
import Contact from '../Components/Contact/Contact';
import Newsletter from '../Components/Newsletter/Newsletter';





const ContactUs= () => {
  return (
    <>
    <div>
        <NavBar />
        <ContactBanner />
        <Contact />
        <Newsletter />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default ContactUs;