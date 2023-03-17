import './App.css';

import React from 'react';
import ContactInfo from './components/ContactInfo';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';


export default function App() {
  return (
    
      <main className="mainContainer">
        <ContactInfo/>
        <About/>
        <Interests/>
        <Footer/>


      </main>
    
  );
}


