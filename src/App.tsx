import React from 'react';
import logo from './logo.svg';
//importar biblioteca material ui
import { Grid, Paper } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home  from './paginas/home/Home';
import Navbar from './paginas/estatico/navbar/Navbar';
import Footer from './paginas/estatico/footer/Footer';
//<></> é um componente que chamamos de fragment no react, ele é uma forma "Simplificada" de incluir um div
function App() {
  return( 
  <Router> 
     
    <Navbar /> 
    
    <div style={{ minHeight: 'calc(100vh - 180px)' }}>
    <Routes> // Antigo Switch 
      
      <Route path="/home" element={<Home />} /> 
      <Route path="/cadastro" element={<Footer />} /> 
      </Routes> 
      </div>

      <Footer /> 
      
      </Router> 
  )
}

export default App;
