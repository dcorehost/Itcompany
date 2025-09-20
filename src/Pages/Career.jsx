import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import Careerbanner from '../Components/Careerbanner/Careerbanner';
import Ctabutton from '../Components/Ctabutton/Ctabutton';
import Careerworking from '../Components/Careerworking/Careerworking';
import Careerpositions from '../Components/Careerpositions/Careerpositions';
import CareerForm from '../Components/Careerform/Careerform';
import Careerhire from '../Components/Careerhire/Careerhire';





const Career= () => {
  return (
    <>
    <div>
        <NavBar />
        <Careerbanner />
        <Careerworking />
        <Careerhire />
        <Careerpositions />
        <CareerForm />
        <Ctabutton />
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default Career;