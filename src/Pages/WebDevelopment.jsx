import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import BannerSection from '../Components/BannerSection/BannerSection';

import WebDevCatogories from '../Components/WebDevCatogories/WebDevCatogories';
import WebDevelopmentServices from '../Components/WebDevelopmentServices/WebDevelopmentServices';
import WebDevelopmentFAQ from '../Components/WebDevelopmentFAQ/WebDevelopmentFAQ';
import WhyChooseUsWeb from '../Components/WhyChooseUsWeb/WhyChooseUsWeb';
import CTASection from '../Components/Ctabutton/Ctabutton';






const WebDevelopment= () => {
  return (
    <>
    <div>
        <NavBar />
        <BannerSection />
        <WhyChooseUsWeb />
       
        <WebDevCatogories />
        <WebDevelopmentServices />
        <WebDevelopmentFAQ />
        <CTASection />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default WebDevelopment;