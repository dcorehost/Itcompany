import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import AppDevelopment from './Pages/AppDevelopment';
import WebDevelopment from './Pages/WebDevelopment';
import WordPressDevelopment from './Pages/WordPressDevelopment';
import Privacy from './Pages/Privacy';
import ContactUs from './Pages/ContactUs';
import LoginPage from './Pages/LoginPage';
import Career from './Pages/Career';
import Terms from './Pages/Terms';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/app-development" element={<AppDevelopment />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/wordpress-development" element={<WordPressDevelopment />} />
      
      <Route path='/privacy-policy' element={<Privacy />}/>
      <Route path='/contact-us' element={<ContactUs />}/>
       <Route  path='/login' element={<LoginPage />} />
      <Route path="/career" element={<Career />} />
      <Route path="/terms-condition" element={<Terms />} />
   

      
     
    </Routes>
  );
};

export default App;
