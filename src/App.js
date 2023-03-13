import './App.css';

import React from 'react';
import ContactInfoComponent from './components/ContactInfoComponent';
import ContactLinks from "./components/ContactLinks";
import BodyComponent from "./components/BodyComponent";
import ImageComponent from './components/ImageComponent';
import Footer from './components/Footer';

export default function App() {
  return (
    
      <main className="mainContainer">
        <ImageComponent/>
        <ContactInfoComponent/>
        <ContactLinks/>
        <BodyComponent/>
        <Footer/>


      </main>
    
  );
}


