import './App.css';

import React from 'react';
import ContactInfo from './components/ContactInfo';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import ImageComponent from './components/ImageComponent';

export default function App() {
  return (
    
    <main >
      <ImageComponent />
      <div className='MainContainer'>
        <ContactInfo/>
        <About/>
        <Interests/>
        <Footer/>
      </div>

      </main>
    
  );
}


