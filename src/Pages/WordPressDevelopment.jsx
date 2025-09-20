import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import WordpressBanner from '../Components/WordpressBanner/WordpressBanner';
import WhyChooseUsWordpress from '../Components/WhyChooseUsWordpress/WhyChooseUsWordpress';
import ServicesWeOffer from '../Components/ServicesWeOffer/ServicesWeOffer';
import WordPressDevelopmentProcess from '../Components/WordPressDevelopmentProcess/WordPressDevelopmentProcess';
import WordPressFAQ from '../Components/WordPressFAQ/WordPressFAQ';






const WordPressDevelopment= () => {
  return (
    <>
    <div>
        <NavBar />
        <WordpressBanner />
        <WhyChooseUsWordpress />
        <ServicesWeOffer />
        <WordPressDevelopmentProcess />
        <WordPressFAQ />
      
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default WordPressDevelopment;