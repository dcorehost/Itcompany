import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import WordpressBanner from '../Components/WordpressBanner/WordpressBanner';
import WhyChooseUsWordpress from '../Components/WhyChooseUsWordpress/WhyChooseUsWordpress';
import ServicesWeOffer from '../Components/ServicesWeOffer/ServicesWeOffer';
import WordPressDevelopmentProcess from '../Components/WordPressDevelopmentProcess/WordPressDevelopmentProcess';
import WordPressFAQ from '../Components/WordPressFAQ/WordPressFAQ';
import CTASection from '../Components/Ctabutton/Ctabutton';






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
        <CTASection />
      
        <Footer />
       
      
        
    </div>
    </>
  )
}

export default WordPressDevelopment;