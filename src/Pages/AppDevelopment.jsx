import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import AppDevBanner from '../Components/Appdevbanner/Appdevbanner';
import Appchoose from '../Components/Appchoose/Appchoose';
import Appservices from '../Components/Appservices/Appservices';
import Appprocess from '../Components/Appprocess/Appprocess';





const AppDevelopment= () => {
  return (
    <>
    <div>
        <NavBar />
        <AppDevBanner />
        <Appchoose />
        <Appservices />
        <Appprocess />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default AppDevelopment;