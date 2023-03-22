import './App.css';

import React from 'react';
import ContactInfo from './components/ContactInfo';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import ImageComponent from './components/ImageComponent';

export default function App() {
  return (
    
    <main className="mainContainer">
      <ImageComponent/>
        <ContactInfo/>
        <About/>
        <Interests/>
        <Footer/>


      </main>
    
  );
}


