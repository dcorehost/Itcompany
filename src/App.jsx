import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import AboutUsPage from './Pages/AboutUsPage';
import AppDevelopment from './Pages/AppDevelopment';
import WebDevelopment from './Pages/WebDevelopment';
import WordPressDevelopment from './Pages/WordPressDevelopment';
import Career from './Pages/Career';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/app-development" element={<AppDevelopment />} />
      <Route path="/web-development" element={<WebDevelopment />} />
      <Route path="/wordpress-development" element={<WordPressDevelopment />} />
      <Route path="/career" element={<Career />} />

      
     
    </Routes>
  );
};

export default App;
