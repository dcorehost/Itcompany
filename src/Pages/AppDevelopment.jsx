import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import AppDevBanner from '../Components/Appdevbanner/Appdevbanner';
import Appchoose from '../Components/Appchoose/Appchoose';
import Appservices from '../Components/Appservices/Appservices';
import Appprocess from '../Components/Appprocess/Appprocess';
import TestimonialCarousel from '../Components/TestimonialCarousel/TestimonialCarousel';
import Appfaq from '../Components/Appfaq/Appfaq';
import Ctabutton from '../Components/Ctabutton/Ctabutton';
import Appabout from '../Components/Appabout/Appabout';







const AppDevelopment= () => {
  return (
    <>
    <div>
        <NavBar />
        <AppDevBanner />
        <Appabout />
        <Appchoose />
        <Appservices />
        <Appprocess />
        <TestimonialCarousel />
        <Appfaq />
        <Ctabutton />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default AppDevelopment;