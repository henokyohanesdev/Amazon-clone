import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/montserrat";
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel';
import Footer from './Components/Footer/Footer'
import './App.css'

export default function App() {

  return (
    <>
      <Header />
      <Carousel />
      <Footer />
    </>
  )
}
