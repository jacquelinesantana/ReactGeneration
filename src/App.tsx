import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Home  from './paginas/home/Home';
import Navbar from './paginas/estatico/navbar/Navbar';
import Footer from './paginas/estatico/footer/Footer';
//<></> é um componente que chamamos de fragment no react, ele é uma forma "Simplificada" de incluir um div
function App() {
  return (
    <>
      <Navbar />

      <Home />

      <Footer />
    </>
  );
}

export default App;
