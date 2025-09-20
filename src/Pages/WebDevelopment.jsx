import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import BannerSection from '../Components/BannerSection/BannerSection';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';
import WebDevCatogories from '../Components/WebDevCatogories/WebDevCatogories';
import WebDevelopmentServices from '../Components/WebDevelopmentServices/WebDevelopmentServices';
import WebDevelopmentFAQ from '../Components/WebDevelopmentFAQ/WebDevelopmentFAQ';





const WebDevelopment= () => {
  return (
    <>
    <div>
        <NavBar />
        <BannerSection />
        <WhyChooseUs />
        <WebDevCatogories />
        <WebDevelopmentServices />
        <WebDevelopmentFAQ />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default WebDevelopment;