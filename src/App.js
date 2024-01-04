import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Banner from './Components/Banner';
import Experts from './Components/Experts';
import NewsLetter from './Components/NewsLetter';
import Plans from './Components/Plans';
import Footer from './Components/Footer';

function App() {
  return (
       <BrowserRouter>
      <Header />
      <Banner/>
      <Experts/>
      <NewsLetter/>
      <Plans/>
      <Footer/>
    </BrowserRouter>
    
  );
}


export default App;
